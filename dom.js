/*var f1=document.getElementById("first");
//document.write(f1);
//console.log(f1);
var f2=document.getElementById("second");
//document.write(f2)

var t1 = document.getElementsByTagName("p"); //list return 
//document.write(t1);
//console.log(t1)
//document.write("*");
//var t2 = document.body.div.getElementsByTagName("p"); not allow only for body

//var t2=f1.getElementsByTagName("span");
//console.log(t2); 
//var result=document.getElementById("first").getElementsByTagName("span");
var t3=f2.getElementsByTagName("span");
 //console.log(t3);
 //document.write(t3);

//length()
var len=document.getElementsByTagName("p").length;
//var t1 = document.getElementsByTagName("p");
//var len=t1.length
//console.log(len);
for(var i=0;i<len;i++){
 var res=document.getElementsByTagName("p")[i];
 //console.log(res);
}

var c1=document.body.getElementsByClassName("di1").length;
for(var i=0;i<c1;i++){
var res1=document.getElementsByClassName("di1")[i];
//console.log(res1);
}
//document.write(c1);
//console.log(c1);

var c2=document.getElementById("second").getElementsByClassName("spn1");
//console.log(c2);

//element selector
var q1=document.querySelector("p");
var q2=document.querySelectorAll("div,h1");
//console.log(q2);
//console.log(q1);

//idselector
var i1=document.querySelector("#second");
//console.log(i1);

//class selector
var cls1=document.querySelector(".di1");
//console.log(cls1);

var icl1=document.getElementById("second").querySelectorAll("span.spn1");
//console.log(icl1);
*/


/*
//console.log(document.URL);
//console.log(document.title="indya's");

//attribute name value
var attr1=document.getElementById("first").attributes[0].nodeName;//name right
//console.log(attr1);

var attr2=document.getElementById("first").attributes[0].nodeValue;//value 
//console.log(attr2);

var parN=document.getElementById("first").parentNode;
var parE=document.getElementById("mobile").parentElement;
//console.log(parN);
//console.log(parE);

var ch1=document.getElementById("one").childNodes;
//console.log(ch1);

var fir1=document.getElementById("nav1").firstChild;
//console.log(fir1);
var fir2=document.getElementById("nav1").firstElementChild;
//console.log(fir2);

var lastch=document.getElementById("nav1").lastChild;
//console.log(lastch);
var lastch1=document.getElementById("nav1").lastElementChild;
//console.log(lastch1);

var preSb=document.getElementById("nav1").lastChild.previousSibling;
//console.log(preSb);
var preSb1=document.getElementById("nav1").lastElementChild.previousElementSibling;
//console.log(preSb1);

var nex1=document.getElementById("nav1").firstChild.nextSibling;
//console.log(nex1);
var nex2=document.getElementById("nav1").firstElementChild.nextElementSibling;
//console.log(nex2);

var neNode=document.createElement("h1");
//console.log(neNode);

var neTnode=document.createTextNode('hii mayur here');
//console.log(neTnode);

//createComment()
*/
//createDocumentFragment()
//var frg=document.createDocumentFragment();
//console.log(frg);

/*var parent1=document.getElementById("sec1");
var child1=document.getElementById("spn1");
//console.log(parent1);

parent1.appendChild(child1);
//console.log(parent1);
*/

//append element node
/*var ne_el=document.createElement("h2");
var sec1=document.getElementById("sec1");
sec1.appendChild(ne_el);
//console.log(sec1);

//append text node
var tex1=document.createTextNode("hiii my name is indy");
var first1=document.getElementById("first1");
first1.appendChild(tex1);
//console.log(first1);

//all or mixing
ne_el.appendChild(tex1);
//console.log(ne_el);
/*
var frg=document.createDocumentFragment();
var h_3=document.createElement("h3");
var p1=document.createElement("p");
h_3.textContent="hii i am from h3";
p1.textContent="hii i am from p";
frg.appendChild(h_3);
frg.appendChild(p1);
//console.log(frg);
sec1.appendChild(frg);
//console.log(sec1);
*/

/*
//normalize()
var sec2=document.getElementById("sec2");
sec2.appendChild(document.createTextNode("i m 1st"));
sec2.appendChild(document.createTextNode("i m 2st"));
sec2.appendChild(document.createTextNode("i m 2st"));
//console.log(sec2);
sec2.normalize();
console.log(sec2);
*/


//insertBefore()
 //var ul1=document.getElementById("ul1");
 //var n2=document.getElementById("2n");
 //var newNode=document.createElement("li");
 //newNode.textContent="hi ";
  //var inBefore=ul1.insertBefore(newNode,n2);
 //console.log(ul1);

//insertAdjacentelement();
//var new_node=document.createElement("span");
//new_node.textContent="how r u";
//var adj=n2.insertAdjacentElement("afterend",new_node);
//console.log(adj);
//console.log(ul1);

//insertAdjacentHTML(); same bus pura html add kare ga
//inserAdjacentText("position " , text)
 
/*
var div = document.getElementById("div1");
var ul2=document.getElementById("ul2");
ul2.innerHTML="";//replace
ul2.outerHTML="";
//console.log(div);
*/

/*copy node
var ul1=document.getElementById("ul1");
//var dupFalse=ul1.cloneNode(false);
//console.log(dupFalse);
var dupTrue=ul1.cloneNode(true);
console.log(dupTrue);
var div2=document.getElementById("Div2");
div2.appendChild(dupTrue);
console.log(div2);
*/

//removechild()
//var n2=document.getElementById("2n");
//var remove=n2.parentNode.removeChild(n2);

/*replacechild(newnode,oldnode);
var ul1=document.getElementById("ul1");
var n2=document.getElementById("2n");
var span1=document.getElementById("span1");
var repNode=ul1.replaceChild(span1,n2);
console.log(repNode);
*/



















