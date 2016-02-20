// finds the maximum value in an unsorted array
var my_max = function(arr) {
	var max = arr[0]
  for (var i = 1; i < arr.length; i++) {
  	if (arr[i] > max) {
    	max = arr[i];
    }
  }
  return max;
};

// calculates the number of vowels in a string
var vowel_count = function(s) {
  var pattern = /[AEIOUY]/i;
  var number_of_vowels = 0;
  for (var i = 0; i < s.length; i++) {
  	if (pattern.test(s[i])) {
    	number_of_vowels++;
    }
  }
  return number_of_vowels;
};

// reverses a string
var reverse = function(s) {
	var new_string = [];
  for (var i = 0; i < s.length; i++) {
    new_string.unshift(s.charAt(i));
  }
  return new_string.join('');
};