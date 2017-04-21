
console.log("i am here");

result = document.getElementById("result");

var add = document.getElementById("add");
var subtract = document.getElementById("sub");
var multiply = document.getElementById("mul");
var divide = document.getElementById("div");


add.addEventListener("click", function() {
	a=document.getElementById("num_one");
	b=document.getElementById("num_two");
    answer = handleAdd(a.value, b.value);
    result.innerHTML = answer;

});

subtract.addEventListener("click", function() {
	a=document.getElementById("num_one");
	b=document.getElementById("num_two");
    answer = handleSub(a.value, b.value);
    result.innerHTML = answer;

});

multiply.addEventListener("click", function() {
	a=document.getElementById("num_one");
	b=document.getElementById("num_two");
    answer = handleMul(a.value, b.value);
    result.innerHTML = answer;
});

divide.addEventListener("click", function() {
	a=document.getElementById("num_one");
	b=document.getElementById("num_two");
    answer = handleDiv(a.value, b.value);
    result.innerHTML = answer;
});

function handleAdd(a,b) {
    var sum = Number(a) + Number(b);
    console.log("a",a);
    console.log("b",b);
    console.log("sum", sum);
    return sum;
}

function handleSub(a,b) {
    var sub = Number(a) - Number(b);
    console.log("a",a);
    console.log("b",b);
    console.log("sub", sub);
    return sub;
}

function handleMul(a,b) {
    var mul = Number(a) * Number(b);
    console.log("a",a);
    console.log("b",b);
    console.log("mul", mul);
   return mul;
}

function handleDiv(a,b) {
    var div = Number(a) / Number(b);
    console.log("a",a);
    console.log("b",b);
    console.log("div", div);
    return div;
}


