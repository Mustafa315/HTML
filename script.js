document.write("<h1>Hello World!</h1>");

//single comment
/*multi-line
comments*/
/*variables*/

var x = 10;
var y = x;
document.write(x + "<br>");
document.write(y + "<br>");
x = 100;
y=x;
document.write(x + "<br>");
document.write(y + "<br>");
var num=40; //number
var price=50.25; //float
var name= 'Rama'; //string
var msg="my name is mustafa";

var isActive= true; //boolean
var isHoliday= false;
document.write(msg + "<br>");

/*math-operators*/
var x = 10 + 5;  //sum
document.write(x + "<br>");
var y = x + 5;
document.write(y + "<br>");
var z = y - x;   //subtract
document.write(z + "<br>");
var x= 10 * 5 ;  //multiply
document.write(x + "<br>");
var x = 100/5 ;  //divide
document.write(x + "<br>");
var x = 26%6;    //modulus
document.write(x + "<br>");
//post increment
var a= 0;
var  b= 10;
a = b++; //a=10 , b=11
document.write(a + "<br>");
document.write(b + "<br>");
//pre increment
var c= 0;
var d=10;
c= ++d; //c=11 d=11
document.write(c +"<br>");
document.write(d +"<br>");

//post decrement
var e= 0;
var  f= 10;
e = f--; //a=10 , b=11
document.write(e + "<br>");
document.write(f + "<br>");
//pre decrement
var g= 0;
var h=10;
g= --h; //c=11 d=11
document.write(g +"<br>");
document.write(h +"<br>");

/*assignment-operator*/
x =10 , y=5;
document.write(x+=y);  //x=x+y
document.write("<br>");
x =10 , y=5;         
document.write(x-=y);  //x=x-y
document.write("<br>");
x =10 , y=5;
document.write(x*=y);  //x=x*y
document.write("<br>");
x =10 , y=5;
document.write(x/=y);  //x=x/y

document.write("<br>");
/*comparison-operators*/
x=5 , y=10;
document.write(x==y);
document.write("<br>");

x=5 , y='5';
document.write(x==y); //equal value
document.write("<br>");
document.write(x===y); //identical value & data type
document.write("<br>");
x=5 , y=5;
document.write(x===y);
document.write("<br>");

x=5 , y=10;
document.write(x!=y); //is not equal?
document.write("<br>");
x=5, y=5 ;
document.write(x!==y); // not identical
document.write("<br>");

x=5 , y=10;
document.write(x>y);  //greater than
document.write("<br>");
document.write(x>=y);  //greater than or equal
document.write("<br>");
document.write(x<y);  //less than
document.write("<br>");
document.write(x<=y);  //less than or equal
document.write("<br>");

/*logical-operators*/
document.write((4<2)&&(10<15)); //and
document.write("<br>");
document.write((4<2)||(10<15));  //or
document.write("<br>");

/*conditional-operator*/
//var = (condition) ? value_if_true : value_if_false
var age=40;
var isAdult =(age<18) ? "too young" : "old enough"

document.write(isAdult);
document.write("<br>");
var age=14;
var isAdult =(age<18) ? "too young" : "old enough"
document.write(isAdult);
document.write("<br>");

/*concat string operator*/
var myString1= "I am learning";
var myString2=" JavaScript.";
document.write(myString1 + myString2);
document.write("<br>");

/*conditionals*/
//if statement
var myNum1=7;
var myNum2=10;
if (myNum1<myNum2){
    document.write("JavaScript is easy");
}
document.write("<br>");
//else statement

var myNum1=7;
var myNum2=10;
if (myNum1<myNum2){
    document.write("The first num is less than the second one.");

}
else{
    document.write("The first num is greater than the second one.");
}
document.write("<br>");

//else if statement
var course=5;
if(course==1){
    document.write("<h1>HTML</h1>");
}
else if (course==2){
    document.write("<h1>CSS</h1>");
}
else {
    document.write("<h1>JS</h1>")
}
document.write("<br>");

//task: test (status)-->msg cas1: 1-->online 2-->away anything else -->offline

var status=3;

var msg;

if(status==1){
    msg="online";
}

else if (status==2){
  msg="Away";
}
else{
    msg="Offline";
}
document.write(msg);
document.write("<br>");
//switch statement
var day=1;
switch(day){
    case 1:
        document.write("Sat");
        break;
    case 2:
        document.write("Sun");
        break;
    case 3:
        document.write("Mon");
        break;
    case 4:
        document.write("Tue");
        break;
    case 5:
        document.write("Wed");
        break;
    case 6:
        document.write("Thu");
        break;
    default:
        document.write("Fri");
        }
