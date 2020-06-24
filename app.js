//Chapter 21-25

//Task 1
function c21t1(){
	var a= prompt("Enter your first name");
	var b= prompt("Enter your last name");
	alert("Welcome to my site " + a  + b  + "!");
}

//Task 2
function c21t2(){
	var a= prompt("Write your fav phone", "My favourite phone is: ");
	document.write("My favourite phone is: " + a + "<br>" + "Length of string: "+ a.length);
}

//Task 3
function c21t3(){
    var a = "Pakistani";
    var b = a.indexOf("n");
	document.write("String: " + a + "<br>" + "Index of 'n': " + b);	
}

//Task 4
function c21t4(){
	var a = "Hello World";
    var b = a.lastIndexOf("l");
	document.write("String: " + a + "<br>" + "Last Index of 'l': " + b);
} 

//Task 5
function c21t5(){
	var a = "Pakistani";
    var b = a.charAt("3");
	document.write("String: " + a + "<br>" + "Character at index '3' : " + b);
} 

//Task 6
function c21t6(){
	var a= prompt("Enter your first name");
	var b= prompt("Enter your last name");
    var res = a.concat(b);
	document.write("Welcome to my site " + res + "!");
}

//Task 7
function c21t7(){
	var a= "Hyderabad";
	var res = a.replace("Hyder", "Islam");
	document.write("City: " + a + "<br>" + "After replacement: " + res);
}

//Task8
function c21t8(){
	var a= "and";
	var res = a.replace("and", "&");
	document.write("Ali and Sami are best friends. They play cricket and football together." + "<br>" + "After replacement: " + "Ali " + res + " Sami are best friends, They play cricket " + res + " football together.");
}

//Task9
function c21t9(){
	var a = "472"
	var b= parseInt(a);
	document.write("Value: " + a + "<br>" + "Type: " + typeof(a) + "<br>" + "Value: " + b + "<br>" + "Type: " + typeof(b));
}

//Task10
function c21t10(){
	var a = prompt("Write anything");
	var b = a.toUpperCase();
	document.write("User Input: " + a + "<br>" + "Upper Case: " + b);
}

//Task11
function c21t11(){
var str = "nadia kanwal";
var str = str.toLowerCase();
var strToArr = str.split(" ");
var capsArr = [];
for (var i = 0; i < strToArr.length; i++) {
    var x = strToArr[i][0].toUpperCase() + strToArr[i].substring(1,)
    capsArr.push(x)
}
var finalStr = capsArr.join(" ")
document.write(finalStr);
}

//Task12
function c21t12(){
	var num = 35.36;
	var str = num.toString();
	var res = str.replace(".","");
	document.write("Number: " + num + "<br>" + "Result: " + res);
}

//Task13
function c21t13(){
	var a = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
	var b = prompt("Search Item");
	var searchitem = b.toLowerCase();
	if(a.indexOf(searchitem)==-1){
    document.write("We are sorry. " +  searchitem + " is not available in our bakery");
	}else{document.write(searchitem + " is available at index" + b.indexOf(a) + " in our bakery");
	}
}

//Task14
function c21t14(){
	var str = "University of Hyderabad";
    var res = str.split("");
	document.write(res);
}


//Task15
function c21t15(){
    var str = prompt("Enter any word"); 
    var res = str.charAt(str.length-1);
    document.write("User input: " + str + "<br>" + "Last character of input: " + res); 
}

//Task16
function c21t16(){
   var string = "The quick brown fox and jump over the lazy dogs";
    sp = string.split("");
	var count = 0;
	
    for(var i = 0; i < sp.length; i++) {
     if(sp[i] === "the"){
		 count++;
	 }else{
		 sp[i]=sp[i]+1;
	 }
  }
  document.write("Text: " + string + "<br>" + "There are " + count + " occurrence of word 'the'");
}

//Chapter 26-30

//Task1













