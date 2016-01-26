/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["DateConverter"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by sushil on 12/6/15.
	 */

	var assert = __webpack_require__(3)
	var BSDate = __webpack_require__(4);
	var ADDate = __webpack_require__(6);

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
	//console.log(DateConverter(2021, 7, 15).convertToBS().toBSString())
	//console.log(DateConverter(1927,4,13).convertToBS().toBSString())

	//try {
	//    console.log(DateConverter(1983, 12, 32).convertToAD().toADString());
	//}catch(e){
	//    console.log(e)
	//}
	module.exports = DateConverter

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(condition, message){
	    if (!condition) {
	        message = message || "Assertion failed";
	        if (typeof Error !== "undefined") {
	            throw new Error(message);
	        }
	        throw message;
	    }
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by sushil on 12/6/15.
	 */

	var ConversionTable = __webpack_require__(5)

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

	//test = BSDate(2072, 10, 20);
	//assert(test.isValid());
	//assert(BSDate("2072", 8, 30).isValid()===false)
	//assert(BSDate("2072", 8, 16).getYearDays()===233)
	//assert(BSDate("2072", 8, 16).getAnchorPoint())
	//console.log(BSDate("2072", 8, 16).addDelta(7).toString()) //2072-8-23
	//console.log(BSDate("2072", 8, 16).addDelta(13).toString()) //2072-8-29
	//console.log(BSDate("2072", 8, 16).addDelta(14).toString()) // 2072-9-1
	//console.log(BSDate("2072", 11, 16).addDelta(50).toString()) // 2073-1-6

	module.exports = BSDate;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by sushil on 12/6/15.
	 */

	ConversionTable= {"1970":{"1stbaisakh":"1913-04-13", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1971":{"1stbaisakh":"1914-04-13", "daysonmonth":[31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30]},
	"1972":{"1stbaisakh":"1915-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]},
	"1973":{"1stbaisakh":"1916-04-13", "daysonmonth":[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]},
	"1974":{"1stbaisakh":"1917-04-13", "daysonmonth":[31, 31, 32, 30, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1975":{"1stbaisakh":"1918-04-12", "daysonmonth":[31, 31, 32, 32, 30, 31, 30, 29, 30, 29, 30, 30]},
	"1976":{"1stbaisakh":"1919-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"1977":{"1stbaisakh":"1920-04-13", "daysonmonth":[30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31]},
	"1978":{"1stbaisakh":"1921-04-13", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1979":{"1stbaisakh":"1922-04-13", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"1980":{"1stbaisakh":"1923-04-13", "daysonmonth":[30, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"1981":{"1stbaisakh":"1924-04-13", "daysonmonth":[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]},
	"1982":{"1stbaisakh":"1925-04-13", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1983":{"1stbaisakh":"1926-04-13", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"1984":{"1stbaisakh":"1927-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"1985":{"1stbaisakh":"1928-04-13", "daysonmonth":[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]},
	"1986":{"1stbaisakh":"1929-04-13", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1987":{"1stbaisakh":"1930-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"1988":{"1stbaisakh":"1931-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"1989":{"1stbaisakh":"1932-04-13", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1990":{"1stbaisakh":"1933-04-13", "daysonmonth":[30, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1991":{"1stbaisakh":"1934-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"1992":{"1stbaisakh":"1935-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 30]},
	"1993":{"1stbaisakh":"1936-04-13", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1994":{"1stbaisakh":"1937-04-13", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1995":{"1stbaisakh":"1938-04-13", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1996":{"1stbaisakh":"1939-04-13", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1997":{"1stbaisakh":"1940-04-13", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1998":{"1stbaisakh":"1941-04-13", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"1999":{"1stbaisakh":"1942-04-13", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2000":{"1stbaisakh":"1943-04-14", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 29, 31]},
	"2001":{"1stbaisakh":"1944-04-13", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2002":{"1stbaisakh":"1945-04-13", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2003":{"1stbaisakh":"1946-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2004":{"1stbaisakh":"1947-04-14", "daysonmonth":[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]},
	"2005":{"1stbaisakh":"1948-04-13", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2006":{"1stbaisakh":"1949-04-13", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2007":{"1stbaisakh":"1950-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2008":{"1stbaisakh":"1951-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31]},
	"2009":{"1stbaisakh":"1952-04-13", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2010":{"1stbaisakh":"1953-04-13", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2011":{"1stbaisakh":"1954-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2012":{"1stbaisakh":"1955-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]},
	"2013":{"1stbaisakh":"1956-04-13", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2014":{"1stbaisakh":"1957-04-13", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2015":{"1stbaisakh":"1958-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2016":{"1stbaisakh":"1959-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]},
	"2017":{"1stbaisakh":"1960-04-13", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2018":{"1stbaisakh":"1961-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2019":{"1stbaisakh":"1962-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]},
	"2020":{"1stbaisakh":"1963-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2021":{"1stbaisakh":"1964-04-13", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2022":{"1stbaisakh":"1965-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]},
	"2023":{"1stbaisakh":"1966-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]},
	"2024":{"1stbaisakh":"1967-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2025":{"1stbaisakh":"1968-04-13", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2026":{"1stbaisakh":"1969-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2027":{"1stbaisakh":"1970-04-14", "daysonmonth":[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]},
	"2028":{"1stbaisakh":"1971-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2029":{"1stbaisakh":"1972-04-13", "daysonmonth":[31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30]},
	"2030":{"1stbaisakh":"1973-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2031":{"1stbaisakh":"1974-04-14", "daysonmonth":[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]},
	"2032":{"1stbaisakh":"1975-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2033":{"1stbaisakh":"1976-04-13", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2034":{"1stbaisakh":"1977-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2035":{"1stbaisakh":"1978-04-14", "daysonmonth":[30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31]},
	"2036":{"1stbaisakh":"1979-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2037":{"1stbaisakh":"1980-04-13", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2038":{"1stbaisakh":"1981-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2039":{"1stbaisakh":"1982-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]},
	"2040":{"1stbaisakh":"1983-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2041":{"1stbaisakh":"1984-04-13", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2042":{"1stbaisakh":"1985-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2043":{"1stbaisakh":"1986-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]},
	"2044":{"1stbaisakh":"1987-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2045":{"1stbaisakh":"1988-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2046":{"1stbaisakh":"1989-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2047":{"1stbaisakh":"1990-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2048":{"1stbaisakh":"1991-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2049":{"1stbaisakh":"1992-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]},
	"2050":{"1stbaisakh":"1993-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]},
	"2051":{"1stbaisakh":"1994-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2052":{"1stbaisakh":"1995-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2053":{"1stbaisakh":"1996-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]},
	"2054":{"1stbaisakh":"1997-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]},
	"2055":{"1stbaisakh":"1998-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2056":{"1stbaisakh":"1999-04-14", "daysonmonth":[31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30]},
	"2057":{"1stbaisakh":"2000-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2058":{"1stbaisakh":"2001-04-14", "daysonmonth":[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]},
	"2059":{"1stbaisakh":"2002-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2060":{"1stbaisakh":"2003-04-14", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2061":{"1stbaisakh":"2004-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2062":{"1stbaisakh":"2005-04-14", "daysonmonth":[30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31]},
	"2063":{"1stbaisakh":"2005-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2064":{"1stbaisakh":"2007-04-14", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2065":{"1stbaisakh":"2008-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2066":{"1stbaisakh":"2009-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31]},
	"2067":{"1stbaisakh":"2010-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2068":{"1stbaisakh":"2011-04-14", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2069":{"1stbaisakh":"2012-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2070":{"1stbaisakh":"2013-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]},
	"2071":{"1stbaisakh":"2014-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2072":{"1stbaisakh":"2015-04-14", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2073":{"1stbaisakh":"2016-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]},
	"2074":{"1stbaisakh":"2017-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2075":{"1stbaisakh":"2018-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2076":{"1stbaisakh":"2019-04-14", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]},
	"2077":{"1stbaisakh":"2020-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]},
	"2078":{"1stbaisakh":"2021-04-14", "daysonmonth":[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2079":{"1stbaisakh":"2022-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]},
	"2080":{"1stbaisakh":"2023-04-14", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]},
	"2081":{"1stbaisakh":"2024-04-13", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30]},
	"2082":{"1stbaisakh":"2025-04-14", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]},
	"2083":{"1stbaisakh":"2026-04-14", "daysonmonth":[31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30]},
	"2084":{"1stbaisakh":"2027-04-14", "daysonmonth":[31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30]},
	"2085":{"1stbaisakh":"2028-04-13", "daysonmonth":[31, 32, 31, 32, 31, 31, 30, 30, 29, 30, 30, 30]},
	"2086":{"1stbaisakh":"2029-04-14", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]},
	"2087":{"1stbaisakh":"2030-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30]},
	"2088":{"1stbaisakh":"2031-04-15", "daysonmonth":[30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30]},
	"2089":{"1stbaisakh":"2032-04-14", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]},
	"2090":{"1stbaisakh":"2033-04-14", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]},
	"2091":{"1stbaisakh":"2034-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30]},
	"2092":{"1stbaisakh":"2035-04-13", "daysonmonth":[31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30]},
	"2093":{"1stbaisakh":"2036-04-14", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]},
	"2094":{"1stbaisakh":"2037-04-14", "daysonmonth":[31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30]},
	"2095":{"1stbaisakh":"2038-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30]},
	"2096":{"1stbaisakh":"2039-04-15", "daysonmonth":[30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]},
	"2097":{"1stbaisakh":"2040-04-13", "daysonmonth":[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]},
	"2098":{"1stbaisakh":"2041-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 30, 31]},
	"2099":{"1stbaisakh":"2042-04-14", "daysonmonth":[31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30]},
	"2100":{"1stbaisakh":"2043-04-14", "daysonmonth":[31, 32, 31, 32, 30, 31, 30, 29, 30, 29, 30, 30]}};

	module.exports = ConversionTable;

/***/ },
/* 6 */
/***/ function(module, exports) {

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


	//test = ADDate(2015, 11, 18)
	//console.log(ADDate(2015, 11, 18).addDelta(0).toString())
	//console.log(ADDate(2015, 11, 18).addDelta(12).toString())
	//console.log(ADDate(2015, 11, 18).addDelta(13).toString())
	//console.log(ADDate(2015, 11, 18).addDelta(-17).toString())

	module.exports = ADDate;

/***/ }
/******/ ]);