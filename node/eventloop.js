console.log('1️⃣ Synchronous Start');

// Macrotask: setTimeout 0ms
setTimeout(() => {
  console.log('8️⃣ Macrotask: setTimeout 1');

  Promise.resolve().then(() => {
    console.log('9️⃣ Microtask inside setTimeout 1');
  });

  setTimeout(() => {
    console.log('🔟 Macrotask: Nested setTimeout');
  }, 0);

}, 0);

// Macrotask: setTimeout 0ms (second)
setTimeout(() => {
  console.log('1️⃣1️⃣ Macrotask: setTimeout 2');
}, 0);

// Microtask: Promise chain
Promise.resolve().then(() => {
  console.log('2️⃣ Microtask: Promise Callback 1');
}).then(() => {
  console.log('3️⃣ Microtask: Promise Callback 2');
});

// Microtask: queueMicrotask
queueMicrotask(() => {
  console.log('4️⃣ Microtask: queueMicrotask');
});

// Macrotask: setImmediate (Node.js only, not browser)
if (typeof setImmediate === 'function') {
  setImmediate(() => {
    console.log('1️⃣2️⃣ Macrotask: setImmediate');
  });
}

// MutationObserver Microtask (Browser only)
if (typeof MutationObserver !== 'undefined') {
  const observer = new MutationObserver(() => {
    console.log('5️⃣ Microtask: MutationObserver');
  });
  observer.observe(document.body || document.documentElement, { childList: true });
  document.body.appendChild(document.createElement('div'));
}

// Synchronous heavy loop
for (let i = 0; i < 2; i++) {
  console.log(`6️⃣ Synchronous Loop iteration ${i + 1}`);
}

console.log('7️⃣ Synchronous End');

// ===============================================
// const fs = require('fs');

// console.log("1: sync start");

// process.nextTick(() => console.log("2: nextTick"));
// Promise.resolve().then(() => console.log("3: promise"));

// setTimeout(() => console.log("4: timeout"), 0);
// setImmediate(() => console.log("5: immediate"));

// fs.readFile(__filename, () => {
//   console.log("6: file read callback");

//   process.nextTick(() => console.log("7: nextTick inside I/O"));
//   Promise.resolve().then(() => console.log("8: promise inside I/O"));

//   setTimeout(() => console.log("9: timeout inside I/O"), 0);
//   setImmediate(() => console.log("10: immediate inside I/O"));
// });

// console.log("11: sync end");


// OUTPUT H YE
// 1: sync start
// 11: sync end
// 2: nextTick
// 3: promise
// 4: timeout
// 5: immediate
// 6: file read callback
// 7: nextTick inside I/O
// 8: promise inside I/O
// 10: immediate inside I/O
// 9: timeout inside I/O
