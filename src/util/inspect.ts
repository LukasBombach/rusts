import util from "util";

function inspect(value: any, depth: number = null, colors = true) {
  console.log(util.inspect(value, { depth, colors }));
}

export default inspect;
