
//var arr = [];//array literal
//arr[0]=111;

//using array constructor
//var arr = new Array();
//var arr = new Array(5);length of array

var arr = [1,2,3,6,5];
/*document.write(arr);
//arr[2]=2000;
document.write(arr[2]);
//delete arr[2];
document.write(arr);
document.write(arr.length +"<br>");

for(let i=0;i<arr.length;i++){
   // document.write(arr[i]);
}

//forEach loop
/*array.forEach(function(value,index,arraynanme){

});

arr.forEach(function(value,i,arr){
document.write(value + " " + i + "<br>");
});
*/


//for of loop
//for(var name of arr){};
/*for (let value of arr){
    document.write(value);
}*/

/*
//var elem=prompt("enter array size" );
//var arr1=[];
var elem=new Array(2);
console.log(elem.length);
for(let i=0;i<=elem.length;i++){
    arr[i]=prompt("enter array elem");
}
for(let i=0;i<=elem.length;i++){
    document.write(arr[i]);
}
*/

//multidimension array

/*var arr2 =[
 [1,2,30],
 [4,5,6],
 [7,8,9]
];
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        document.write(arr2[i][j] + " " );
    }
    document.write("<br>");
}

//var arr2=[ [], [], []];
arr2[0][0]=100;
*/
//var arr2=new Array([],[]);
/*
var arr3=[];
var rows=3;
var cols=4;
//var arr3=new Array(rows);
for(let i =0;i<rows;i++){
    arr3[i]=[];
    //arr3[i]=new Array(cols);
}

for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
        arr3[i][j]=prompt("enter element" )
        document.write(arr3[i][j] + " ");
    }
    document.write("<br>")
}

*/


//concat()
var arr1=[1,2,3,];
var arr_1=[0,0,0];
/*var new_arr_1=arr_1.concat(arr1);
var new_arr1=arr1.concat(4,5,6);
var new_arr11=new_arr1.concat(7,8,9);

document.write(arr1 + "<br>");
document.write(new_arr1+"<br>");
document.write(new_arr11 + "<br>");
document.write(new_arr_1);
*/
//

//join
var arr11=arr1.join();
/*document.write(typeof(arr11));
document.write(typeof(arr1));

document.write(arr1.join());
document.write(arr1.join("#"));
document.write(arr1.join("/"));
document.write(arr1.join(""));
*/

//reverse
//var new_arr1=arr1.reverse();
//document.write(new_arr1);

//slice()
var arr_sl=[1,2,3,4,5,6,7,8,9,10];
//document.write(arr_sl.slice(1,3) + "<br>");
//document.write(arr_sl.slice(-6,-1) + "<br>");
//document.write(arr_sl.slice(undefined,3) + "<br>");

//toString
//document.write(arr_sl.toString());

//Array.isArray();
//document.write(Array.isArray(arr_sl));
//document.write(Array.isArray(arr11));

//splice();
var arr_sp=["r","s","su","raj","roh"];
//document.write(arr_sp.splice(3)); //error
//document.write(arr_sp.splice(2,2));
//arr_sp.splice(2,2,"m");
//arr_sp.splice(3,2,"ma","yu","r");
//document.write(arr_sp);

//indexOf() -1
var arr_ix=["r","s","su","raj","roh"];
//document.write(arr_ix.indexOf("s"));
//document.write(arr_ix.indexOf("s" , 2));

//fill()
var arr_fll=["r","s","su","raj","roh"];
//document.write(arr_fll.fill("don"));
//document.write(arr_fll.fill("mayur",1,4));
//var new_arr_fill=new Array().fill();

//unshift();  add on start
var arr_un=["r","s","su","raj","roh"];
//document.write(arr_un.unshift("dell","hp"));
//document.write(arr_un);

//push() add on end
 arr_pu=["r","s","varsu","raj","roh"];
//document.write(arr_pu.push("amit","sam"));
//document.write(arr_pu);

//shif()
arr_sh=["r","s","varsu","raj","roh"];
//document.write(arr_sh.shift());
//for(let i=0;i<=4;i++){
  //  document.write(arr_sh.shift(i) +"<br>");
//}


//pop()
arr_pp=["r","s","varsu","raj","roh"];
//document.write(arr_pp.pop());














