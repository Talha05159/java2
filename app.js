// CHAPTER # 21 - 25
//var firstname = prompt ("Enter your first name");
//var lastname = prompt ("Enter your last name");
//var fullname = (firstname + lastname);
//alert ("Welcome" + fullname ) ;

//var mobile = prompt ("Enter your favorite mobile");
//document.write ("My favorite phone is" + mobile + "<br>");
//var length = (mobile.length);
//document.write ("Length of string:" + length + "<br>");

//var nation = ("Pakistani");
//document.write ("String:" + nation + "<br>")
//var ind = (nation.indexOf ("n"));
//document.write ("Index of 'n' :" + ind + "<br>");

//var greet = ("Hello World");
//document.write ("String:" + greet + "<br>")
//var lastind = (greet.lastIndexOf ("l")) 
//document.write ("Last index of 'l':" + lastind + "<br>")

//var country = ("Pakistani");
//document.write ("String :" + country + "<br>")
//var charac = (country.charAt(3))
//document.write ("Character at index 3:" + charac + "<br>")

//var firstname = prompt ("Enter your first name");
//var lastname = prompt ("Enter your last name");
//var fullname = (firstname + lastname);
//alert ("Welcome" + fullname ) ;

//var city = ("Hyderabad")
//document.write ("City :" + city + "<br>")
//var replacecity = city.replace ("Hyder", "Islam")
//document.write ("After replacement: " + replacecity + "<br>")

//var message = ("Hamza and Zain are best friends. They play cricket and football together.")
//document.write ("Paragraph :" + " " + message + "<br>")
//var replacemessage = message.replace (/and/g, "&")
//document.write ("Paragraph after replacement:" + " " + replacemessage + "<br>")

//var a = ("472")
//document.write ("Value:" + " " + a + "<br>")
//var b = ("string")
//document.write ("Type:" + " " + b + "<br>" )
//var c = Number (a)
//document.write ("Value:" + " " + c + "<br>")
//var d = ("number")
//document.write ("Type:" + " " + d +"<br>")

//var userinput = prompt ("Enter your text")
//document.write ("User input:" + " " + userinput + "<br>")
//var chag = userinput.toUpperCase();
//document.write ("Upper case:" + " " + chag + "<br>")

//var num = (35.36);
//document.write ("Number:" + " " + num + "<br>")
//var con = num.toString();
//var rep = (num*100);
//document.write ("Result:" + " " + rep + "<br>")
 
//var sign = prompt("Enter your username")
//if(sign= "@",".",",","!"){
 //   alert ("Please enter a valid username")
//}

//var ask = prompt("Welcome to Godil's Bakery.What do you want to order sir/ma'am")
//var bakr = ["cake","apple pie","cookie","chips","patties"]
//var inx = bakr.indexOf();
//var doc = (bakr + "is available at index" + inx + "in our bakery")
//if(ask=bakr){
 //   document.write ( doc + "<br>" )
//}else {
// document.write ("We are sorry." + ask + "is not available in our bakery" + "<br>" )
//}

//var university = ("University of Karachi")
//var sp = university.split("");
//document.write (sp)
 
//var userin = prompt("Enter some text")
//document.write ("User input:" + " " + userin + "<br>" )
//var charact = (userin.charAt(userin.length- 1));
//document.write ("Last character of input:" + " " + charact + "<br>")

//var text = ("The quick brown fox jumps over the lazy dog ")
//document.write ("Text :" + " " + text + "<br>")
//var 

//CHAPTER # 26 - 30

//var postivenum = prompt("Enter a positive integar")
//document.write ("Number :" + " " + postivenum + "<br>")
//var round = (Math.floor(postivenum))
//document.write ("Round off value: " + " " + round + "<br>")
//var floor = (Math.floor(postivenum))
//document.write ("Floor value :" + " " + floor + "<br>")
//var ceil = (Math.ceil(postivenum))
//document.write ("Ceil value : " + " " + ceil +  "<br>")

//var negativenum = prompt ("Enter a neagative integar")
//document.write ("Number : " + " "  +  negativenum + "<br>")
//var roundoff = (Math.round(negativenum))
//document.write ("Round off value :" + " " + roundoff + "<br>")
//var floorval = (Math.floor(negativenum))
//document.write ("Floor value :" + " " + floorval + "<br>")
//var ceilval = (Math.ceil(negativenum))
//document.write ("Ceil value : " + " " + ceilval +  "<br>")

//var number = prompt("Enter a number")
//var absolutenum = (Math.abs(number))
//document.write ("The absolute value of " + " " +  number + "is" + " " + absolutenum + " " + "<br>")

//var dice = (Math.random(4))
//var rou = (Math.round(dice))
//if(rou === 0){
  //  document.write ("random dice value : " + " " + 4 + "<br>")
//}
//else{
   // document.write ("random dice value : " + " " + 6 + "<br>")
