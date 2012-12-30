{
var AlertTime = false;
var ContinueGameNow = {};
var ContinueReplaying = {};
var NowPlay = true;
var ImageClicked = false;
var CDown = true;
var AlertScoresAuto = true;
//var AddedScoreFirstTime = new Boolean();
var WaitTime = 0;
var Score= 0;
var TotalTimesClicked = 8;
var WinWidth = screen.width;
var WinHeight = screen.height;
var ImgHeight=WinWidth/2 ;
var HeaderHeight = WinHeight - ImgHeight;
var Scale=WinWidth/8000;
var XDistance;
var YDistance;
var TouchedY;
var TouchedX;
var WantedXPr;
var WantedYPr;
var Place;
var Places = new Array(Boolean(11));
var Recovered = new Array(Boolean(11));
var Count = 0;
var XYScore;
var MinHeader = (WinHeight/100)*7;
var AppHeight= ImgHeight + MinHeader
var PreferedImgHeight = WinHeight - MinHeader;
var elPos = {};
var TotalDistanceX=0, TotalDistanceY=0;
var i;
var First = true;
var date = {};
var bye=7.5;
ContinueGameNow.bool = true;
ContinueReplaying.bool = true;
var AlertTimeWriting;
var FirstClickToResumeInAlertTime= false;
var OnePausePerRoundDone = false;
var PausesPerPlay = 0;
var LastSecondBeforeAlertingScore = false;
var CountDownReadyForAlerting = false;
var AfterPauseRePlay = false;
var p = 0;
}
/*if  (AppHeight > WinHeight)
 {


 $('#EasyImg').html('<img src="World-Map.jpg" alt="you have a problem" id="special" id="EasyImg" height="'+(PreferedImgHeight)+'px">');
 }
 else{
 $('#EasyImg').html('<img src="World-Map.jpg" alt="you have a problem">');*/
