import htt from "./request";

async function getuser(ob) {
  let { data } = await htt("", "get", {}, ob);

  console.log(data);

  // return res;

  return data;

}

export { getuser };