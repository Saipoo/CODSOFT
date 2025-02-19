const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value); // Simple evaluation (safe for controlled inputs)
  } catch {
    alert('Invalid Expression');
    clearDisplay();
  }
}
