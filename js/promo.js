//gets the name of the page
var path = window.location.pathname;
var fullPage = path.split("/").pop();

//whatever the last page is set it here. Make sure to change it in both JS files!
var max = 8;

//sets var to the element with the productImage Id
var productImage = document.getElementById('productImage');

//calls the toNumber function and takes the number of the page.
var pageNumber = toNumber(fullPage);

//takes the name of the page (fullPame) and removes the number, giving the page prefix
var productPrefix = fullPage.split(toNumber(fullPage)).shift();

//just to make it easier for myself I added these vars
var jpg = ".jpg";
var png = ".png";

var newSrc = "img/products/" + productPrefix + "/" + fullPage + ".jpg";
productImage.src = newSrc;

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


function alsoViewImg(id) {
	//gets the elements next and prev
		var prev = document.getElementById("alsoPrev").childNodes[0];
		var next = document.getElementById("alsoNext").childNodes[0];
		var plusTwo = document.getElementById("plusTwo").childNodes[0];
		var plusThree = document.getElementById("plusThree").childNodes[0];
	//if not the first page go to next page
		if(pageNumber > 1) {
			prev.src = "img/products/" + productPrefix + "/" + productPrefix + (pageNumber - 1) + jpg;
		}
	//otherwise go to max page on the href
		else {
			prev.src = "img/products/" + productPrefix + "/" + productPrefix + max + jpg;
		}
	//if last page go to first page
		if(pageNumber == max) {
			next.src = "img/products/" + productPrefix + "/" + productPrefix + 1 + jpg;
		}
		else {
			next.src = "img/products/" + productPrefix + "/" + productPrefix + (pageNumber + 1) + jpg;
		}
	//if 11th or higher loop around to beginning for plusTwo
		if(pageNumber<(max-1)) {
			plusTwo.src = "img/products/" + productPrefix + "/" + productPrefix + (pageNumber+2) + jpg;
		}
		else {
			plusTwo.src = "img/products/" + productPrefix + "/" + productPrefix + (2-(max -pageNumber)) + jpg;
		}
	//if 10th or higher loop around to beginning for plusThree
		if (pageNumber < (max-2)) {
			plusThree.src = "img/products/" + productPrefix + "/" + productPrefix + (pageNumber+3) + jpg;
		}
		else {
			plusThree.src = "img/products/" + productPrefix + "/" + productPrefix + (3-(max - pageNumber)) + jpg;
		}

}

function alsoView(id) {
	//gets the elements next and prev
		var prev = document.getElementById("alsoPrev");
		var next = document.getElementById("alsoNext");
		var plusTwo = document.getElementById("plusTwo");
		var plusThree = document.getElementById("plusThree");
	//if not the first page go to next page
		if(pageNumber > 1) {
			prev.href = page + (pageNumber-1);
		}
	//otherwise go to max page on the href
		else {
			prev.href = page + max;
		}
	//if last page go to first page
		if(pageNumber == max) {
			next.href = page + 1;
		}
		else {
			next.href = page + (pageNumber+1);
		}
	//if 11th or higher loop around to beginning for plusTwo
		if(pageNumber<(max-1)) {
			plusTwo.href = page + (pageNumber +2);
		}
		else {
			plusTwo.href = page + (2-(max-pageNumber));
		}
	//if 10th or higher loop around to beginning for plusThree
		if (pageNumber < (max-2)) {
			plusThree.href = page + (pageNumber + 3);
		}
		else {
			plusThree.href = page + (3-(max-pageNumber));
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
alsoViewImg();
