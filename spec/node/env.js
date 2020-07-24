import worker_threads from "worker_threads";
import {performance} from 'perf_hooks';
import path from "path";
import chai from 'chai';

function createWorker(file) {
    return new worker_threads.Worker(path.resolve(path.dirname(''), `spec/workers/${file}`));
}

function workerOn(worker, evt, handler) {
    worker.on(evt, handler);
}

function workerOff(worker, evt, handler) {
    worker.off(evt, handler);
}

function workerPost(worker, message, transfer = []) {
    worker.postMessage({ data: message }, transfer);
}

export const env = {
    createWorker,
    workerOn,
    workerOff,
    workerPost,
    chai,
    performance,
};