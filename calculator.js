
console.log("i am here");

result = document.getElementById("result");

var add = document.getElementById("add");
var subtract = document.getElementById("sub");
var multiply = document.getElementById("mul");
var divide = document.getElementById("div");


add.addEventListener("click", function() {
	a=document.getElementById("num_one");
	b=document.getElementById("num_two");
    handleAdd(a.value, b.value);

});

subtract.addEventListener("click", function() {
	a=document.getElementById("num_one");
	b=document.getElementById("num_two");
    handleSub(a.value, b.value);

});

multiply.addEventListener("click", function() {
	a=document.getElementById("num_one");
	b=document.getElementById("num_two");
    handleMul(a.value, b.value);
});

divide.addEventListener("click", function() {
	a=document.getElementById("num_one");
	b=document.getElementById("num_two");
    handleDiv(a.value, b.value);
});

function handleAdd(a,b) {
    var sum = Number(a) + Number(b);
    console.log("a",a);
    console.log("b",b);
    console.log("sum", sum);
    result.innerHTML = sum;
}

function handleSub(a,b) {
    var sub = Number(a) - Number(b);
    console.log("a",a);
    console.log("b",b);
    console.log("sub", sub);
    result.innerHTML = sub;
}

function handleMul(a,b) {
    var mul = Number(a) * Number(b);
    console.log("a",a);
    console.log("b",b);
    console.log("mul", mul);
    result.innerHTML = mul;
}

function handleDiv(a,b) {
    var div = Number(a) / Number(b);
    console.log("a",a);
    console.log("b",b);
    console.log("div", div);
    result.innerHTML = div;
}
