

//////////// First Task ///////////

var fruit1 = ["ვაშლი", "მსხალი", "ატამი"];

fruit1.pop("ატამი");
fruit1.pop("მსხალი");
fruit1.pop("ვაშლი");
fruit1.push("ატამი");
fruit1.push("მსხალი");
fruit1.push("ვაშლი");

document.write(fruit1);

document.write("</br>");

//////////// Second Task ///////////

var myDate = new Date();
var months = myDate.getMonth();
var temperature;

if(months >= 0 && months <= 3){
    temperature = "ცივა";
}
else if(months >= 4 && months <= 8){
    temperature = "ცხელა";
}
else{
    temperature = "ცივა";
}
document.write("მაგრად " + temperature);

document.write("</br>");

//////////// Third Task ///////////

var myDate = new Date(); 
var days = myDate.getDay();
var months = myDate.getMonth();
var holiday;

if(days >= 4 && days <=6 && months >= 0 && months <= 3){
    holiday = "skiing";
}
else if(days >= 0 && days <=6 && months >= 4 && months <= 11){
    holiday = "swimming";
}
document.write("lets go " + holiday);