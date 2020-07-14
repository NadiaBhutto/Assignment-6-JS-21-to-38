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
function c26t1(){
 var userInput = +prompt("Enter a Positive Integer");
    document.write("Number: " + userInput + "<br>");
    document.write("Round of value: " + Math.round(userInput) + "<br>");
    document.write("Floor value: " + Math.floor(userInput) + "<br>");
    document.write("Ceil value: " + Math.ceil(userInput));
}

//Task2
function c26t2(){
     var userInput = +prompt("Enter a Negative Integer");
     document.write("Number: " + userInput + "<br>");
     document.write("Round of value: " + Math.round(userInput) + "<br>");
     document.write("Floor value: " + Math.floor(userInput) + "<br>");
     document.write("Ceil value: " + Math.ceil(userInput));
}

//Task3
function c26t3(){
     var userInput = +prompt("Enter any number to see it's absolute value");
     document.write("The absolute value of " + userInput + " is " + Math.abs(userInput));
}

//Task4
function c26t4(){
    var dice = Math.floor(Math.random() * 6) + 1;
    document.write("Random dice value: " + dice + "<br>");
}

//Task5
function c26t5(){
    var coin = Math.floor(Math.random() * 2) + 1;
    if (coin == 2) {    
    document.write(coin + "<br>");
    document.write("Random coin value: Heads");
    }
     else {
    document.write(coin + "<br>");
    document.write("Random coin value: Tails");    
    }
}

//Task6
function c26t6(){
    var rand = Math.floor(Math.random() * 100) + 1;
    document.write("Random number between 1 and 100: " + rand);
}

//Task7
function c26t7(){
    var userInput = prompt("Enter your weight in kilograms");
    var possibleInputs = ["kgs","kilogram","kg","kilograms"];
    var finalWeight;
    for (var i = 0; i < possibleInputs.length; i++) {
    if (userInput.includes(possibleInputs[i])) {
    finalWeight = userInput.replace(possibleInputs[i]," kilograms");
    break;
    }
    else {
    finalWeight = userInput + " kilograms";
    continue;
     }
    }
    document.write("The weight of user is " + finalWeight);
}

//Task8
function c26t8(){
    var randSecret = Math.floor(Math.random() * 10) + 1;
    alert(randSecret);
    var userInput = +prompt("Enter a number between 1 to 10");
    if (userInput == randSecret) {
    alert("Congratulations, You Won");
    }
    else {
    alert("Please Try Again");
    }
}

//Chapter 31-34

//Task1
function c31t1(){
    var currentDate = new Date();
    document.write(currentDate);
}

//Task2
function c31t2(){
    var allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    document.write("Current month: " + allMonths[currentMonth]);
}

//Task3
function c31t3(){
     var allDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
     var currentDate = new Date();
     var currentDay = currentDate.getDay();
     alert("Today is " + allDays[currentDay].slice(0,3));
}

//Task4
function c31t4(){
     var allDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
     var currentDate = new Date();
     var currentDay = allDays[currentDate.getDay()];
     if (currentDay == "Sunday" || currentDay == "Saturday") {
     document.write("It’s Fun day");
    }
}

//Task5
function c31t5(){
    var currentDate = new Date();
    currentDate = currentDate.getDate();
    if (currentDate < 16) {
    document.write("First fifteen days of the month");
    } else {
    document.write("Last days of the month");
    }
}

//Task6
function c31t6(){
    var currentDate = new Date();
    var currentDateMilli = currentDate.getTime();
    var dateBefore = new Date("Jan 01, 1970");
    var dateBeforeMilli = dateBefore.getTime();
    var diff = currentDateMilli - dateBeforeMilli;
    var diffInMin = diff / (1000 * 60 * 60);
    document.write("Current Date: " + currentDate + "<br>");
    document.write("Elapsed milliseconds since January 1, 1970:  " + diff + "<br>");
    document.write("Elapsed minutes since January 1, 1970:  " + diffInMin + "<br>");
}

