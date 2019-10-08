/*let a=2;
let b=3;
let s=a+b;
console.log(`la somme de ${a} + ${b} = ${s}`);
*/


//////////////////////////////////////////////////////////////////////


/*
let x=prompt("Donner une note");
x<10?alert("redouble"):alert("passe");

if (x<10) {
	console.log("redouble");
}
else if (x<12) {
	console.log("passable");
}else {
	console.log("bien");
}
*/


//////////////////////////////////////////////////////////////////////


/*
let a=prompt("Donner la première valeur :");
let b=prompt("Donner la deuxième valeur :");
let op=prompt("Donner l'opérateur");
a=Number.parseInt(a);
b=Number.parseInt(b);

switch(op){
	case "+" : alert(`${a} + ${b} = ${a+b}`);break;
	case "-" : alert(`${a} - ${b} = ${a-b}`);break;
	case "*" : alert(`${a} * ${b} = ${a*b}`);break;
	case "/" :if (b==0) alert("Impossible"); break;
	alert(`${a} / ${b} = ${a/b}`);
}
*/


/////////////////////////////////////////////////////////////////////////


/*
function som(x,y){
	if(Number.isInteger(x) && Number.isInteger(y))return x+y;
else return NaN;
}
alert(som(12,12));
*/


///////////////////////////////////////////////////////////////////////////


/*
let f=function(x,y){
	console.log(x+y);
};
f(5,7);
*/


///////////////////////////////////////////////////////////////////////////////


/*
function decompt(n){
	if (n>0){
		console.log(n);
		return decompt(n-1);
	}
	
}
decompt(10);
*/



///////////////////////////////////////////////////////////////////////////////


/*
let personne={
	nom: "mehdi",
	age: 19,
	direHi: function direHi(){
		console.log("Hi");
	}
}
personne.direHi();
personne.age = 20;
console.log(personne.age);
*/




///////////////////////////////////////////////////////////////////////////////


/*
function Vecteur(x,y){
	this.x=x;
	this.y=y;
};
Vecteur.prototype.mod=function(){
	return Math.sqrt((this.x**2)+(this.y**2));

}
Vecteur.prototype.egale=function(v){
if (this.x==v.x && this.y==v.y) {
	return true;
}else{
	return false;
}
}
let v1=new Vecteur(2,4);
let v2=new Vecteur(3,4);
console.log(v1.mod());
console.log(v2.mod());
console.log(v1.egale(v2));
*/

class Vecteur{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}

	mod(){
		return Math.sqrt((this.x**2)+(this.y**2));
	}
	egale(v){
		return (this.x==v.x && this.y==v.y);
	
	}
}
let v1=new Vecteur(2,4);
let v2=new Vecteur(3,4);
console.log(v1.mod());
console.log(v2.mod());
console.log(v1.egale(v2));