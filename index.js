//function declaration
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
console.log(saturdayFun());
console.log(saturdayFun('swim'));

//function expression
const mondayWork = function(activity = "go to the office") { 
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork());
console.log(mondayWork('work from home'));

//function-level scope
function wrapAdjective(value = "*") {
    function withValue(input = "special") {
        return `You are ${value}${input}${value}!`;
    }
    return withValue;
}
console.log(wrapAdjective("%")("a dedicated programmer"));
