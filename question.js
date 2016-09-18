var array = [];

// answer represents the answer that is trump's
var Question = function(question, left, right, answer, leftimage, rightimage) {
	this.question = question;
	var ran = getRandomInt(0, 2);
	if (ran === 0) {
		this.left = left;
		this.leftimage = leftimage;
		this.right = right;
		this.rightimage = rightimage;
	}
	else {
		this.left = right;
		this.leftimage = rightimage;
		this.right = left;
		this.rightimage = leftimage;
	}

	this.answer = answer;
}
// score('UK') w answer of 'Germany' -> return 0
Question.prototype.score = function(answer) {
	if (this.answer === answer) {
		return 1;
	}
	return 0;
}

array.push(new Question('Which country would you rather live in?', 'Germany', 'United Kingdom', 'Germany', 'http://www.bmiresearch.com/sites/default/files/Germany_0.png', 'http://prn.fm/wp-content/uploads/2015/05/UK.png'));
array.push(new Question('Which city would you rather live in?', 'New York City', 'Chicago', 'New York City', 'http://www.bainstravel.com/drive/uploads/2015/08/Times_Square_New_York_City-350x400.jpg', 'https://trumpadmin.trumphotels.com/uploads/9671/13/trump-chicago-the-terrace-at-dusk-700x800.jpg'));
array.push(new Question('Which college would you rather go to?', 'UPenn', 'Yale University', 'UPenn', 'http://74g2t4f911l3d46ma3e1dgr1.wpengine.netdna-cdn.com/wp-content/uploads/2014/11/university-of-pennsylvania-e1432143431554.jpg', 'http://74g2t4f911l3d46ma3e1dgr1.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/Yale-University.jpg'));
array.push(new Question('Do you drink alcohol?', 'Yes', 'No', 'No', 'http://www.liquorsnob.com/pictures/medea-vodka.jpg', 'http://www.ypcb.org/wp-content/uploads/2013/11/no-300x300.png'));
array.push(new Question('Which occupation would you rather be?', 'Actor', 'Senator', 'Actor', 'http://www.thewrap.com/wp-content/uploads/2013/11/Statham-Getty.jpg', 'http://www.oksenate.gov/senators/biographies/jolley_bio.jpg'));
array.push(new Question('Which award would you rather win?', 'Emmy', 'Grammy', 'Emmy', 'http://rockymountainemmy.org/wp-content/uploads/2014/04/Emmy_Statue.png', 'http://s.hswstatic.com/gif/grammy2.jpg'));
array.push(new Question('Which sport would you rather do?', 'WWE', 'Swimming', 'WWE', 'http://shop.wwe.com/on/demandware.static/-/Sites-main/default/dw58385c62/images/medium/88286.jpg', 'https://stillmed.olympic.org/media/Photos/2016/08/13/part-1/13-08-2016-swimming-1500m-freestyle-men-06.jpg?interpolation=lanczos-none&resize=*:480'));
array.push(new Question('Which media would you rather consume?', 'TV', 'Books', 'TV', 'http://aimages.willow.tv/TVChannel.png', 'http://6.darkroom.shortlist.com/355/494e56b2cfeba155f368fd3cfece92e9:82bd296db9d284162244833be6ecf058/books.jpg'));
array.push(new Question('Who was more of a villain?', 'Macbeth', 'Lady Macbeth', 'Macbeth', 'http://www.pathguy.com/macbeth_at_san_bernardino.jpg', 'https://s-media-cache-ak0.pinimg.com/564x/65/9a/e4/659ae4fc2c51645612ff8758f682531a.jpg'));
array.push(new Question('If your spouse cheated on you, what would you do?', 'Divorce them', 'Stick with them', 'Divorce them', 'http://maricopalawyers.org/wp-content/uploads/2015/05/divorce.jpg', 'http://ronalddent.com/ESW/Images/Marriage_Counseling.jpg'));
array.push(new Question('When greeting someone, what do you go for?', 'Handshake', 'Fist bump', 'Fist bump', 'https://media.licdn.com/mpr/mpr/p/5/005/085/1b1/0a30c9f.jpg', 'https://edwardmd.files.wordpress.com/2013/12/fistbump.jpg'));
array.push(new Question('Which type of food do you prefer more?', 'Fast Food', 'Spicy Food', 'Fast Food', 'http://www.besthealthmag.ca/wp-content/uploads/2016/01/fast-food.jpg', 'http://im.rediff.com/getahead/2010/mar/11spices.jpg'));
array.push(new Question('Which color would you rather wear?', 'Gold', 'Yellow', 'Gold', 'https://vpostrel.com/content/deep-glamour/images/a/6a00e553bc52568834012876576fda970c-250wi.jpeg', 'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=51518678'));
array.push(new Question('Which movie would you rather watch?', 'Citizen Kane', 'The Wizard of Oz', 'Citizen Kane', 'http://images.popmatters.com/news_art/d/donald-trump-citizen-kane-350.jpg','http://www.thecityreview.com/oz2.jpg'));
array.push(new Question('Which artist would you rather be forced to listen to for the rest of your life?', 'The Rolling Stones', 'Katy Perry', 'The Rolling Stones', 'https://img.discogs.com/cdVw067vb245KXf2uZvwzszemjI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-20991-1450358002-9118.jpeg.jpg', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MDI3NDI2Nl5BMl5BanBnXkFtZTcwNjE5OTQwOA@@._V1_UY317_CR4,0,214,317_AL_.jpg'));


var getQuestion = function() {
	if (array.length > 0) {
		var index = getRandomInt(0,array.length);
		var result = array.splice(index, 1);
		return result;
	}
	else {
		return null;
	}
}

var size = function() {
	return array.length;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
