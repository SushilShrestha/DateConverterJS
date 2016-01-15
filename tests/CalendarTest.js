
const assert = require("./assert");
var DateConverter= require("../src/DateConverter");


assert(DateConverter(2072, 8, 22).convertToAD().toADString() === "2015-12-8") // should be 2015-12-8
assert(DateConverter(2015, 12, 8).convertToBS().toBSString() === "2072-8-22")
assert(DateConverter(2015, 12, 9).convertToBS().toBSString() === "2072-8-23")
assert(DateConverter(2073, 4, 9).convertToAD().toADString() === "2016-7-24") // should be 2016-7-24
assert(DateConverter(2015, 1, 19).convertToBS().toBSString() === "2071-10-5")
assert(DateConverter(2015, 1, 19).convertToBS().toADString() === "2015-1-19")

assert(DateConverter(2072, 1, 28).convertToAD().toADString() === "2015-5-11")
assert(DateConverter(2072, 2, 28).convertToAD().toADString() === "2015-6-11")
assert(DateConverter(2072, 3, 28).convertToAD().toADString() === "2015-7-13")
assert(DateConverter(2072, 4, 28).convertToAD().toADString() === "2015-8-13")
assert(DateConverter(2072, 5, 28).convertToAD().toADString() === "2015-9-14")
assert(DateConverter(2072, 6, 28).convertToAD().toADString() === "2015-10-15")
assert(DateConverter(2072, 7, 28).convertToAD().toADString() === "2015-11-14")
assert(DateConverter(2072, 8, 28).convertToAD().toADString() === "2015-12-14")
assert(DateConverter(2072, 9, 28).convertToAD().toADString() === "2016-1-12")
assert(DateConverter(2072, 10, 28).convertToAD().toADString() === "2016-2-11")
assert(DateConverter(2072, 11, 28).convertToAD().toADString() === "2016-3-11")
assert(DateConverter(2072, 12, 28).convertToAD().toADString() === "2016-4-10")

assert(DateConverter(2073, 1, 28).convertToAD().toADString() === "2016-5-10")
assert(DateConverter(2073, 2, 28).convertToAD().toADString() === "2016-6-10")
assert(DateConverter(2073, 3, 28).convertToAD().toADString() === "2016-7-12")
assert(DateConverter(2073, 4, 28).convertToAD().toADString() === "2016-8-12")
assert(DateConverter(2073, 5, 28).convertToAD().toADString() === "2016-9-13")
assert(DateConverter(2073, 6, 28).convertToAD().toADString() === "2016-10-14")
assert(DateConverter(2073, 7, 28).convertToAD().toADString() === "2016-11-13")
assert(DateConverter(2073, 8, 28).convertToAD().toADString() === "2016-12-13")
assert(DateConverter(2073, 9, 28).convertToAD().toADString() === "2017-1-12")
assert(DateConverter(2073, 10, 28).convertToAD().toADString() === "2017-2-10")
assert(DateConverter(2073, 11, 28).convertToAD().toADString() === "2017-3-11")
assert(DateConverter(2073, 12, 28).convertToAD().toADString() === "2017-4-10")


assert(DateConverter(2071, 1, 28).convertToAD().toADString() === "2014-5-11")
assert(DateConverter(2071, 2, 28).convertToAD().toADString() === "2014-6-11")
assert(DateConverter(2071, 3, 28).convertToAD().toADString() === "2014-7-12")
assert(DateConverter(2071, 4, 28).convertToAD().toADString() === "2014-8-13")
assert(DateConverter(2071, 5, 28).convertToAD().toADString() === "2014-9-13")
assert(DateConverter(2071, 6, 28).convertToAD().toADString() === "2014-10-14")
assert(DateConverter(2071, 7, 28).convertToAD().toADString() === "2014-11-14")
assert(DateConverter(2071, 8, 28).convertToAD().toADString() === "2014-12-14")
assert(DateConverter(2071, 9, 28).convertToAD().toADString() === "2015-1-12")
assert(DateConverter(2071, 10, 28).convertToAD().toADString() === "2015-2-11")
assert(DateConverter(2071, 11, 28).convertToAD().toADString() === "2015-3-12")
assert(DateConverter(2071, 12, 28).convertToAD().toADString() === "2015-4-11")

assert(DateConverter(2016, 1, 28).convertToBS().toBSString() === "2072-10-14")
assert(DateConverter(2016, 2, 28).convertToBS().toBSString() === "2072-11-16")
assert(DateConverter(2016, 3, 28).convertToBS().toBSString() === "2072-12-15")
assert(DateConverter(2016, 4, 28).convertToBS().toBSString() === "2073-1-16")
assert(DateConverter(2016, 5, 28).convertToBS().toBSString() === "2073-2-15")
assert(DateConverter(2016, 6, 28).convertToBS().toBSString() === "2073-3-14")
assert(DateConverter(2016, 7, 28).convertToBS().toBSString() === "2073-4-13")
assert(DateConverter(2016, 8, 28).convertToBS().toBSString() === "2073-5-12")
assert(DateConverter(2016, 9, 28).convertToBS().toBSString() === "2073-6-12")
assert(DateConverter(2016, 10, 28).convertToBS().toBSString() === "2073-7-12")
assert(DateConverter(2016, 11, 28).convertToBS().toBSString() === "2073-8-13")
assert(DateConverter(2016, 12, 28).convertToBS().toBSString() === "2073-9-13")

console.log("Tests Passed on DateConverter")
