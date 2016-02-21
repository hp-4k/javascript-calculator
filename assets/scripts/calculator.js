var current_display = '0';
var result = 0;
var current_operation;

var add = function(a, b) {
  return a + b;
};

var subtract = function(a, b) {
	return a - b;
};

var multiply = function(a, b) {
  return a * b;
};

var divide = function(a, b) {
	return a / b;
};

var finish_previous_operation = function() {
  if (current_operation) {
    result = current_operation(result, parseInt(current_display));
    show_result();
  } else {
    result = parseInt(current_display);
  }
};

var update_current_display = function(new_digit) {
  if (current_display === '0') {
    current_display = '';
  }
  current_display += new_digit;
  document.getElementById('display').innerHTML = current_display;
}

var reset_current_display = function() {
  current_display = '0';
  document.getElementById('display').innerHTML = current_display;
};

var show_result = function() {
  document.getElementById('display').innerHTML = result;
};

// digit buttons
var buttons = document.getElementsByClassName('button_digit');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    update_current_display(this.getAttribute('data-value'));
  };
}

// clear entry (CE)
document.getElementById('buttonCE').onclick = function() {
  reset_current_display();
};

// global clear (C)
document.getElementById('buttonC').onclick = function() {
  result = 0;
  current_operation = undefined;
  reset_current_display();
};

// matematical operations
document.getElementById('button+').onclick = function() {
  finish_previous_operation();
  current_operation = add;
  current_display = '0';
};

document.getElementById('button-').onclick = function() {
  finish_previous_operation();
  current_operation = subtract;
  current_display = '0';
};

document.getElementById('button*').onclick = function() {
  finish_previous_operation();
  current_operation = multiply;
  current_display = '0';
};

document.getElementById('button/').onclick = function() {
  finish_previous_operation();
  current_operation = divide;
  current_display = '0';
};

// equals
document.getElementById('button=').onclick = function () {
  finish_previous_operation();
  current_operation = undefined;
  current_display = result.toString();
};