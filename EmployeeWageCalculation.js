const IS_PART_TIME = 1;
const IS_FULL_Time = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PR_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

let totalEmpHrs = 0, totalWorkingDays = 0, totalEmpWage = 0, day = 0;
let mapDayWithWage;
let empDailyWageArray = [];
let empDailyWageMap = new Map();
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
function calculateDailyWage(empHrs){
    return empHrs*WAGE_PR_HOUR;
}
function calculateTotalWage(dailyWage){
    totalEmpWage += dailyWage;
}
function mapDayWithDailyWage(dailyWage){
    day++;
    return day+"=>"+dailyWage;
}
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10)%3;
    let empHrs = workingHrs(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
}
empDailyWageArray.forEach(calculateTotalWage);
mapDayWithWage = empDailyWageArray.map(mapDayWithDailyWage);
let totalWageUsingMap = Array.from(empDailyWageMap.values()).reduce(totalWages, 0);
console.log("Daily wage: \n"+mapDayWithWage);
console.log("Daily wage using map: \n"+JSON.stringify([...empDailyWageMap.entries()]));
// for(let [day, dailyWage] of empDailyWageMap)
//     console.log(day+": "+dailyWage);
console.log("Employee total wage using map: "+totalWageUsingMap);
console.log("Total working days: "+totalWorkingDays+"\nTotal working hrs: "+
            totalEmpHrs+"\nTotal wage: "+totalEmpWage);
let empWithFullTime = mapDayWithWage.filter(day => day.includes("160"));
console.log("Emp with full time wage on days: "+empWithFullTime);
console.log("First time FullTime wage was earned on: "+mapDayWithWage.find(day => day.includes("160")));
console.log("Check if all elements have full time wage: "+empWithFullTime.every(wage => wage.includes("160")));
console.log("Check if there is any part time wage: "+mapDayWithWage.some(wage => wage.includes("80")));
let totalDaysWorked = 0;
totalDaysWorked = empDailyWageArray.reduce((totalDaysWork, dailyWage) => {
    if(dailyWage > 0)
        totalDaysWork++;
    return totalDaysWork;
});
console.log("No. of days employee worked: "+ totalDaysWorked); 