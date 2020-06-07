var a = 10;
function func1() {
    document.write("Results:" + "<br>");
    document.write("The Value of a is: " + a + "<br>");
    document.write("...................................." + "<br>");
    document.write("<br>");

    document.write("The Value of ++a is: " + ++a + "<br>");
    document.write("Now the Value of a is: " + a + "<br>");
    document.write("<br>");

    document.write("The Value of a++ is: " + a++ + "<br>");
    document.write("Now the Value of a is: " + a + "<br>");
    document.write("<br>");

    document.write("The Value of --a is: " + --a + "<br>");
    document.write("Now the Value of a is: " + a + "<br>");
    document.write("<br>");

    document.write("The Value of a-- is: " + a-- + "<br>");
    document.write("Now the Value of a is: " + a + "<br>");
    document.write("<br>");
}






var a = 2, b = 1;
var result = --a - --b + ++b + b--;

function func2() {
    document.write("--a: " + "Means that, 1 minus from a and it will be 1 "+"<br>");
    document.write("--a - --b: " + "Means that, 1 minus from a and 1 minus from b as well. When we subtract 0 from 1, it will be 1 "+"<br>");
    document.write("--a - --b + ++b: " + "Means that, 1 minus from a and 1 minus from b as well. When we subtract 0 from 1, it will be 1 and when we add 1 on it. It will be 2 "+"<br>");
    document.write("--a - --b + ++b + b--: " + "Means that, 1 minus from a and 1 minus from b as well. When we subtract 0 from 1, it will be 1 and when we add 1 and another 1 on it will be 3 "+"<br>");
    document.write("...................................." + "<br>");
    document.write("The Final Value of a will be: " + result + "<br>");
}

function func3() {
    alert("Good Morning! Have a nice day");
}


//function func5() {document.write("" + + "<br>" + "");}