jQuery(document).ready(function(){

    City();
    Count++;
    $(".Counts").html(Count);
    var GameInterval =  window.setInterval(function(){

        if(Count >=7)
        {

            FinishedGame();
            NowPlay=false;
            clearInterval(GameInterval);
            $(".Counts").html(Count);
        }
        else
        {  City();
            $(".Counts").html(Count);
            Count++;
            $(".Counts").html(Count);}

    }, 10500);
    var SecondsInterval;



    function FinishedGame(){
        CDown = false;
        Score=elPos.a;

        $(".FinishedGame").html("<span  class='FinishGame' ></span>");



        if(Score>740)
        {
            WaitTime = 3000;
            setTimeout(function(){
                $("#FinishedGame").html("<h1 class='FinishGameEXL'></h1>");
                setTimeout(function(){
                    $(".FinishGameEXL").html("<div class='ChangeOp'><header class='Finish'>Awesome!!</header> "+
                        "<header class='Sub'>No one died! the aliens wont come anymore!</header>" +
                        "<div class='Box'></div> <img src='StarPlace.png' class='StarPlace1' width= '10%' ><img src='StarPlace.png'  class='StarPlace2' width='10%'><img src='StarPlace.png' class='StarPlace3' width='10%'></div>" +
                        "<img src='Star.png'  width='10%' class='Star1' >");
                    setTimeout(function(){$("#StarClass2").html("<img src='Star.png'  width='10%' class='Star2' > ");},1500);
                    setTimeout(function(){$("#StarClass3").html("<img src='Star.png'  width='10%' class='Star3' > ");},3000);
                },2000);
            },2000);




        }
        else if(Score>630){
            WaitTime = 1500;

            setTimeout(function(){
                $("#FinishedGame").html("<h1 class='FinishGameGood'></h1>");
                setTimeout(function(){
                    $(".FinishGameGood").html("<div class='ChangeOp'><header class='Finish'>Good Job!</header>" +
                        "<header class='Sub'>more than 3/4 citizens were recovered!</header>" +
                        "<div class='Box'></div> <img src='StarPlace.png' class='StarPlace1' width= '10%' ><img src='StarPlace.png'  class='StarPlace2' width='10%'><img src='StarPlace.png' class='StarPlace3' width='10%'></div>" +
                        "<img src='Star.png'  width='10%' class='Star1' >");
                    setTimeout(function(){$("#StarClass2").html("<img src='Star.png'  width='10%' class='Star2' > ");},1500);
                },2000);
            },2000);


        }
        else if (Score>300){

            setTimeout(function(){
                $("#FinishedGame").html("<h1 class='FinishGameOK'></h1>");
                setTimeout(function(){
                    $(".FinishGameOK").html("<div class='ChangeOp'><header class='Finish'>Hmmmmm.....</header>" +
                        "<header class='Sub'>Half of the citizens were recovered by you but the other half is dead...</header>" +
                        "<div class='Box'></div> <img src='StarPlace.png' class='StarPlace1' width= '10%' ><img src='StarPlace.png'  class='StarPlace2' width='10%'><img src='StarPlace.png' class='StarPlace3' width='10%'></div>" +
                        "<img src='Star.png'  width='10%' class='Star1' >");

                },2000);
            },2000);

        }
        else if(TotalTimesClicked<5)
        {

            setTimeout(function(){
                $("#FinishedGame").html("<h1 class='FinishGameNoClick'></h1>");
                setTimeout(function(){
                    $(".FinishGameNoClick").html("<div class='ChangeOp'><header class='Finish'>Shame On You!!</header>" +
                        "<header class='Sub'>You didnt try even to recover all the citzens!</header>" +
                        "<div class='Box'></div> <img src='StarPlace.png' class='StarPlace1' width= '10%' ><img src='StarPlace.png'  class='StarPlace2' width='10%'><img src='StarPlace.png' class='StarPlace3' width='10%'></div>");

                },2000);
            },2000);

        }
        else{

            setTimeout(function(){
                $("#FinishedGame").html("<h1 class='FinishGameBad'></h1>");
                setTimeout(function(){

                    $(".FinishGameBad").html("<div class='ChangeOp'><header class='Finish'>Horrible!</header>" +
                        "<header class='Sub'></header>" +
                        "<div class='Box' style='background-color: gray'></div> <img src='StarPlace.png' class='StarPlace1' width= '10%' ><img src='StarPlace.png'  class='StarPlace2' width='10%'><img src='StarPlace.png' class='StarPlace3' width='10%'></div>");
                    if(false)
                        $("header.Sub").html("all the big cities were destroyed or half destoryed!<br> <br>The blud comes like water!");
                    else
                        $("header.Sub").html("more than half of the citizens were killed!");
                },2000);
            },2000);
        }
        setTimeout(function(){
            $("#BackToGame").html("<div class='ChangeOp'><a href='index.html'><span class='BackToGame'>Back to Menu</span></a></div>");
            setTimeout(function(){

            $("#ScoresAfterGame").addClass("ScoreAlertInStars");
            var ScoresAlert = setInterval(function(){
                if(p<=Score)
                {$("#ScoresAfterGame").html(p);
                p++;}
                else{
                clearInterval(ScoresAlert);
                if(Score >680)
                    $("#ScoresAfterGame").removeClass("ScoreAlertInStars").addClass("ScoreAlertInStarsShadow")

                }
             },6);
        },1500);
        },WaitTime+4000);

    }



    function City() {
OnePausePerRoundDone = false, CountDownReadyForAlerting= false;
        $("#HeaderAfterWrite,#HeaderWrite").html("");
        $("#HeaderFont").removeClass("HeaderFont").addClass("HeaderFontShadow");
        elPos.z = false;
        AlertTime = false;
        NowPlay = true
        elPos.x = 0;
        CDown = true;
        elPos.y=0;
        First =true;
        $("#WantedPlace").html("");
        CountDown();
        var Random1 = Math.floor((Math.random() * 3) + 1);
        var Random2 = Math.floor((Math.random() *7) +1);
        var RandomPlace = Random1+Random2;
        elPos.r = RandomPlace;
        if(Recovered[RandomPlace]||!Places[RandomPlace]){

            SwitchPlace(RandomPlace);

            if(Recovered[RandomPlace])
                $('#HeaderFont').html("The aliens are attacking " + Place+" again");
            else
                $('#HeaderFont').html("The aliens are attacking " + Place);
            Places[RandomPlace] = true;

            setTimeout(function () {
                if(AlertScoresAuto && CountDownReadyForAlerting){
                 //   AddedScoreFirstTime = false;
                    AlertScores(RandomPlace);
                    LastSecondBeforeAlertingScore = false;
                    clearInterval(SecondsInterval);
                }
            },7500);


        /*    setTimeout(function () {
                if (ContinueReplaying.bool){


                }
            }, 10499);*/
        }
        else City();
    }



    function AlertScores(RandomPlace) {

        if(AlertScoresAuto){
        CDown = false;
AlertTime = true;
        ImageClicked = elPos.z;

     //   if(!AddedScoreFirstTime)
         XYScore = ScoreMulti();
    if(AlertScoresAuto){

          if (!ImageClicked) {
             $("#HeaderFont").html("<!--alertScores-->No one helped "+Place+", all the people were killed");
              AlertTimeWriting = "No one helped "+Place+", all the people were killed";
             TotalTimesClicked--;
           }
               else if (XYScore > 69)
           {
             $("#HeaderFont").html(/*alertScores*/"<!--alertScores-->Youv'e succesfuly recover the city "+Place);
              AlertTimeWriting = "Youv'e succesfuly recover the city "+Place;
              Recovered[RandomPlace] = true;
           }

         else if (XYScore > 39){

            $("#HeaderFont").html(/*alertScores*/"<!--alertScores-->half of the city "+Place+" was recovered");
            AlertTimeWriting = "half of the city "+Place+" was recovered";
            Recovered[RandomPlace] = true;
            }

                else {

            $("#HeaderFont").html(/*alertScores*/ Place+"<!--alertScores-->is fully dstroyed now!");
            AlertTimeWriting = Place+" is fully dstroyed now!";

              }
              // AddedScoreFirstTime = true;
             $("#HeaderFont").removeClass("HeaderFontShadow").addClass("HeaderFont");
             }
        }
    }



    function CountDown(){

            if(First)
            {
                var startDatum=new Date();
                First = false;
                date.a = startDatum;
                bye = 7.3;
            }
            if(bye > 0 && CDown){
                var zielDatum=new Date();
                bye =Math.abs(Math.floor(( ((zielDatum-7300-date.a)/1000) - 0.1)*10)/10);
                if(bye <=1)
                LastSecondBeforeAlertingScore = true;
                if(bye <= 0.5)
                CountDownReadyForAlerting = true;
                if ( bye * 10 % 10 ==0)

                    $(".CountDown").html(bye+".0");
                else
                    $(".CountDown").html(bye);
                setTimeout(function(){CountDown()},20);

            }
else
            {           $(".CountDown").html("0.0");
             LastSecondBeforeAlertingScore = false;
            }
    }


    function SwitchPlace(RandomPlace) {


        switch(RandomPlace){
            case 1:
                Place = "Berlin";
                WantedYPr = 790;
                WantedXPr = 4300;

                break;
            case 2:
                Place="New York";
                WantedYPr=1061;
                WantedXPr = 2345;

                break;
            case 3:
                Place="barcelona";
                WantedYPr=1049;
                WantedXPr = 4046;

                break;
            case 4:
                Place="Johannesburg";
                WantedYPr=2546;
                WantedXPr = 4618;

                break;
            case 5:
                Place="shanghai";
                WantedYPr=1272;
                WantedXPr = 6664;

                break;
            case 6:
                Place="Moskau";
                WantedYPr=732;
                WantedXPr = 4800;

                break;
            case 7:
                Place="cairo";
                WantedYPr= 1310;
                WantedXPr = 4690;

                break;
            case 8:
                Place="Delhi";
                WantedYPr=1323;
                WantedXPr = 5707;

                break;
            case 9:
                Place="rio de genero";
                WantedYPr=2478;
                WantedXPr = 3050;

                break;
            case 10:
                Place="Tokyo";
                WantedYPr=1180;
                WantedXPr = 7102;

                break;
        }
        XYScore = 0;

        return (WantedXPr*1000)+WantedYPr;
    }



    $("body").click(function(Event){

        if(NowPlay){
            if(Event.pageY <= HeaderHeight && !OnePausePerRoundDone && PausesPerPlay<4 && !LastSecondBeforeAlertingScore)
            {Pause();
                PausesPerPlay++;}
            else if (!AlertTime && Event.pageY > HeaderHeight){
                TouchedX = Event.pageX;
                TouchedY = Event.pageY;
if(!FirstClickToResumeInAlertTime){
                if(WinHeight> 1000 && WinWidth > 1200)
                    $("#WantedPlace").html("<img src='Target.png' style=' width: 30px; height: 30px; font-size: 150%;z-index: 1000; position: fixed; left:"+(TouchedX-15)+"px; top: "+(TouchedY-15)+"px;' >");
                else
                    $("#WantedPlace").html("<img src='Target.png' style=' width: 16px; height: 16px; font-size: 150%;z-index: 1000; position: fixed; left:"+(TouchedX-8)+"px; top: "+(TouchedY-8)+"px;' >");
}



                elPos.x = TouchedX;
                elPos.y = TouchedY;
                elPos.z = true;
            }
        }
    });



    function ScoreMulti(){

        TouchedX = elPos.x;
        TouchedY = elPos.y;
        var RealWantedX = Scale * WantedXPr;
        var RealWantedY = HeaderHeight + (Scale * WantedYPr);

        XDistance =RealWantedX-TouchedX;
        YDistance =RealWantedY-TouchedY;
        TotalDistanceX +=XDistance;
        TotalDistanceY +=YDistance;
        XDistance = Math.abs(XDistance);
        YDistance =  Math.abs(YDistance);


        XDistance = XDistance * 0.7;
        YDistance = YDistance * 0.7;

        XDistance = 50 - XDistance;
        YDistance = 50 - YDistance;

        XYScore= XDistance+YDistance;

        if  (XYScore < 0 || isNaN(XYScore)){
            XYScore = 0}
        XYScore = Math.round(XYScore);
        Score +=XYScore;
        $("#x2").html(Score);
        elPos.a=Score;
        return XYScore;
    }



    function Pause(){
LastSecondBeforeAlertingScore = false;
        ContinueReplaying.bool = false, CDown = false, ContinueGameNow.bool = false, FirstClickToResumeInAlertTime = true, OnePausePerRoundDone = true;
        AlertScoresAuto = false;
        clearInterval(GameInterval), clearInterval(SecondsInterval);
        $('#HeaderWrite, #HeaderAfterWrite, #x2, #Place, .CountDown, #WantedPlace, #HeaderFont').html("");
        $('#Pause').html("<section class='Pause'><div class='PauseHeader'>Pause</div></section><div class='Resume' id ='ResumeButton'>Resume</div><div class='ReplayGame' id ='ReplayButton'>Replay</div><a href='index.html'class='BackToMenu' style='width: 35%; left: 31.5%'>Back To Menu</a>");
        NowPlay=false;

        $("#ResumeButton").click(function(){

            Resume();
        });
        $("#ReplayButton").click(function(){

            Replay();
        });
    }


    function Resume(){
        $("#x2").html(Score);
            $("#Pause").html("");
                $(".CountDown").html("0.0");
                var RandomPlace = elPos.r;
        if(AlertTime)
        $("#HeaderFont").html(AlertTimeWriting+"<!--string->");

        else
        {
            AlertScoresAuto = true;
            AlertScores(RandomPlace);
            }
        setTimeout(function(){FirstClickToResumeInAlertTime = false},20);
        NowPlay = true;
                setTimeout(function(){
                    ResumeCity();
                    $("#HeaderFont").removeClass("HeaderFont").addClass("HeaderFontShadow");
                    $("#HeaderAfterWrite,#HeaderWrite").html("");
                },3000);
    }


    function ResumeCity(){
        CDown = true;
elPos.z = false;
        City();
Count++;
        setTimeout(function(){AlertScoresAuto = true;},7498);
        setTimeout(function(){ContinueReplaying.bool = true;},10496);

        GameInterval= window.setInterval(function(){

            if(Count >=7)
            {

                FinishedGame();
                NowPlay=false;
                clearInterval(GameInterval);

            }
            else
            {  $("#x2").html(Score);
                City();
                Count++;}

        }, 10500);
    }

    function Replay(){
        AlertTime = false;
        Count = 0;
        AfterPauseRePlay = true;
        $("#x2").html(Score);
        $("#Pause").html("");
        $(".CountDown").html("0.0");
        NowPlay = true;
        ResumeCity();
    }

});


/*Ø Distance Y: "+TotalDistanceY/7+" px | Ø Distance X: "+TotalDistanceY/7+" px | Total Distance of Y: "+TotalDistanceY+" px | Total Distance of X: "+TotalDistanceX+" px" + "<br> Ø Score: "+Score/7*/
/*        $('#Resume').html("<div class='ResumeCountDown'>3</div>");
 setTimeout(function(){
 $('#Resume').html("<div class='ResumeCountDown'>2</div>");

 },1000)
 setTimeout(function(){$('#Resume').html("<div class='ResumeCountDown'>1</div>");

 },2000)*/