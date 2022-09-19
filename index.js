function check(){
    var myScore = userScore.value
    if(myScore <=100  && myScore>=70){
        disp.innerHTML = "<h2>Excellent A</h2>"
        disp.style.color ="green"
    }else if(myScore==""){
        disp.innerHTML = "<h2>enter score</h2>"
    }else if(myScore>=60 && myScore<70){
        disp.innerHTML = "<h2>Very Good B</h2>"
        disp.style.color ="violet"
    }else if(myScore>=50 && myScore<60){
        disp.innerHTML = "<h2>Good C</h2>"
        disp.style.color ="yellow"
    }else if(myScore>=45 && myScore<50){
        disp.innerHTML = "<h2>Pass D</h2>"
        disp.style.color ="blue"
    }else if(myScore>=40 && myScore<45){
        disp.innerHTML = "<h2>Woeful E</h2>"
        disp.style.color ="indigo"
    }else if(myScore<40 && myScore>=0){
        disp.innerHTML = "<h2>Fail F</h2>"
        disp.style.color ="red"
    }else if (myScore>100 || myScore<0){
        disp.innerHTML = "<h2>Invalid</h2>"
        disp.style.color ="black"
    }
}