var Cars = ["Tesla","BMW","Renault","Volvo","Maza","Fiat","Ferari"];
document.write(Cars.sort()+ "<br>");

var fruits= ["apple","banana","kiwi"];
fruits.push("orange");
document.write (fruits+ "<br />");

console.log (fruits.pop());
document.write(fruits+ "<br />");

var fruits2= "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
document.write(fruits2+ "<br />");
var res= fruits2.split("/");
var newfruits = res.join ("<br />");
document.write(newfruits+ "<br />");
