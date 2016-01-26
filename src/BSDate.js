/**
 * Created by sushil on 12/6/15.
 */

var ConversionTable = require("./ConversionTable")

var BSDate = function(year_, month_, day_){
    var year = +year_;
    var month = +month_;
    var day = +day_;

    function getYearData(year){
        dateDetails = ConversionTable[year];
        if (dateDetails === undefined)
            throw "Date out of conversion range";
        return dateDetails;
    }
    function getNumDays(year_, month_){
        dateDetails = getYearData(year_);
        days = dateDetails['daysonmonth'][month_-1];
        return days;
    }
    function validateDate(){
        var dayInMonth = getNumDays(year, month);
        if (day > dayInMonth || day<1){
            throw "Invalid Date";
        }
        if (month>12 || month<1){
            throw "Invalid Date";
        }
    }
    validateDate();

    function _addDelta(daysToAdd){
        daysInMonth = getNumDays(year, month);
        daysLeftInMonth = daysInMonth - day
        if (daysToAdd < daysLeftInMonth){
            day += daysToAdd;
            return
        }

        day = 0;
        month += 1
        if (month>12){
            month = month%12;
            year += 1;
        }
        daysToAdd -= daysLeftInMonth;
        _addDelta(daysToAdd);
    }

    function _reduceDelta(daysToReduce){
        daysLeftInMonth = day

        if (daysToReduce < daysLeftInMonth){
            day -= daysToReduce;
            return;
        }

        month -= 1
        if (month<1){
            month = 12;
            year -= 1;
        }
        daysInMonth = getNumDays(year, month)
        day = daysInMonth;

        daysToReduce -= daysLeftInMonth
        _reduceDelta(daysToReduce)
    }

    function _afterDeltaAddition(){
        // removes that bug(0th date) we have in delta addition

        if (day==0){
            if (month===1) {
                month = 12;
                daysInPreviousMonth = getNumDays(year - 1, month);
            } else {
                month -= 1;
                daysInPreviousMonth = getNumDays(year, month)
            }
            day = daysInPreviousMonth;
        }
    }

    return {
        isValid: function(){
            if (year<1)
                return false;
            if (month>12 || month<1)
                return false;
            if (day>32 || day<1)
                return false;

            if (day>getNumDays(year, month))
                return false

            return true;

        },
        addDelta: function (daysToAdd){
            if (daysToAdd>=0){
                _addDelta(daysToAdd);
                _afterDeltaAddition();
            } else {
                _reduceDelta(daysToAdd*-1)
            }
            return this
        },
        getAnchorPoint: function(){
            dateDetails = ConversionTable[year_];
            if (dateDetails === undefined)
                throw "Date out of conversion range";

            anchorPoint = dateDetails['1stbaisakh'];
            dateSplit= anchorPoint.split("-", 3);

            return dateSplit;
        },
        getYearDays: function(){
            days = 0;
            yearData = getYearData(year);
            for(var i=0;i<month-1;i++)
                days +=yearData['daysonmonth'][i]
            return days + day - 1                               // -1 since we want days since 1st of that year
        },
        toString: function () {
            return year+'-'+month+'-'+day;
        }
    }
}

failed = 0;
function assert(condition){
    if (! condition){
        failed += 1;
        console.log("Failed");
        return;
    }
    console.log("Passed");
}

module.exports = BSDate;
