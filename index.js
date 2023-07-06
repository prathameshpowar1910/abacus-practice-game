var res = document.getElementById("answer")
var nums = document.getElementById("numbers")
var sum;

var rangeInput = document.getElementById("speed");
var rangeValueElement = document.getElementById("speedValue");

rangeInput.addEventListener("input", function() {
  var currentValue = (11000 - rangeInput.value)/1e3 + "s";
  rangeValueElement.innerText = "Time Interval:"+currentValue;
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generate() {
    res.innerText = "Result: "
    sum=0;
    var n = parseInt(document.getElementById("iter").value)
    var min = parseInt(document.getElementById("lower").value)
    var max = parseInt(document.getElementById("upper").value)
    var speed = (11000-parseInt(document.getElementById("speed").value))

    for (let i = 0; i < n; i++) {
        const num = getRndInteger(min, max);
        setTimeout(() => {
            nums.innerText = "Number: " + num;
            sum += num;
            
        }, speed * i);
    }
}

function display() {
    res.innerText = "Result: " + sum;
}

const resets = () => {
    var myForm = document.getElementById("meraForm")
    res.innerText = "Result: ";
    nums.innerText = "Number: ";
    myForm.reset()
}


