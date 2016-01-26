/**
 * Created by sushil on 12/6/15.
 */

var ADDate = function(year_, month_, day_){
    var year = +year_;
    var month = +month_;
    var day = +day_;

    function isLeapYear(year_){
        if ( year_%4 === 0 ) {
            if (year_ % 100 === 0) {
                if (year_ % 400 === 0) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    function getYearData(year_){
        if (isLeapYear(year_))
            return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }

    function getNumDays(year_, month_){
        dateDetails = getYearData(year_)
        days = dateDetails[month_-1];
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
        getYearDays: function(){
            days = 0;
            yearData = getYearData(year);
            for(var i=0;i<month-1;i++)
                days +=yearData[i]
            return days + day - 1                               // -1 since we want days since 1st of that year
        },
        toString: function(){
            return year+'-'+month+'-'+day;
        }
    }
};


module.exports = ADDate;