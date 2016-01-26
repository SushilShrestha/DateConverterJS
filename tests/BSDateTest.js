
var assert = require("./assert");
var BSDate =require("../src/BSDate");

//assert(BSDate(-1, 2, 30).isValid() === false);
//assert(BSDate(1990, -1, 30).isValid() === false );
//assert(BSDate(1990, 13, 30).isValid() === false );
//assert(BSDate(1990, 1, 35).isValid() === false );
//assert(BSDate(1990, 1, 0).isValid() === false );
//assert(BSDate(1990, 1, 15).isValid() === true );

// delta addition
assert(BSDate(2072, 9, 28).addDelta(3).toString() === BSDate(2072, 10, 1).toString())
assert(BSDate(2072, 10, 2).addDelta(-4).toString() === BSDate(2072, 9, 28).toString())
assert(BSDate(2072, 10, 1).addDelta(29).toString() === BSDate(2072, 11, 1).toString()) //includes leap day
assert(BSDate(2072, 11, 1).addDelta(-29).toString() === BSDate(2072, 10, 1).toString()) //includes leap day
assert(BSDate(2072, 11, 16).addDelta(50).toString() === BSDate(2073, 1, 6).toString())
assert(BSDate(2073, 1, 6).addDelta(-50).toString() === BSDate(2072, 11, 16).toString())
assert(BSDate(2069, 11, 16).addDelta(3703).toString() === BSDate(2080, 1, 6).toString())
assert(BSDate(2080, 1, 6).addDelta(-3703).toString() === BSDate(2069, 11, 16).toString())
// for anchorPoint

//for getYearDays
//console.log(BSDate(2072, 1, 1).getYearDays())
assert(BSDate(2072, 11, 1).getYearDays() === 305)
assert(BSDate("2072", 8, 16).getYearDays() === 232)


console.log("Tests Passed on BSDate")


//test = BSDate(2072, 10, 20);
//assert(test.isValid());
//assert(BSDate("2072", 8, 30).isValid()===false)
//assert(BSDate("2072", 8, 16).getYearDays()===233)
//assert(BSDate("2072", 8, 16).getAnchorPoint())
//console.log(BSDate("2072", 8, 16).addDelta(7).toString()) //2072-8-23
//console.log(BSDate("2072", 8, 16).addDelta(13).toString()) //2072-8-29
//console.log(BSDate("2072", 8, 16).addDelta(14).toString()) // 2072-9-1
//console.log(BSDate("2072", 11, 16).addDelta(50).toString()) // 2073-1-6
