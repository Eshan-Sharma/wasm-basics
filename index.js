import init from "./pkg/wasm_basics";
const runWasm = async () => {
  const helloWorld = await init("./pkg/wasm_basics_bg.wasm");
  const addResult = helloWorld.add(24, 24);

  document.body.textContent = `Hello World! addResult: ${addResult}`;
};
runWasm();
