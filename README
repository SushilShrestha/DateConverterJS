# DateConverterJS 

DateConverterJS is date conversion utility for javascript apps.

It helps you to convert date between AD format and BS format. AD dates are based on fixed number of days in a month format whereas BS dates are hard to bind in certain rules. We can't exactly predict how many days are there in a certain month of certain year in BS which makes date conversion more challenging. Due to uncertainity of number of days in a year, we use a saved map reference to how many days are there in certain BS year. So date conversion can only be done within limited BS years.

###Installation
If you are using npm for your project, you can simply use:

```
npm install --save dateconverter
```

Or if you don't yet use npm and package bundlers, you can grab build version of DateConverterJS from [here](http://afahocci-experiments.appspot.com/dist/dateconverter.dist.js).
```html
<script src="path/to/dist/dateconverter.dist.js"></script>
```

###Usage
For npm users, you can
```javascript
var DateConverter = require("dateconverter");

var bsDate = DateConverter(2072, 8, 22);
var adDate = bsDate.convertToAD().toADString();
console.log(adDate);

var adDate = DateConverter(2015, 12, 8);
var bsDate = adDate.convertToBS().toBSString();
console.log(bsDate);

```

For non npm users, make sure you add script tag into your html page. Then
```javascript
var bsDate = DateConverter(2071, 1, 28);
var adDate = bsDate.convertToAD().toADString();
console.log(adDate);

var adDate = DateConverter(2016, 1, 28);
var bsDate = adDate.convertToBS().toBSString();
console.log(bsDate);
```
