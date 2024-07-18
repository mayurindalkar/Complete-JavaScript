
function display(name1, name2,name3){



    arguments[0]="indya";
  // document.write(name);
  // document.write(arguments[0] +"" + arguments[1] + " " +  arguments[2]);
   //document.write(arguments.length);
   //for(var i=0; i<arguments.length; i++){
    //document.write(arguments[i]);
    //document.write(arguments.callee);
   }
display("mayur","amit","karan");

/*function defaults(a,b,c=20){
    document.write(a +" " + b +" "+ c);

}
defaults(10,20);
*/

/*function rests(a,...args){
    document.write(a + "<br>");
    document.write(args +"<br>");
    document.write(args[2]);
}
rests(10,20,30,6,22,22,3,3,6,6,9);
*/

/*function outerfun(){
    var i=10;
    document.write(i);
    function innerfun(){
            var j=20;
            document.write(j + " " + i);
    }
    innerfun();
}
outerfun();
*/

/*var name= function nam(){
    document.write("function expession");
}
name();

*/
/*function disp(param){
    return param();
}
 document.write(disp(function(){
    return "Indyaa"
 }))
*/

/*function disp(a){
    return function(b){
        return a+b;
    }  
}
//document.write(disp(10));
var af=disp(10);
document.write(af(20));
*/

/*var fun= a=>{
   // document.write(a);
};
fun(10);
var fun1=(a,...args)=>{
       // document.write(a +" "+ args);
};
fun1(10,2,3,6,5,9,8);
var fun2=a=>a;
//document.write(fun2(2));
*/

/*(function(){
   var a=10;
    document.write(20);
}) ();
document.write(a);//error
*/

/*function fact(name){
    return {
        myname:name ,
        agr:10,
        total:function(){
            return(10+20+30);
        }
    }
}
var samg=fact("samsung");
document.write(samg.myname + " " + samg.total());
var nki=fact("nokia");
document.write(nki.myname + " " + nki.total());
*/

/*function Mobile(mob_no){
     this.no=mob_no,
     this.price=function(){
       // return(document.write(this.no + 'price is 3000'));
     }
}
var samsung = new  Mobile(10001);
samsung.price();

if(typeof samsung.no !='undefined')
{
    document.write('available');
}
else{
    document.write('dosent exit');
}

if('price' in samsung){
document.write('available');
}
else{
    document.write('dosent exit');
}
if(samsung.hasOwnProperty('no')){
    document.write('available');
}
else{
    document.write('dosent exit');
}
*/










