/* 
Minty calculator made with only JavaScript 
This was part of a jQuery to JavaScript project.  
jQuery refference: http://codepen.io/mattboldt/
*/

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9 , \/\*\-\+\.]/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
var result = document.getElementById('result'),
  zero = document.getElementById('zero'),
  one = document.getElementById('one'),
  two = document.getElementById('two'),
  three = document.getElementById('three'),
  four = document.getElementById('four'),
  five = document.getElementById('five'),
  six = document.getElementById('six'),
  seven = document.getElementById('seven'),
  eight = document.getElementById('eight'),
  nine = document.getElementById('nine'),
  division = document.getElementById('Division'),
  multiplication = document.getElementById('Multiplication'),
  subtraction = document.getElementById('Subtraction'),
  dot = document.getElementById('dot'),
  equal = document.getElementById('equal'),
  addition = document.getElementById('Addition'),
  on = document.getElementById('on'),
  off = document.getElementById('off'),
  del = document.getElementById('del');
zero.onclick = function() {
  'use strict';
  result.value += 0;
  result.focus();
}
one.onclick = function() {
  'use strict';
  result.value += 1;
  result.focus();
};
two.onclick = function() {
  'use strict';
  result.value += 2;
  result.focus();
}
three.onclick = function() {
  'use strict';
  result.value += 3;
  result.focus();
}
four.onclick = function() {
  'use strict';
  result.value += 4;
  result.focus();
}
five.onclick = function() {
  'use strict';
  result.value += 5;
  result.focus();
}
six.onclick = function() {
  'use strict';
  result.value += 6;
  result.focus();
}
seven.onclick = function() {
  'use strict';
  result.value += 7;
  result.focus();
}
eight.onclick = function() {
  'use strict';
  result.value += 8;
  result.focus();
}
nine.onclick = function() {
  'use strict';
  result.value += 9;
  result.focus();
}
dot.onclick = function() {
  'use strict';
  result.value += '.';
  result.focus();
}
addition.onclick = function() {
  'use strict';
  result.value += '+';
  result.focus();
}
subtraction.onclick = function() {
  'use strict';
  result.value += '-';
  result.focus();
}
multiplication.onclick = function() {
  'use strict';
  result.value += '*';
  result.focus();
}
division.onclick = function() {
  'use strict';
  result.value += '/';
  result.focus();
}
on.onclick = function() {
  'use strict';
  result.value = '';
  result.focus();
}
off.onclick = function() {
  'use strict';
  result.value = '';
  result.blur();
}
del.onclick = function() {
  'use strict';
  result.value = result.value.substr(0, result.value.length - 1);
  result.focus();
}
equal.onclick = function() {
  'use strict';
  result.value = eval(result.value);
  result.focus();
}
