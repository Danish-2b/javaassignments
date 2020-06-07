var num1 = 10;
var num2 = 6;
var sum = num1 + num2;
age = 18;
function func1(){
    document.write("The sum of 10 and 6 is = " + sum);
}

var sub = num1 - num2;
var multi = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;
function func2(){
    document.write("The subtraction of 6 from 10 is = " + sub +"<br>");
    document.write("The multiplication of 10 and 6 is = " + multi +"<br>");
    document.write("The division of 10 and 6 is = " + div +"<br>");
    document.write("The modulus of 10 and 6 is = " + mod +"<br>");
}

var dec;
function func3(){
    document.write("Value after variable declaration is: " + dec + "<br>");
    dec=5;
    document.write("Initial Value is: " + dec + "<br>");
    dec++;
    document.write("Value after increment is: " + dec + "<br>")
    var dee = dec + 7;
    document.write("Value after addition is: " + dee  +"<br>")
    dee--;
    document.write("Value after decrement is: " + dee + "<br>")
    var rem = dee % 3;
    document.write("The remainder is:  " + rem + "<br>")
}
var ticket = 600;
var total = ticket *5;
function func4(){
    document.write("Total cost to buy 5 tickets to a movie is: " + total + " PKR");
}

function func5(){
var text = "";
var i;
for (i = 1; i <=10; i++) {
  text += "7* "+ i + " = " + 7*i +"<br>";
}
document.write(text);
}

var celsius1 = 34;
var fahrenheit1 = (celsius1 * 9/5) + 32;
var fahrenheit2 = 50;
var celsius2 = (fahrenheit2 - 32) * 5/9;
function func6(){
    document.write("34 Degree Celsius is: " + fahrenheit1 + " Degree Fahrenheit" + "<br>");
    document.write("50 Degree Fahrenheit is: " + celsius2 + " Degree Celsius" + "<br>");
}

var a = 650;
var b = 3;
var c = 100;
var d = 7;
var e = 100;
var f = (a*b)+(c*d)+e
function func7(){
    document.write("Price of item 1 is: " + a +  "<br>");
    document.write("Ordered quantity of item 1 is: " + b +  "<br>");
    document.write("Price of item 2 is: " + c +  "<br>");
    document.write("Ordered quantity of item 2 is: " + d +  "<br>");
    document.write("Shipping charges are : " + e +  "<br>");
    document.write( "<br>");
    document.write("Total Cost of Order is: " + f +  "<br>");
}

var tm = 500;
var om = 380;
var perc = (om*100)/tm;
function func8(){
    document.write("Total Marks are: " + tm + "<br>");
    document.write("Obtained Marks are: " + om + "<br>");
    document.write("Percentage is : " + perc + "%" + "<br>");
}

var us = 10;
var saudi = 25;
var pk = (us * 104.80) + (saudi * 28)
function func9(){
    document.write("Total Currency in PKR is : " + pk);
}

var x = 5;
var y = ((x + 5) *10)/2;
function func10(){
    document.write("The answer is : " + y);
}

var cy = 2020;
var by = 2002;
var cal = cy - by;
function func11(){
    document.write("Current Year: " + cy + "<br>");
    document.write("Birth Year: " + by + "<br>");
    document.write("Your Age is : " + cal);
}

var radius = 3;
var circum = (2 * 3.142 * radius);
var area = (3.142 * radius * radius);
function func12(){
    document.write("Radius of the Circle: " + radius + "<br>");
    document.write("Circumference of the Circle: " + circum + "<br>");
    document.write("Area of the Circle: " + area);
}

var fs = "Lays";
var ca = 18;
var ea = 80;
var pd = 5;
var tot = (ea - ca) * pd ; 
function func13(){
    document.write("Favourite Snack: " + fs + "<br>");
    document.write("Current Age: " + ca + "<br>");
    document.write("Estimated Max Age: " + ea + "<br>");
    document.write("Amount of Snacks per Day: " + pd + "<br>");
    document.write("You will need " + tot +" to last you until the ripe old age of "+ ea);
}