//}
//var diceran = (Math.random(6))
//var rouoff = (Math.round(diceran))
//if(rouoff === 0){
      //  document.write ("random dice value : " + " " + 4 + "<br>")
//}
//else{
//document.write ("random dice value : " + " " + 6 + "<br>")
//}

//var m = prompt("Enter a number between 1 & 10")
//var n = ("7") ;
//if(n===m){
  //  alert ("Congratulations... ")
//}
//else{
   // alert ("Try Again!")
//}

//var coin = (Math.random(2))
//var heads = (Math.round (coin))
//if (heads === 0 ){
 // document.write ("random coin value : " + " " + "Heads" + "<br>")
//}
//var coins = (Math.random(1))
//var tail = (Math.round(coins))
//if (tail === 1){
 // document.write ("random coin value : " + " " + "Tails" + "<br>")
//}

//var b = Math.random (67)
//var c = (b * 76)
//var d = Math.ceil(c)
//document.write ("Random number between 1 and 100 : " + " " + d + "<br>")

//var x = prompt("Enter your weight in kilograms")
//document.write ("The of weight of user is :" + " " +  x +  "<br>")

//CHAPTER # 31 - 34

//var h = new Date ()
//document.write (h)

//var f = h.getMonth ()
//alert (f)

//var o = h.toString()
//var p =o.slice (0,3)
//alert (p)
//if(p = "sat"){
 // alert ("Its Fun Day")
//}

//var g = new Date ()
//if (g< 15){
 // alert ("First 15 days of the month")
//}
//else if(g >15){
 // alert ("Last days of the month")
//}

//var u = new Date ()
//document.write ("Current Date :" + " " + u + "<br>")  

//var v = u.getSeconds ()
//var w = (v * 10000)
//alert (w)

//var y = u 
//if("y === pm"){
  //alert("It's PM")
//}
//else if("y === am"){
 // alert("It's AM")
//}









//CHAPTER # 35 - 38

//function dat (){
 // var a = new Date()
 // document.write (a)
//}

//dat();

//function name (){
  //var b = prompt("Enter First Name")
  //var c = prompt ("Enter Last Name")
  //alert ("Welcome" + " " +  b + " " + c)
//}

//name ();

//function sum (){
 // var d = +prompt ("Enter first number")
 // var e = +prompt("Enter last name")
 // var f = (d + e)
 // document.write ("Sum of two numbers is :" + " " + f + "<br>")
//}

//sum ();

//function cal (num1,opr,num2){
//if(opr === "+"){
 // return num1 + num2
//}
//else if (opr === "-"){
 // return num1 - num2
//}
//else if (opr === "*"){
 // return num1*num2
//}
//else if (opr === "/"){
 // return  num1/num2
//}
//else {
 // return "Try Again With Correct Operator"
//}
//}

//var result = cal(7,"+",5)
//alert(result)

//var result1 = cal (8,"=",3)
//alert (result1)

//var result2 = cal (10,"/",2)
//alert (result2)

//function square (number){
//var g = number * number
//alert (g)
//}

//square(6);

//function factorial(num){
 // var factor =1;
 // for (let i=num; i>=1; i--)
  //    {
   //       factor =factor *i;
   //   }
    //  return factor ;
//}

//var t  = factorial(4)
//document.write ("The factorial is : " + " " + t + "<br>" )


//function count(){
 // var  starting = prompt("Enter start number")
 // var ending = prompt("Enter end number")
 // for (let i = starting; i <= ending ; i++)
   //   {
   //       document.write(i+"<br>")
    //  }
//}

//count()

//function hypo (){

//var x = prompt ("Enter base of triangle")
//var y  = prompt ("Enter perpendicular of triangle")
//var z = calsquare(x) + calsquare (y)
//document.write ("The hypotenuse of a triangle is :" + " " + z + "<br>")

//function calsquare (number){
//return number * number
//}
//}

//hypo();

//function area (width,height) {
//return width * height;
//}
//function calculatearea (){
//  var width = prompt ("Enter width of trianlge")
//  var height = prompt ("Enter height of triangle")
 // var trianglearea = width * height
 // document.write ("The area of traingle is : " + " " + trianglearea + "<br>")
//}

//calculatearea()

//function palindrome (){
  //var word = prompt ("Enter Your Word")
   //var check ;
   //for (var i = word.length - 1 ; i >= 0 ; i-- ){
// check += word [i]
//}
//if (check === "word"){
 // document.write (word + " " +  "is palindrome word " + "<br>")
//}
//}
//palindrome()

//function convert (string){
//return string.charAt (0).toUppercase () + string.slice (1)
//}
// var string =  convert ("the quick brown fox")
 //document.write (string)

 //function count (str,word){
  // var b  = str.toLowercase ()
  // var c = b.split()
 //}
 //let count = 0
 //for(i = 0; i <= b.length ; i++ ){
  // if (b[i] === word)
  // count ++
 //}
//return count;{
//}
 



 