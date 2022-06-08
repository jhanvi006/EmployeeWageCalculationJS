const IS_PART_TIME = 1;
const IS_FULL_Time = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PR_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

function workingHrs(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;
        case IS_FULL_Time:
            empHrs = FULL_TIME_HOURS;
            break;
        default:
            empHrs = 0;
    }
    return empHrs;
}
let empHrs = 0;
for(let day = 0; day<=NUM_OF_WORKING_DAYS; day++){
    let empCheck = Math.floor(Math.random() * 10)%3;
    empHrs += workingHrs(empCheck);
}
let empWage = empHrs * WAGE_PR_HOUR;
console.log("Employee's Total wage: "+empWage+" and Total working hrs: "+empHrs);