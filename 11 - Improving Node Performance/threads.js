const {
    Worker,
    isMainThread,
    workerData,
} = require('worker_threads');

if (isMainThread) {
    new Worker(__filename, {
        workerData: [7, 6, 4, 3],
    });
    new Worker(__filename, {
        workerData: [1, 4, 3, 2],
    });
} else {
    console.log(`Worker! Process ID: ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`)
}
