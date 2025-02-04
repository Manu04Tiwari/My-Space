// ...existing code...
n.load = function() {
  var element = document.querySelector(this.selector);
  if (element) {
    // Proceed with accessing element.tagName
    console.log(element.tagName);
    // ...existing code...
  } else {
    console.error('Element not found for selector:', this.selector);
  }
};
// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
});
var element = document.getElementById('yourElementId');
if (element) {
    // Safe to access element properties
} else {
    console.error('Element not found');
}
