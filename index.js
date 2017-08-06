// var a = 0;
// setInterval( () => {console.log(a++)}, 100);
phrases = [
	'Наша работа - это Г****',
	'Г**** c большой буквы "Г"',
	'Серьезная Геодезия для серьезных людей'
];
var a = 0;
document.getElementById('slider-content').innerHTML = phrases[0];
setInterval( () => {
	 a > 1 ? a = 0 : a++ ;
	 console.log(a);
	 document.getElementById('slider-content').innerHTML = phrases[a];
},4000);
