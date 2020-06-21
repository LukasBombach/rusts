import fs from "fs";
import { resolve } from "path";
import util from "util";
import * as ts from "typescript";

import type { SourceFile } from "typescript";

describe("fist steps", () => {
  async function readFixture(fileName: string) {
    const filePath = resolve(__dirname, "__fixtures__", fileName);
    return await fs.promises.readFile(filePath, "utf8");
  }

  async function readAst(fileName: string) {
    const source = await readFixture(fileName);
    return ts.createSourceFile(fileName, source, ts.ScriptTarget.Latest);
  }

  function inspect(value: any, depth: number = null, colors = true) {
    console.log(util.inspect(value, { depth, colors }));
  }

  test("the setup works", () => {
    expect(true).toBe(true);
  });

  test("it can read an AST", async () => {
    const ast = await readAst("helloworld.ts");
    expect(ts.isSourceFile(ast)).toBe(true);
  });
});