//Task7
function c31t7(){
     var currentDate = new Date();
     var currentHour = currentDate.getHours();
     if (currentHour <= 12) {
       alert("It's AM");
     } else {
       alert("It's PM");
    }
}

//Task8
function c31t8(){
      var laterDate = new Date("Dec 31, 2020");
      document.write("Later date: " + laterDate);
}

//Task9
function c31t9(){
     var ramadanStartDate = new Date("Apr 24, 2020");
     var currentDate = new Date();
     var diffTime = currentDate - ramadanStartDate;
     var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
     document.write(diffDays + " days have passed since 1st Ramadan, 2020 :)");
}

//Task10
function c31t10(){
    var yearBegDate = new Date("Jan 01, 2020");
    var currentDate = new Date(prompt("Enter any date to calculate seconds from year start e.g.","Jun 21, 2020"));
    var yearBegDateMilli = yearBegDate.getTime();
    var currentDateMilli = currentDate.getTime();
    var diff = yearBegDateMilli - currentDateMilli;
    var diffInSeconds = Math.abs(diff / 1000);
    document.write(diffInSeconds + " seconds had past since begining of 2020");

}

//Task11
function c31t11(){
    var currentDate = new Date();
    document.write("Current date: " + currentDate + "<br>");    
    var setHours = currentDate.setHours(15);
    document.write("1 hour ago, it was: " + currentDate);
}

//Task12
function c31t12(){
     var currentDate = new Date();
     var getCurrentYear = currentDate.getFullYear();
    document.write("Current date: " + currentDate + "<br>");    
    var setHours = currentDate.setFullYear(getCurrentYear-100);
     document.write("100 years back, it was: " + currentDate);
}

//Task13
function c31t13(){
     var userAge = +prompt("Enter your age");
     var currentDate = new Date();
     var getCurrentYear = currentDate.getFullYear();
     var birthYear = getCurrentYear - userAge;
     document.write("Your age is " + userAge + "<br>");
     document.write("Your birth year is " + birthYear + "<br>");
}

//Task14
function c31t14(){
     var Month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     var customerName = "Nadia Kanwal Bhutto";
     var currentMonth = new Date().getMonth();
     currentMonth = Month[currentMonth];
     var noOfUnits = 410;
     var chargesPerUnit = 16;
     var lateAmount = 350;
	 
	 document.write("<h2>K-Eletric Bill</h2>" + "<br>");
     document.write("Customer Name: " + customerName + "<br>");
     document.write("Month: " + currentMonth + "<br>");
     document.write("Number of Units: " + noOfUnits + "<br>");
     document.write("Charges Per Unit: " + chargesPerUnit + "<br>");
     document.write("<br>");
     document.write("Net Amout Payable (within Due Date): " + noOfUnits*chargesPerUnit + "<br>");
     document.write("Late Payment Surcharge: " + lateAmount + "<br>");
     document.write("Gross Amout Payable (after Due Date): " + ((noOfUnits*chargesPerUnit)+lateAmount) + "<br>");
        

}

//Chapter 35-38
//Task1
function c35t1(){
	 function showDateTime() {
    var currentDate = new Date();
    document.write(currentDate);
    }
    showDateTime();
}

//Task2
function c35t2(){
	function greetingsUser(fname,lname) {
    var fullName = fname + " " + lname;
     alert("Welcome! Dear " + fullName);
    }
    var askFirstName = prompt("Enter Your First Name");
    var askLastName = prompt("Enter Your Last Name");
    greetingsUser(askFirstName,askLastName);
}

//Task3
function c35t3(){
	 function sumOfTwo(n,k) {
       return sum = n + k;
     }
     var askFirstNum = +prompt("Enter First Number");
     var askSecondNum = +prompt("Enter Second Number");
     document.write(sumOfTwo(askFirstNum,askSecondNum));
}