document.write("<br>");

//task switch(x)
//case 1: X=1 --> Write (x value)
//case 2: X=2 -->write (double value of x)
//case 3: x=3 -->write (trible value of x)

var x=5;
switch (x)
{
    case 1:
        document.write(x);
        break;
    case 2:
        document.write(x*2);
        break;
    default:
        document.write(x*3);
        }
document.write("<br>");

var color = "yellow";
switch (color){
    case "red":
        document.write("This is red");
        break;
    case "green":
        document.write("This is green");
        break;
    case "blue":
        document.write("This is blue");
    case "cyan":
        document.write("This is cyan");
    case "magenta":
        document.write("This is magenta");
    case "yellow":
        document.write("This is yellow");
        break;
    default:
        document.write("color not found");
        
}
document.write("<br>");
//task switch (dayname)
//case 1: sun, mon ,tue ,wed , thu --> working day
// case 2: sat , fri --> weekend
var day = "mon"; 
switch (day){
    case "sun":
    case "mon":
    case "tue":
    case "wed":
    case "thu":
        document.write("working days");
       break; 
        
        
    case "fri":
    case "sat":
        document.write("weekend");
        
}
document.write("<br>");

/*loops*/
/*for-loop*/
for(i=1; i<=5; i++){
    document.write(i + "<br>");
}

var i=1;
for(; i<=10; i++){
    document.write(i + "<br>");
}

var i=1;
for(; i<=15;){
    document.write(i + "<br>");
    i++;
}
//task print even numbers 0 to 20
//even numbers
for(i=0; i<=20; i++){
    if((i % 2)==0)
        document.write(i + "<br>");
}
//even numbers
for (i=0; i<=20; i+=2){
    document.write(i + "<br>");
}

//odd numbers
for(i=0; i<=20; i++){
    if((i % 2)!=0)
        document.write(i + "<br>");
}
//odd numbers
for (i=1; i<=19; i+=2){
    document.write(i + "<br>");
}
document.write("<br>");
//task print the sum from 1 to 10
var sum =0;
for (i=1; i<=10; i++){
    sum+=i;
    
    }

document.write(sum + "<br>");

/*while-loop*/
var i=0;
while(i<=10){
    document.write(i+ "<br>")
    i++;
}
/*do-while-loop*/
var i=20;
do{
    document.write(i + "<br>")
    i++;
}
while(i<=25);

/*break*/
//stop looping
for(i=0; i<=10; i++){
    if(i==5){break;}
    document.write(i + "<br>");
}

/*continue*/
//all except the number


for(i=0; i<=10; i++){
    if(i==5){continue;}
    document.write(i + "<br>");
}

//task print the sum of the number from 4 to 8 except 6

var sum =0;
for (i=4; i<=8; i++){
    if (i==6){continue;}
    sum+=i;
    
    }

document.write(sum + "<br>");

/*functions*/
//user defined functions
function myFunction(){
    document.write("calling a function!");
}
myFunction();

document.write("<br>");
function sayHello(name){
    document.write("Hello, " + name);
}

sayHello("Sama");
document.write("<br>");
sayHello("Marwan");
document.write("<br>");
sayHello("Ayat");
document.write("<br>");

//multiple-parameter

function sayHi(name, age){
    document.write("Hi, "+name + " is "+age + " years old." + "<br>");
}
sayHi("Ahmed",20);
sayHi("Rawan",17);
sayHi("Mustafa",26);

//return
function multiplyNum(x,y){
    return x*y;
}
var z = multiplyNum(5,6);
document.write(z);
document.write("<br>");

function addNum(a,b){
    var c= a+b;
    return c;
}
document.write(addNum(10,5));
document.write("<br>");

//task: subtract 2 numbers

function sub (x,y){
    var z=x-y;
    return z;
}
document.write(sub(20,4));
document.write("<br>");

//task test num if num <5 increment
//if num > 5 return num
function test (x){
    
    if (x<5){
        x++;
    }
   
    
        return x;
    }
document.write(test(2));

document.write("<br>");
function testm (m){
    
    while (m<5){
        m++;
    }
   
    
        return m;
    }
document.write(testm(2));
document.write("<br>");

//task test 2 numbers 
//if n1>=n2 --> n1
//else n2

function compare (n1,n2){
    if(n1 >= n2){
        return n1;
    }
    return n2;
}
document.write(compare(4,5));

