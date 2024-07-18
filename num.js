//isNan()  true false
//var a="heellllloo";
//document.write(isNaN(a));
//document.write(a==NaN);
//document.write(NaN==NaN);
/*  toString()
    toExponetional()
    toFixed()
    toPrecision()
    valueOf()
    isFinite()
    isInteger() true false
    isNan()
    isSafeInteger()
*/

//toString()
/*var a=10;
document.write(a.toString());
document.write(typeof(a) +"<br>")
document.write(a.toString(2) +"<br>");
document.write(a.toString(8) +"<br>");
document.write(a.toString(16) +"<br>");
*/

//toExponential()
var a1=1503;
//document.write(a1.toExponential() + "<br>");
//document.write(a1.toExponential(2) + "<br>");
//document.write(a1.toExponential(4) + "<br>");

//toFixed(y)
var a2=2369.632328
//document.write(a2.toFixed() + "<br>");
//document.write(a2.toFixed(2) + "<br>");
//document.write(a2.toFixed(6) + "<br>");

//toPrecision(y)
var a3=79.685932;
//document.write(a3.toPrecision()+ "<br>");
//document.write(a3.toPrecision(2)+ "<br>");
//document.write(a3.toPrecision(5)+ "<br>");

//Number.isInteger()
//document.write(Number.isInteger(11000));

//Number.isSafeInteger() 2pov53-1
//document.write(Number.isSafeInteger(10000000000000000000000000000000000000));
//document.write(Number.isSafeInteger(6556565));

//global js method Number(),parseFloat(),pareInt()
//number() true false 
//pareInt()
/*document.write(parseInt("10") + "<br>");
document.write(parseInt("10 20") + "<br>");
document.write(parseInt("10 yrs") + "<br>");
document.write(parseInt("yrs 10") + "<br>");
document.write(parseInt("020") + "<br>");
document.write(parseInt("12",8) + "<br>");
document.write(parseInt("10" , 16) + "<br>");
*/

//parseFloat()
/*document.write(parseFloat("10.22") + "<br>");
document.write(parseFloat("12.00") + "<br>");
document.write(parseFloat("10 yrs") + "<br>");
document.write(parseFloat("yrs 10") + "<br>");
document.write(parseFloat("020") + "<br>");
*/

//math
//date month and week day start with 0 sun , jan && mon day start with 1
//var tarikh=new Date();
//document.write(tarikh);

//date(msec)
var tarikh1=new Date(203000000);
//document.write(tarikh1);

//date(7arg)
var tarikh2=new Date(2002,5,10,2,30,55,0);
//document.write(tarikh2);
//document.write(tarikh2);

//Date(datestring)
var dte=new Date()
var month=dte.getMonth();
var day=dte.getDay();
function getMonthName(monthnumber){
    var monthname = ["jan","feb","mar","apr","may","jun","july","aug","sept","oct","nov","dec"];
    return monthname[monthnumber];
}
//document.write(getMonthName(month));



















