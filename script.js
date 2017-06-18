//Lecture;variables
/*
var name='JAANI';
console.log(name);  
var lastName='Kushwah';
console.log(lastName);
var age=26;
console.log(age);
var fullAge=true;
console.log(fullAge);
*/

//Lecture:variables 2

/*
var name='Malik';
var age=30;
console.log(name+age);

var job, isMarried;

console.log(job);

job='neta';
isMarried = true;
console.log(name + ' is a ' + age + ' years old ' + job + '.Is he married? ' + isMarried  + '.');

job= 'bhangi';

console.log(name + ' is a ' + age + ' years old ' + job + '.Is he married? ' + isMarried  + '.');

//var lastName= prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '.Is he married? ' + isMarried  + '.')
*/

//Lecture 3:Operators
/*var janamSaal =2016-24;

janamSaal=2016-24*2;
//2016-48
//1968
console.log(janamSaal);
*/





//////////////////////////////
//lecture:if/else statements

/*var name='rinku';
var age='34';
var isMarried= 'yes';

if(isMarried ==='yes'){
    console.log(name + ' is married!');
}else{
    console.log(name + ' will hopefully marry soon:)');
}

isMarried = true;*/
/*
if(isMarried) {
    console.log('YES!');
    
}else{
    console.log('NO!');
}*/

/*if(isMarried) {
    console.log('YES!');
}


if (23=='23'){
    console.log('tetgtgr..');
}

*/


//////////////
//lecture:boolean logic and switch

/*var age=40;

if(age<30){
    console.log('john is a buddha');
    
}else if(age>30 && age<50){
    console.log('john is adhedh')

}else{
    console.log('john is a nobody')
}

var job= 'teacher';

job = prompt('what does john do?');
switch (job){
    case 'teacher':
            console.log('john teaches  kids.');
            break;
    case 'driver':
            console.log('magic wala');
            'break';
        default:
        console.log('kuch aur hi krta h');
        
}*/



///////////////////////////////////
///CODING CHALLENGE 1 ///////////

/*var H1 = 100;
var H2 = 450;
var A1 = 22;
var A2 = 24;

var score1 = H1 + 5 * A1;
var score2 = H2 + 5 * A2;

if (score1>score2){
    console.log('ajeet bada h ' + score1 + '   points!');
}
else if(score1<score2){
    

   console.log('mukesh bada h ' + score2 + ' points!');
}
else if(score1===score2){
    console.log('fassa ho gya');
}
*/

/*var heightPrem=171;
var agePrem=40;
var scorePrem= heightPrem + 5 * agePrem;

if(score1>score2 && score1>scorePrem){
    
}*/



/////////////////////////////////
///lecture: FUNCTIONS




/*function calculateAge(yearOfBirth){
    var age= 2016 - yearOfBirth;
    return age;
}
 var ageJohn= calculateAge(1992);
console.log(ageJohn); 

function kitneBaakiH(name, paida){
  var age=calculateAge(paida) ;
  var retirement= 65-age;
    
    if (retirement >=0){
       console.log(name + ' retires in ' + retirement + ' years ');  
    }
   else{
       console.log(name + ' is already retireed.');  
   }
}


kitneBaakiH('babulal', 1992);
kitneBaakiH('chunilal', 1948);*/


//////////////////////////////
//Lecture: Statements and expressions

//expressions to produce a  value
/*3+4;
var x=5;

//statements..to perfrom some action
if(x===5){
    
}*/

/////////////////////////
////lecture:Arrays

/*var names=['jagdish','satish','harish'];
var years=new Array(1990,1996,1948);

console.log(names[2]);
names[1] = 'banna';
console.log(names);

var john=['john', 'sharma', 1990, 'panchar wala',false];

john.push('blue'); to add a element in the last
john.unshift('shree.'); to add in first
john.pop(); to delete the last
john.shift(); to delete the first
console.log(john);

if(john.indexOf('teacher')===-1){
    console.log('john is NOT a teacher');
}*/

////////////////////////////
//////lecture:Objects


