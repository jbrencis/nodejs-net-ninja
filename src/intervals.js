//************************** setTimeout**************************
// ***************************************************************/

const num = 20;
setTimeout(num => console.log(`${num} seconds are passed`), 2000, [num]);
// 20 seconds are passed

//************************** setInterval**************************
// ***************************************************************/

let time = 2;
const timer = setInterval(() => {
  time += 2;
  console.log(`${time} seconds have passed`);

  if (time > 5) {
    clearInterval(timer);
  }
}, 2000);