//Task4
function c35t4(){
	 function calc(num1,num2,opr) {
        if (opr === "+") {
           return num1 + num2; 
         } 
        else if(opr === "-") {
            return num1 - num2;
         }
        else if(opr === "/") {
            return num1 / num2;
         }
        else if(opr === "*") {
             return num1 * num2;
         }
        else if(opr === "%") {
             return num1 % num2;
         }
        else {
             return "Wrong Command";
        }
   }
     var num1 = +prompt("Enter First Number");
     var num2 = +prompt("Enter Second Number");
     var opr = prompt("Enter Operator");
     alert("Equation is " + num1 + opr + num2 + "\nOutput is " + calc(num1,num2,opr));
 
}

//Task5
function c35t5(){
	   function squareMe(x) {
       alert("Input is "+x + "\nSquare is " + x*x);
     }
       squareMe(+prompt("Enter any number"));
}

//Task6
function c35t6(){
	 function numFactorial(x) {
     var initial = x;
     for (var i = x-1; i > 0; i--) {
            x *= i;
      }
    alert("Input is "+initial + "\nFactorial is " + x);
    }
    numFactorial(+prompt("Enter any number"));
}

//Task7
function c35t7(){
	  function displayCounting(x,y) {
      for (var i = x; i <= y; i++) 
	  document.write(i + "<br>");
        }
     displayCounting(+prompt("Enter Counting Start Number"),+prompt("Enter Counting End Number"));
}

//Task8
function c35t8(){
	 function calculateHypotenuse(base,perpendicular) {
     var finalHypotenuse;
     var hypSquare = Math.pow(base,2) + Math.pow(perpendicular,2);
     function calculateSquare(hyp) {
     finalHypotenuse = Math.sqrt(hyp).toFixed(2);
     return finalHypotenuse;
     }
     calculateSquare(hypSquare);
     return finalHypotenuse;
     }
     document.write(calculateHypotenuse(10,10));
}

//Task9
function c35t9(){
	 function calcArea(w,h) {
     var A = w * h;
     return A;
     }
    alert("Area of Rectengle: " + calcArea(20,10)); 
    var width = 20;
    var height = 10;
    alert("Area of Rectengle: " + calcArea(width,height));
}

//Task10
function c35t10(){
	 function checkPalindrome(str) {
     var reversed = "";
     for (var i = str.length-1; i >= 0; i--) {
     reversed += str[i];
     }
     if (str === reversed) {
     alert("It's a Palindrome");
     } else {
     alert("It's not a Palindrome");
     }
    }
    checkPalindrome(prompt("Enter a string to check it's Palindrome or not"));
}

//Task11
function c35t11(){
    function titleCase(str) {
    var splitted = str.split(" ");
    for (var i = 0; i < splitted.length; i++) {
    document.write(splitted[i].charAt(0).toUpperCase()+splitted[i].substring(1,)+" ");
    }
    }
   titleCase(prompt("Enter any word here","This is a sample text").toLowerCase());
}

//Task12
function c35t12(){
	function findLongest(str) {
    var strToArr = str.split(" ")
    var longest = strToArr[0];
    for (var i = 1; i < strToArr.length; i++) {
    if (strToArr[i].length > longest.length ) {
    longest = strToArr[i];
	}
    }
    document.write("String: " + str + "<br>Longest Word: " + longest);
    }
    findLongest("My name is nadiakanwalbhutto."); 
}

//Task13
function c35t13(){
	function findOcc(str,ltr) {
    var spilitted = str.toLowerCase().split("");
    var occurances = 0;
    for (var i = 0; i < spilitted.length; i++) {
    if(spilitted[i] == ltr) {
    occurances++;
    }
    }
    document.write("Text: " + str + "<br>");
    document.write("There are '" + occurances + "' occurance(s) of letter '" + ltr + "'");
    }
    var str = "The quick brown fox jumps over lazy the dog";
    var ltr = "o";
    findOcc(str,ltr);
}

//Task14
function c35t14(){
	 function calcCircumference(r = 10) {
     var circumference = (2 * 3.142 * r).toFixed(2);
     alert("The circumference is " + circumference);
     }
    function calcArea(r = 10) {
    var area = (3.142 * (r*r)).toFixed(2);
    alert("The area is " + area);
     }
    calcCircumference();
    calcArea();
}


























