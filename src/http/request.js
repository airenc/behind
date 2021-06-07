import Axios from "axios";

import router from "@/router";

import store from "@/store";

import qs from "qs";

// import Vue from "vue";

let baseURL = "http://127.0.0.1:8888/api/private/v1/";

const instance = Axios.create({
  baseURL,

  timeout: 2000, //超时时间
});

instance.interceptors.request.use(
  function(config) {
    if (store.state.token) {
      config.headers.Authorization = store.state.token;
    }

    return config;
  },

  function(err) {
    return Promise.reject(err); //这是promise的一个方法，执行的结果是一个promise，而且会立刻执行catch方法，并把参数传到catch里
  }
);

//请求拦截

instance.interceptors.response.use(
  function(response) {
    if (response.data.msg == "无效token") {
      router.push("/login");
    }
    return response;
  },

  function(err) {
    return Promise.reject(err);
  }
);

//响应拦截

export default function http(url, method, data = {}, params = {}) {
  return instance({
    url: url,

    method: method,

    data: qs.stringify(data),

    params: params,
  })
    .then((res) => {
      return res;
    })

    .catch((err) => {
      return Promise.reject(err);
    });
}
