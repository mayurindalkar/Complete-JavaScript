/*
object literal 
obj lit declare and initial
obj constructor new key
factory function return key 
using fun constructor using this key and new key 

*/



/*var fees={};

fees['mayur']=100;
fees['indya']=200;
fees['indu']=300;
fees['mayur indalkar']=500;
document.write(fees.indu + "<br>");
document.write(fees['indya']);
document.write(typeof(fees));

var fees1={};
fees1['meth1']=function(){
    return 10+20+30;
}

document.write(fees1.meth1());
document.write(fees1['meth1']());

*/

/*var noob = {
    sam:200,
    amit:200,
    indya:2300,total:function(){
        return 200+200+2300;
    }
}
document.write(noob.sam);
document.write(noob.total());
*/

//var fees = new Object();

/*let man={
    name:'indya',
    height:5.9,
    weight:55,
    shine:function(){
        return document.write("hii indya here");
    }
}
for(var key in man)
{
if(typeof man[key] !== 'function'){
    document.write( key +":"+man[key] + "<br>");
}
}

document.write(Object.keys(man));
*/

    /*define class using custom constructor  */ 
/*var Mobile=function(mob_no,brand_price){
            this.m_no=mob_no,
            this.b_price=brand_price,
            this.price=3000,
            this.total_price=function(){
                 return(this.price+this.b_price);
            }
            this.data=function(){
              document.write(this.m_no + " "+ this.total_price());
            }
}
var iphone=new Mobile(123,3000);

iphone.data();
*/

/*prototype classname.prtotype.key=value*/
/*var Truck=function(truck_name, truck_price){
        this.t_name=truck_name,
        this.t_price=truck_price
}
var ashok=new Truck('Ashok',`75,000`);
var honda=new Truck('Honda',5000);
Truck.prototype.t_color='blue';
document.write(ashok.t_name + ashok.t_price + ashok.t_color);
document.write(honda.t_name + honda.t_price);
document.write(Object.keys(ashok));
for(var key in ashok){
    document.write(key);
}
*/

//every obj is associated with other obj in javascript

//console.log(Object.prototype);
//var obj = {};
//console.log(Object.getPrototypeOf(obj)); 

/*var b=new Array();
console.log(Object.getPrototypeOf(b));
console.log(Object.getPrototypeOf(Array.prototype));
console.log(Object.getPrototypeOf(Object.prototype));
*/

/*function Mobile(){

}
console.log(Mobile.prototype);
var lg =new Mobile();
 console.log(lg.__proto__);
console.log(Mobile.prototype===lg.__proto__);
console.log(Mobile===lg.__proto__.constructor);
console.log(Mobile===Mobile.prototype.constructor);
*/

/*function Mobile(){
    this.a=10;
}
Mobile.prototype.z=200;
//var m = new Mobile();

function Samsung(){
    Mobile.call(this);
    this.b=20;
}
Samsung.prototype=Object.create(Mobile.prototype);
Samsung.prototype.constructor=Samsung;//reset

var s =new Samsung();
document.write(s.a);
document.write(s.z +" ");

var m =new Mobile();
document.write(m.a + " ");
document.write(m.z +" ");
document.write(m.b);//not possible
*/

/*function inheri(child,parent){
    child.prototype=Object.create(parent.prototype);
    child.prototype.constructor=child;
}
//super class 
var Mobile = function(){

}
Mobile.prototype.getmodel=function(){
    return this.model;
}

var Samsung=function(model,price){
    this.model=model;
    this.price=price;
}
Samsung.prototype.getprice=function(){
    return this.price;
}
var lenovo = function(model){
    this.model=model;
}
inheri(Samsung,Mobile);
inheri(lenovo,Mobile);
//Samsung.prototype=Object.create(Mobile.prototype);
//Samsung.prototype.contructor=Samsung;

//lenovo.prototype=Object.create(Mobile.prototype);
//lenovo.prototype.contructor=lenovo;

var galaxy=new Samsung('galary',20000);
console.log(galaxy.getmodel());
*/

/*
var eating ={
    eat:function(){
        return'i am eating';
    }
}
var walking={
    walk:function(){
        return'i am walking';
    }
}
var running={
    run:function(){
    return 'i am running';
    }
}
function Human(){

}
Object.assign(Human.prototype,eating,walking,running);//composition feature
var Mayur=new Human();
//var Mayur=Object.assign({},eating,walking,running);
var robo=Object.assign({},walking,running);
*/














