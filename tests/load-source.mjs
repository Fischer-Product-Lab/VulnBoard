import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import Module, { createRequire } from "node:module";
import ts from "typescript";

// Compile the real source in memory. No added runtime or test dependencies.
export function sourceLoader(overrides = {}) {
  const cache = new Map();
  function load(filename) {
    const absolute = path.resolve(filename);
    if (cache.has(absolute)) return cache.get(absolute).exports;
    const loaded = new Module(absolute);
    loaded.filename = absolute;
    cache.set(absolute, loaded);
    const require = createRequire(absolute);
    loaded.require = (specifier) => {
      if (Object.hasOwn(overrides, specifier)) return overrides[specifier];
      if (specifier.startsWith("@/") || specifier.startsWith(".")) {
        const base = specifier.startsWith("@/")
          ? path.resolve("src", specifier.slice(2))
          : path.resolve(path.dirname(absolute), specifier);
        const candidate = [base, `${base}.ts`, `${base}.tsx`].find((file) =>
          existsSync(file),
        );
        if (candidate && /\.tsx?$/.test(candidate)) return load(candidate);
      }
      return require(specifier);
    };
    const { outputText } = ts.transpileModule(readFileSync(absolute, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
      },
    });
    loaded._compile(outputText, absolute);
    return loaded.exports;
  }
  return load;
}