//task test 2 numbers 
//if n1>=n2 --> n1*n2
//else n2/n1
document.write("<br>");


function guess(o,p){
    var l=o*p;
    var m=p/o;
    if(o>=p){
        return l;
    }
    return m;
    
}
document.write(guess(5,20));

//task : bill >200  20% bill
//100<bill<200  15% bill
//bill <100   10% bill
document.write("<br>");

function bill(b){
    if(b>200){
        return (b*20/100);
    }
    else if (b>=100 && b<=200){
        return (b*15/100);
    }
    
    else if (b<100){
        return (b*10/100);
    }
}
document.write(bill(250));
document.write("<br>");

/*alert*/
//alert("Welcome!");
//alert("Hello: \nHow are you?"); // \n line break

//prompt

//var userName = prompt("Please enter your name:");
//alert("Welcome " + userName + "!");

//task sum 

/* var addone=parseInt (prompt("n1"));
 var addTwo=parseInt (prompt("n2"));


var sum2= addone + addTwo;
alert(sum2);

document.write("<br>"); */

//confirm

/*var result = confirm ("Do you really want to leave this page?");
if (result== true){
alert ("thanks for visiting");
}
else{
    alert("Thanks for staying with us!");
} */

//objects
//variables --> container for data value
//object --> container for many values

var person = {name:"Ahmed" , age:30 , favColor:"Green" , weight:80 , height:180};
var x = person.name;
var y = person['age'];
document.write(x + "<br>");
document.write(y + "<br>");
document.write(person.favColor + "<br>");
//count the number of characters in a property
var course = {name:"JS" , lessons:40 };
document.write(course.name.length);
document.write("<br>");

//object-constructor
function person2 (name,age,color){
    this.name = name;
    this.age = age;
    this.favColor = color;
}
var ahmed = new person2("ahmed" , 20, "red");
var rawan = new person2("Rawan" , 18,"green");
var ayat = new person2("Ayat" , 24, "blue");
document.write(ahmed.name + "<br>");
document.write(ayat.age + "<br>");
document.write(rawan.favColor + "<br>");

//create your own method
function student (name,age){
    this.name=name;
    this.age=age;
    this.changeName= function(name){
        this.name=name;
    }
}
var s1 = new student("David",21);
document.write(s1.name + "<br>");
s1.changeName("John");
document.write(s1.name + "<br>");

function employee (name ,age){
    this.name=name;
    this.age=age;
    this.yearOfBirth = bornYear;
    
}
function bornYear(){
    //return 2020 - this.age;
    return new Date().getFullYear()- this.age;
}
var emp1 = new employee("Amr",40);
document.write(emp1.yearOfBirth());

//task function patient objects
//par weight height(m)
//method bmi(weight/(height*height))

document.write("<br>");
function patient (weight,height){
    this.weight=weight;
    this.height=height;
    this.bmi = function bmi(){
        return this.weight/ (this.height*this.height);
    }
}

var pt = new patient (80,1.8);

document.write(pt.bmi() + "<br>");


/*core-objects*/
//array
var courses =new Array ("HTML","CSS","JS");
document.write(courses[0]+ "<br>");
document.write(courses[1]+ "<br>");
document.write(courses[2]+ "<br>");
courses[2]="JQ";
document.write(courses[2]+ "<br>");

var subjects = new Array (3);
subjects[0]="Arabic";
subjects[1]="English";
subjects[2]="Math";
document.write(subjects[0]+ "<br>");
document.write(subjects[1]+ "<br>");
document.write(subjects[2]+ "<br>");

var cars = new Array();
cars[0]="BMW";
cars[1]="Toyota";
cars[2]="Volvo";
cars[3]="Suzuki";

document.write(cars[0]+ "<br>");
document.write(cars[1]+ "<br>");
document.write(cars[2]+ "<br>");
document.write(cars[3]+ "<br>");

var students = ["Ahmed","Mustafa","Sama","Rama","Rawan"];

document.write(students[0]+ "<br>");
document.write(students[1]+ "<br>");
document.write(students[2]+ "<br>");
document.write(students[3]+ "<br>");
document.write(students[4]+ "<br>");
document.write(students.length + "<br>");

var frontend = ["HTML","CSS","JS","JQ","BS"];
var backend = ["PHP","MySQL","Laravel"];
var fullstack = frontend.concat(backend);
document.write(fullstack.length + "<br>");
document.write(fullstack[5] + "<br>");

//math-objects

