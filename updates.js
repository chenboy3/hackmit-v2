var q;
function start() {
	document.getElementById("startButton").style.display = "none";
	document.getElementById("left").style.display = "block";
	document.getElementById("right").style.display = "block";
	q = getQuestion();
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
	var total = 0;
	if (q !== null) {
		total += q[0].score(title);
		q = getQuestion();
		if (q !== null) {
			document.getElementById("header").innerHTML = q[0].question;
			document.getElementById("b1").innerHTML = q[0].left;
			document.getElementById("b2").innerHTML = q[0].right;
			document.getElementById("b1").style.backgroundImage = "url('" + q[0].leftimage + "')";
			document.getElementById("b2").style.backgroundImage = "url('" + q[0].rightimage + "')";
			document.getElementById("b1").style.backgroundRepeat = "no-repeat";
			document.getElementById("b2").style.backgroundRepeat = "no-repeat";
			return;
		}
		else {
			if (total <= 7) {
				document.getElementById("final").display = "block";
				document.getElementById("final").src = "clinton.jpg";
				return;
			}
			else {
				document.getElementById("final").display = "block";
				return;
			}
		}
	}
	if (total <= 7) {
		document.getElementById("final").display = "block";
		document.getElementById("final").src = "clinton.jpg";
		return;
	}
	else {
		document.getElementById("final").display = "block";
		return;
	}
}