import fs from "fs";
import { resolve } from "path";
import { Project } from "ts-morph";

describe("fist steps", () => {
  const project = new Project();

  async function readFixture(fileName: string) {
    const filePath = resolve(__dirname, "__fixtures__", fileName);
    return await fs.promises.readFile(filePath, "utf8");
  }

  async function readAst(fileName: string) {
    const source = await readFixture(fileName);
    return project.createSourceFile(fileName, source);
  }

  test("the setup works", () => {
    expect(true).toBe(true);
  });

  test("it can read an AST", async () => {
    const ast = await readAst("helloworld.ts");
    debugger;
  });
});
