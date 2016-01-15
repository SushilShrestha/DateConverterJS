/**
 * Created by sushil on 12/6/15.
 */

var assert = require("./assert")
var BSDate = require("./BSDate");
var ADDate = require("./ADDate");

var DateConverter = function(year_, month_, day_){
    assert(+year_ && +month_ && +day_,
        "Invalid arguments. Arguments are supposed to be yyyy mm dd");

    var year = +year_;
    var month = +month_;
    var day = +day_;

    var bsDate;
    var adDate;

    return {
        convertToAD: function(){
            bsDate = BSDate(year, month, day);
            anchorPoint = bsDate.getAnchorPoint();
            deltaDays = bsDate.getYearDays();
            adDate = ADDate(+anchorPoint[0], +anchorPoint[1], +anchorPoint[2]).addDelta(deltaDays);
            return this;
        },
        convertFromAD: function(){
            adDate = ADDate(year, month, day)
            approxBSYear = year+57

            bsDate = BSDate(approxBSYear, 1, 1)
            anchorPoint = bsDate.getAnchorPoint();

            anchorDelta = ADDate(+anchorPoint[0], +anchorPoint[1], +anchorPoint[2]).getYearDays();
            requiredDelta = adDate.getYearDays();

            bsDate.addDelta(requiredDelta-anchorDelta)
            //
            //deltaDays = adDate.getYearDays();
            //bsDate = anchorPoint.addDelta(deltaDays);
            return this;
        },
        convertToBS: function(){
            return this.convertFromAD();
        },
        toADString: function(){
            return adDate.toString()
        },
        toBSString: function(){
            return bsDate.toString()
        }
    }
};


//console.log(Calendar(2072, 8, 22).convertToAD().toADString()) // should be 2015-12-8
//console.log(Calendar(2015, 12, 8).convertToBS().toBSString())
//console.log(Calendar(2015, 12, 9).convertToBS().toBSString())
//console.log(Calendar(2073, 4, 9).convertToAD().toADString()) // should be 2016-7-24
//
//console.log(Calendar(2015, 1, 19).convertToBS().toBSString())
//console.log(Calendar(2015, 1, 19).convertToBS().toADString())

//console.log(Calendar(2072, 1, 28).convertToAD().toADString()+" "+"2015-5-11")
//console.log(Calendar(2072, 2, 28).convertToAD().toADString()+" "+"2015-6-11")
//console.log(Calendar(2072, 3, 28).convertToAD().toADString()+" "+"2015-7-13")
//console.log(Calendar(2072, 4, 28).convertToAD().toADString()+" "+"2015-8-13")
//console.log(Calendar(2072, 5, 28).convertToAD().toADString()+" "+"2015-9-14")
//console.log(Calendar(2072, 6, 28).convertToAD().toADString()+" "+"2015-10-15")
//console.log(Calendar(2072, 7, 28).convertToAD().toADString()+" "+"2015-11-14")
//console.log(Calendar(2072, 8, 28).convertToAD().toADString()+" "+"2015-12-14")
//console.log(Calendar(2072, 9, 28).convertToAD().toADString()+" "+"2016-1-12")
//console.log(Calendar(2072, 10, 28).convertToAD().toADString()+" "+"2016-2-11")
//console.log(Calendar(2072, 11, 28).convertToAD().toADString()+" "+"2016-3-11")
//console.log(Calendar(2072, 12, 28).convertToAD().toADString()+" "+"2016-4-10")
//
////console.log(Calendar(2073, 1, 28).convertToAD().toADString())
////console.log(Calendar(2073, 2, 28).convertToAD().toADString())
////console.log(Calendar(2073, 3, 28).convertToAD().toADString())
////console.log(Calendar(2073, 4, 28).convertToAD().toADString())
////console.log(Calendar(2073, 5, 28).convertToAD().toADString())
////console.log(Calendar(2073, 6, 28).convertToAD().toADString())
////console.log(Calendar(2073, 7, 28).convertToAD().toADString())
////console.log(Calendar(2073, 8, 28).convertToAD().toADString())
////console.log(Calendar(2073, 9, 28).convertToAD().toADString())
////console.log(Calendar(2073, 10, 28).convertToAD().toADString())
////console.log(Calendar(2073, 11, 28).convertToAD().toADString())
////console.log(Calendar(2073, 12, 28).convertToAD().toADString())
//
//
//console.log(Calendar(2071, 1, 28).convertToAD().toADString())
//console.log(Calendar(2071, 2, 28).convertToAD().toADString())
//console.log(Calendar(2071, 3, 28).convertToAD().toADString())
//console.log(Calendar(2071, 4, 28).convertToAD().toADString())
//console.log(Calendar(2071, 5, 28).convertToAD().toADString())
//console.log(Calendar(2071, 6, 28).convertToAD().toADString())
//console.log(Calendar(2071, 7, 28).convertToAD().toADString())
//console.log(Calendar(2071, 8, 28).convertToAD().toADString())
//console.log(Calendar(2071, 9, 28).convertToAD().toADString())
//console.log(Calendar(2071, 10, 28).convertToAD().toADString())
//console.log(Calendar(2071, 11, 28).convertToAD().toADString())
//console.log(Calendar(2071, 12, 28).convertToAD().toADString())
//
//console.log(Calendar(2016, 1, 28).convertToBS().toBSString()+" "+"2072-10-14")
//console.log(Calendar(2016, 2, 28).convertToBS().toBSString()+" "+"2072-11-16")
//console.log(Calendar(2016, 3, 28).convertToBS().toBSString()+" "+"2072-12-15")
//console.log(Calendar(2016, 4, 28).convertToBS().toBSString()+" "+"2072-1-16")
//console.log(Calendar(2016, 5, 28).convertToBS().toBSString()+" "+"2072-2-15")
//console.log(Calendar(2016, 6, 28).convertToBS().toBSString()+" "+"2072-3-14")
//console.log(Calendar(2016, 7, 28).convertToBS().toBSString()+" "+"2072-4-13")
//console.log(Calendar(2016, 8, 28).convertToBS().toBSString()+" "+"2072-5-12")
//console.log(Calendar(2016, 9, 28).convertToBS().toBSString()+" "+"2072-6-12")
//console.log(Calendar(2016, 10, 28).convertToBS().toBSString()+" "+"2072-7-12")
//console.log(Calendar(2016, 11, 28).convertToBS().toBSString()+" "+"2072-8-13")
//console.log(Calendar(2016, 12, 28).convertToBS().toBSString()+" "+"2072-9-13")


module.exports = DateConverter