/*var john={
    name:'John', 
    lastName:'wasawal',
    yearofBirth:1990,
    job:'teacher',
    isMarried:false
};

console.log(john.lastName);
console.log(john['lastName']);


var xyz='job';
console.log(john[xyz]);

john.lastName='parashar';
john['job'] ='typist';
console.log(john);

var jane=new Object();
jane.name='akhilesh';
jane.lastName='soni';
jane['birthYear']=1698;
jane['job']='retired';

console.log(jane);*/








//////////////////////////
///:Objects and methods
 /////oBjects can contain functions,variables and array as well//////

////example of method-push,indexOf,shift
/*var john={
    name:'John', 
    lastName:'wasawal',
    yearOfBirth:1990,
    job:'teacher',
    isMarried:false,
    family:['jane','mark','bob'],
    calculateAge: function(){
  //  return 2016 -this.yearOfBirth;
      // create a new variable called 'age' in this john object and assign it to yearOfBirth 'property'
        //all the key values pairs are property..such as family..alll of them properties of john object 
        this keyword useful in using object
        //this.agr=2016- this.yearOfBirth;
}
};
//console.log(john.calculateAge(1992));
/*console.log(john.calculateAge());

//to call the method,store the result in the variable
var age=john.calculateAge();
//add this variable to the object
john.age=age;

console.log(john);*/

/*john.calculateAge();

console.log(john);*/



///////////////////
//LECTURE:lOOPS




/////var names=['john','ggd','gdg','dfv','rggb'];
/*
for (var i=0;i<5;i++){
    console.log(names[i]);
}

for (var i =names.length -1; i >=0 ;i--){
    console.log(names[i]);
}

*/
//while loops
/*var i=0;
while(i<names.length){
    console.log(names[i]);
    i++;
}


for(var i=0; i<=5; i++){
    console.log(i);



if(i===3){
    break;
}

}


for(var i=0; i<=5; i++){
    
    if (i===3){
        continue;
    }

console.log(i);

}*/


//////////////////////////////


///////CODING CHALLENGE 2



/*var years=[1960,1962,1989];

var ages=[];
 for(var i=0;i<years.length;i++){
   ages[i]=  2016 - years[i];
     
 }

for(i=0;i<ages.length;i++){
    if(ages[i]>=18){
        console.log('person ' + +ages[i]) + ''
    }
}*/


/////////////////////////
/////lecture:Hoisting
///hoisting works on function declaration and not on function expresssion


/*function calculateAge(year){
    console.log(2016-year);
    
}
 

//retirement(1990);
var retirement=function (year){
    console.log(65-(2016-year));
}
*/

///////////////////////
////////scoping in javascript
///each function creates a new scope


///Lexical scoping

/*var a ='heelo';
first();

function first(){
    var b='hiii';
    second();
 
function second(){
    var c='heyyyy';
    third()
}
}
function third(){
    var d='john';
    console.log(a+d);
}*/


//////////////THIS keyword



///console.log(this);

//give Window object in the result..since it is the default object
/*calculateAge(1985);

function calculateAge(year){
    console.log(2016-year);
    console.log(this);
    
}
/////in a regular function call..always point to the Window object above is a funciton call
*/

/*var john={
    name:'john',
    yearOfBirth:1990,
calculateAge: function(){
    
console.log(this);
    console.log(2016-this.yearOfBirth);
  }*/




////john.calculateAge();




///////method borrowing


/////borrow a method from a different object
/* var mike={
     name:'Mike',
     yearOfBirth:1984
 };
mike.calculateAge=john.calculateAge;
mike.calculateAge();
*/


//this keyword only becomes something as soon some method is called






////////////DOM & DOM MANIPULATION



////GAME RULES
var scores, roundScore, activePlayer, dice;
scores=[0,0];
roundScore=0;
activePlayer=1;

//// querySelector-a method similar to CSS selector used with document keyword in whihc a string is passed usually a ID in div class

dice = Math.floor(Math.random() * 6)+1;




document.querySelector('#current-'+ activePlayer).textContent=dice;


//first DOM manipulation - Used query Selector method to manipulate the elemets on the webpage


//document.querySelector('#current-' + activePlayer).innerHTML='<em>' + dice + '<em>';




var x = document.querySelector('#score-0').textContent;

console.log(x);

document.querySelector('.dice').style.display= 'none';

