var assert = require("./assert");
var ADDate =require("../src/ADDate");

try {
    ADDate(-1, 2, 30);
    assert(false)
} catch (e){
    assert(e=="Invalid Date")
}

try{
    assert(ADDate(1990, -1, 30).isValid() === false );
}catch(e){
    assert(e==="Invalid Date")
}
//assert(ADDate(1990, 13, 30).isValid() === false );
//assert(ADDate(1990, 1, 35).isValid() === false );
//assert(ADDate(1990, 1, 0).isValid() === false );
//assert(ADDate(1990, 1, 15).isValid() === true );

// delta addition
assert(ADDate(2015, 9, 28).addDelta(3).toString() === ADDate(2015, 10, 1).toString())
assert(ADDate(2015, 10, 2).addDelta(-4).toString() === ADDate(2015, 9, 28).toString())
assert(ADDate(2015, 10, 1).addDelta(31).toString() === ADDate(2015, 11, 1).toString()) //includes leap day
assert(ADDate(2015, 11, 1).addDelta(-31).toString() === ADDate(2015, 10, 1).toString()) //includes leap day
assert(ADDate(2015, 11, 16).addDelta(50).toString() === ADDate(2016, 1, 5).toString())
assert(ADDate(2073, 1, 5).addDelta(-50).toString() === ADDate(2072, 11, 16).toString())
assert(ADDate(2009, 11, 16).addDelta(3703).toString() === ADDate(2020, 1, 6).toString())
assert(ADDate(2020, 1, 6).addDelta(-3703).toString() === ADDate(2009, 11, 16).toString())
// for anchorPoint

//for getYearDays
//console.log(ADDate(2016, 11, 1).getYearDays() )
assert(ADDate(2016, 11, 1).getYearDays() === 305)
assert(ADDate(2015, 8, 16).getYearDays() === 227)


console.log("Tests Passed on ADDate")