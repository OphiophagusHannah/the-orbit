var num = [
		function random1(){
		x=1;
		return x;
	},
		function random2(){
		x=2;
		return x;
	},
		function random3(){
		x=3;
		return x;
	}
	];

var rand = Math.floor(Math.random())*num.length;

	window.addEventListener('load',num[rand]);




//revomeEventListener('scroll', function);