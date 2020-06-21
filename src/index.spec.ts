import fs from "fs";
import { resolve } from "path";
import ts from "typescript";

describe("fist steps", () => {
  async function readFixture(fileName: string) {
    const filePath = resolve(__dirname, "__fixtures__", fileName);
    return await fs.promises.readFile(filePath, "utf8");
  }

  async function readAst(fileName: string) {
    const source = await readFixture(fileName);
    return ts.createSourceFile(fileName, source, ts.ScriptTarget.Latest);
  }

  test("the setup works", () => {
    expect(true).toBe(true);
  });

  test("it can read an AST", async () => {
    const ast = await readAst("helloworld.ts");
    debugger;
    expect(ts.isSourceFile(ast)).toBe(true);
  });
});
