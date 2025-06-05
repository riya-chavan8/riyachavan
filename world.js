// const prompt = require('prompt-sync')();
// const name = prompt("What is your name? ");
// console.log("Hello, " + name + "!");





// const sq = function(x=5){
    // let ans = 0;
    // ans = x*x;
    // return ans;
// }
// console.log("the ans is:" + sq(9));

function great(name, cb){
    console.log("heyy"+ name + "!");
    cb();
}
function gdb(){
    console.log("morninn!!");
}
great("riya", gdb);
