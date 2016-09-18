var q;
var count = 0;
var total = 0;
var size;
function start() {
	document.getElementById("startButton").style.display = "none";
	document.getElementById("left").style.display = "block";
	document.getElementById("right").style.display = "block";
	size = size();
	q = getQuestion();
	count++;
	document.getElementById("header").innerHTML = q[0].question;
	document.getElementById("b1").innerHTML = q[0].left;
	document.getElementById("b2").innerHTML = q[0].right;
	document.getElementById("b1").style.backgroundImage = "url('" + q[0].leftimage + "')";
	document.getElementById("b2").style.backgroundImage = "url('" + q[0].rightimage + "')";
	document.getElementById("b1").style.backgroundRepeat = "no-repeat";
	document.getElementById("b2").style.backgroundRepeat = "no-repeat";

}

function onClickLeft() {
	updateQuestion(document.getElementById("b1").innerHTML);
}

function onClickRight() {
	updateQuestion(document.getElementById("b2").innerHTML);
}


function updateQuestion(title) {
	console.log("count: " + count);
	console.log("size: " + size);
		total += q[0].score(title);
		if (count < size) {
			q = getQuestion();
			count++;
			document.getElementById("header").innerHTML = q[0].question;
			document.getElementById("b1").innerHTML = q[0].left;
			document.getElementById("b2").innerHTML = q[0].right;
			document.getElementById("b1").style.backgroundImage = "url('" + q[0].leftimage + "')";
			document.getElementById("b2").style.backgroundImage = "url('" + q[0].rightimage + "')";
			document.getElementById("b1").style.backgroundRepeat = "no-repeat";
			document.getElementById("b2").style.backgroundRepeat = "no-repeat";
		}
		else {
			document.getElementById("header").style.display = "none";
			document.getElementById("left").style.display = "none";
			document.getElementById("right").style.display = "none";
			document.getElementById("final").style.display = "block";
			document.getElementById("final").style.width = "500px";
			document.getElementById("final").style.textAlign = "center";
			console.log(document.getElementById("final"));
			if (total <= 7) {
				document.getElementById("image").src = "clinton.jpg";
				return;
			}
			else {
				return;
			}
		}
}