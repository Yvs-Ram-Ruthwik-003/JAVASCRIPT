// ES6 Module = An external file that contains reusable code
//              that can be imported into other Javascript files.
//              Write reusable code for many different apps.
//              Can contain variables, classes, functions ... and more
//              Introduced as part of ECMAScript 2015 update.

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
console.log(getCircumference(10).toFixed(2));
console.log(getArea(10).toFixed(2));
console.log(getVolume(10).toFixed(2));