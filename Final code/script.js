/* Fixed Header */

var header = document.querySelector('header');

window.onscroll = function(){
	window.scrollY > 250 ? header.classList.add('active') : header.classList.remove('active');
}

/* Mobile Menu */

function openNav() {
  	document.querySelector('.navslide').style.right = "0";
}

function closeNav() {
  	document.querySelector('.navslide').style.right = "-250px";
}

/* form drop down */

document.querySelector(".amount>.label").addEventListener("click", showAmount);

document.querySelector(".period>.label").addEventListener("click", showPeriod);

var list1 = document.querySelectorAll('.amount-list>li');
var list2 = document.querySelectorAll('.period-list>li');
console.log(this);
function showAmount(){
	document.querySelector(".amount-list").classList.toggle("hide");
	document.querySelector(".period-list").classList.add("hide");
	for(var i=0; i< list1.length ; i++){
		list1[i].onclick = function(){
			var text = this.innerText;
			document.querySelector('.amount>.sub-content').innerText = text;
		}
	}
}

function showPeriod(){
	document.querySelector(".period-list").classList.toggle("hide");
	document.querySelector(".amount-list").classList.add("hide");
	for(var i=0; i< list2.length ; i++){
		list2[i].onclick = function(){
			var text = this.innerText;
			document.querySelector('.period>.sub-content').innerText = text;
		}
	}
}

/* New section */

// var status = 'less';

function showNews(){
	document.querySelector('.news-container').classList.toggle('more-news');

	if(document.querySelector('.news-container+.btn').innerText === 'MORE NEWS'){
		document.querySelector('.news-container+.btn').innerText = "LESS NEWS";
	}

	else{
		document.querySelector('.news-container+.btn').innerText = "MORE NEWS";
	}
}

function showMore(){
	document.querySelector('.news-container .sub-content').classList.toggle('hidden');
}