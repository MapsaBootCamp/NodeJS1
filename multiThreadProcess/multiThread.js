const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  const worker = new Worker(__filename, {
    workerData: {name: "Mapsa"},
  });
  worker.on("message", (msg) => console.log(msg));
  worker.on("error", (err) => console.log(err););
  worker.on("exit", (code) => {
    if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
  });
} else {
  const msg = workerData;
  console.log(msg);
  parentPort.postMessage(parse(script));
}
