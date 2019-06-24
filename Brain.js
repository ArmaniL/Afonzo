var input;
var len=10;
var answer=" ";
var greetings=['hi','hello','hola','hey']
var cnv;
function setup(){
	cnv=createCanvas(displayWidth*0.5,displayHeight *0.5);
	input=createInput();
	input.position(width*0.3,height*0.5);
	input.width=0.6*width;
    frameRate(5)
    textSize(30)
}
function draw(){

	drawBackground();
    fill(100,0,random(100,254));
	ellipse(width*0.5,height*0.3,height/5);
	stroke(255)
	text(answer,width*0.1,height*0.80)
	

}
function Process(){
	question=input.value().toLowerCase().replace(/\s/g, '');

	print(question)
	if(greetings.includes(question)){
		answer=  greetings[Math.floor(Math.random()*greetings.length)]
	}

	else if(question.includes('whatisyourname') ){
		answer="My name is Alfonzo"
	}

else if(question.includes("whomadeyou")){
		answer="I was created by Armani Leroy Weise "
	}

else if(question.includes("gotogoogle")){
		answer="OK"
		window.location.href = 'https://www.google.com/';
	}

else if (question.includes("searchgooglefor")){
	answer="OK"
	question=question.replace("searchgooglefor",'')
	window.location.href='https://www.google.com/search?q='+question
}

else if (question.includes("searchwikipediafor")){
	answer="OK"
	question=question.replace("searchwikipediafor",'')
	window.location.href='https://en.wikipedia.org/wiki/'+question
}


else if (question.includes("searchyoutubefor")){
	answer="OK"
	question=question.replace("searchyoutubefor",'')
	window.location.href='https://www.youtube.com/results?search_query='+question
}


else{  answer=" I didnt quite get that"  }


}
function drawBackground(){
	for(var x=0;x<width;x+=len){
		for(var y=0;y<height;y+=len){
          fill(random(0,21));
          stroke(0)
          rect(x,y,len,len)
		}
	}
}

function keyReleased() {
  if (keyCode === ENTER) {
    Process();
  } 
  return false; // prevent default
}