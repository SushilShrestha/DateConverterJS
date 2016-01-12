/**
 * Created by sushil on 12/6/15.
 */

var assert = require("./assert")
var BSDate = require("./BSDate");
var ADDate = require("./ADDate");

var Calendar = function(year_, month_, day_){
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

module.exports = Calendar