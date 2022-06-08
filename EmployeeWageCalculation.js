const IS_PART_TIME = 1;
const IS_FULL_Time = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PR_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

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
let totalEmpHrs = 0, totalWorkingDays = 0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10)%3;
    totalEmpHrs += workingHrs(empCheck);
}
let empWage = totalEmpHrs * WAGE_PR_HOUR;
console.log("Total working days: "+totalWorkingDays+"\nTotal working hrs: "+totalEmpHrs+"\nTotal wage: "+empWage);