document.write(Math.PI + "<br>");
document.write(Math.pow(3,2) + "<br>");
document.write(Math.sqrt(9) + "<br>");
document.write(Math.round(1.5) + "<br>");
document.write(Math.random() + "<br>");
document.write(Math.max(100,200,300) + "<br>");
document.write(Math.min(100,200,300) + "<br>");



//task ask user to input a number its square root

/*
var addNumber=(prompt("Enter a number:"));
var answer = Math.sqrt(addNumber);
alert(answer);

document.write("<br>"); 
*/

//date-object
/*function myAlert (){
    alert("Hiiii");
}
setInterval(myAlert,3000); //msecond */

var d = new Date();
document.write(d.getFullYear() + "<br>"); //year
document.write(d.getMonth() + "<br>"); //month
document.write(d.getDate() + "<br>"); //month-day
document.write(d.getDay() + "<br>"); //week-day
document.write(d + "<br>"); //date


//task create a program that prints the current time once everysec

/*function time (){
    
    var t = new Date();
    document.write(t.getHours() + " : ", t.getMinutes() + " : " + t.getSeconds() + "<br>");
}
setInterval(time,1000);*/



/*dom: document object model*/
/*selecting elements*/
var elem = document.getElementById("demo");
elem.innerHTML = "Hello World!";

var arr1 = document.getElementsByTagName("h5");
for (i=0; i<arr1.length; i++){
    arr1[i].innerHTML = "Welcome";
}

var arr2 = document.getElementsByClassName("intro");
arr2[1].innerHTML = "Welcome statement";

var elem1 = document.getElementById("list");
var arr3 = elem1.childNodes; //childnodes self study..
for (i=0; i<arr3.length; i++){
    arr3[i].innerHTML = "Drinks";
}
 

/*changing Attributes*/
var elem2 = document.getElementById("myImg");
elem2.src = "orange.jpg";

var arr4 = document.getElementsByTagName("a");
arr4[0].href = "https://www.bing.com";


/*changing style*/
var elem3 = document.getElementById("demo1");
elem3.style.width = "100px";
elem3.style.color = "blue";
elem3.style.backgroundColor= "yellow";


/*creating elements*/
//creating a new paragraph

var p = document.createElement("p");
//creating a text node
var node = document.createTextNode("Some new content");
//adding text to paragraph
p.appendChild(node);
//select div
var div = document.getElementById("demo2");
//adding paragraph into div
div.appendChild(p);

/*removing elements*/
var parent = document.getElementById("demo3");
var child = document.getElementById("p1");
parent.removeChild(child);

/*replacing elements*/

//creating a new paragraph

var p1 = document.createElement("p");
//creating a text node
var node1 = document.createTextNode("New paragraph from JS");
p1.appendChild(node1);
//select div
var parent1 = document.getElementById("demo4");
var child1 = document.getElementById("p4");
parent1.replaceChild(p1,child1); //new,old


/*Animations*/
//box
var box = document.getElementById("box");
//position
var pos = 0;
//time-frame
var t = setInterval (move , 10);
//move function
function move(){
    if(pos>=150){
        clearInterval(t);
    }
    else{
        pos += 1 ;
        box.style.left = pos + 'px';
    }
}
//tasks:
//1- box moves left to right and from right to left
//2- box moves diagonal from top-left to bottom-right
//3- from left to right ,from top to bottom, from right to left , from bottom to top
//4- box moves like snake!
var box1 = document.getElementById("box1");
var pos1 = 0;
var t1 = setInterval (move1 , 10);
function move1(){
    if(pos1>=150){
       
         pos1 -= 1 ;
        box1.style.left = pos1 + 'px';
        
    }
    

    else if (pos1>=0) {
        pos1 +=1 ;
        box1.style.left = pos1 + 'px';
    }
}
/*events*/
//when a user takes action (event)--> JS executes code


function show (){
    alert("HI!");
}

var btn = document.getElementById("btn");
btn.onclick = function(){
    var dateDiv = document.getElementById("dateDiv");
    dateDiv.innerHTML = Date();
}

function change(){
    var x = document.getElementById("name");
    x.value = x.value.toUpperCase();
}


//task: click the light bulb to turn on/off the lights
//case 1
function on (){
    var swc = document.getElementById("switch");
    swc.src = "on.jpeg";
   
}

function off (){
    var off = document.getElementById("switch");
    off.src= "off.jpeg";
}

//case 2
function changeImage(){
    var lump = document.getElementById("lump");
    if (lump.src.match("on.jpeg")){
        lump.src = "off.jpeg";
    }
    else{
        lump.src = "on.jpeg";
    }
}



































































