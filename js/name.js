//sets the Store Name on top of the page
var store = document.getElementById("name");
var mobile = document.getElementById("nameMobile");
store.innerHTML = "Sarah Marie's Home Furnishings";
mobile.innerHTML = store.innerHTML;

//sets the address at the top of the page
var add = document.getElementById("address");
add.innerHTML = "725 Academy Ave | Sanger, CA 93657 | (559) 399-3223";

//sets the copyright at bottom of page
var copyright = document.getElementById("copyright");
copyright.innerHTML = "Copyright &copy; Sarah Marie's Home Furnishings 2016";

var contact = document.getElementById("contact");
console.log(contact);
//sets the title
document.title  = "Sarah Maries Home Furnishings";

//Use to set the next href of product pages more easily
var max = 12; //whatever the last page is set it here. Make sure to change it in both JS files!


//gets the name of the page
var path = window.location.pathname;
var fullPage = path.split("/").pop().split(".")[0];

//returns the page number after product page name i.e. dining(1)
var pageNumber = toNumber(fullPage);
//returns just the page (dining, living, bedroom)
var page = fullPage.split(toNumber(fullPage)).shift();

function browse(id) {
//gets the elements next and prev
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
//if not the first page go to next page
	if(pageNumber > 1) {
		prev.href = page + (pageNumber-1) + ".html";
	}
//otherwise go to max page on the href
	else {
		prev.href = page + max + ".html";
	}
//if last page go to first page
	if(pageNumber == max) {
		next.href = page + 1 + ".html";
	}
	else {
		next.href = page + (pageNumber+1) + ".html";
	}
	return prev.href;

}

function alsoView(id) {
	//gets the elements next and prev
		var prev = document.getElementById("alsoPrev");
		var next = document.getElementById("alsoNext");
		var plusTwo = document.getElementById("plusTwo");
		var plusThree = document.getElementById("plusThree");
	//if not the first page go to next page
		if(pageNumber > 1) {
			prev.href = page + (pageNumber-1) + ".html";
		}
	//otherwise go to max page on the href
		else {
			prev.href = page + max + ".html";
		}
	//if last page go to first page
		if(pageNumber == max) {
			next.href = page + 1 + ".html";
		}
		else {
			next.href = page + (pageNumber+1) + ".html";
		}
	//if 11th or higher loop around to beginning for plusTwo
		if(pageNumber<(max-1)) {
			plusTwo.href = page + (pageNumber +2) + ".html";
		}
		else {
			plusTwo.href = page + (2-(max-pageNumber)) + ".html";
		}
	//if 10th or higher loop around to beginning for plusThree
		if (pageNumber < (max-2)) {
			plusThree.href = page + (pageNumber + 3) + ".html";
		}
		else {
			plusThree.href = page + (3-(max-pageNumber)) + ".html";
		}

}

//this function just returns the number inside an array as long as it is positive and not NaN
function toNumber(arr) {
	var newArr = [];
	for (var i=0; i<arr.length; i++) {
		if(Number(arr[i]) >= 0)
			newArr.push(Number(arr[i]));
	}
	var combine = "";
	for (var j = 0; j < newArr.length; j++) {
		combine += newArr[j]
	}
	return Number(combine);
}

browse();
alsoView();
