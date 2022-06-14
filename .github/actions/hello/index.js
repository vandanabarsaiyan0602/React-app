let core=require('@actions/core');
let git=require('@actions/github');

const name=core.getInput('who-to-greet');

console.log(`Hello ${name}`);
let time=new Date();
core.setOutput('time',time.toDateString);
console.log(JSON.stringify(github,null,'/t'));