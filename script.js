function lifeInWeeks(age) {   
    
    var currentAge = prompt("Enter your current age");
    var RemainingLifeInYears = 90-currentAge;
    var days = RemainingLifeInYears*365;
    var weeks = RemainingLifeInYears*52;
    var months = RemainingLifeInYears*12;
    console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" months left..");

}


lifeInWeeks();
