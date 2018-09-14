var $=function(obj){return document.getElementById(obj);}
var pichold= $('pichold');
var piclimit= $('piclimit');         
var btnLeft= $('btn').getElementsByTagName('span')[0];
var btnRight=$('btn').getElementsByTagName('span')[1];
var btnjump= $('btnjump').getElementsByTagName('li');
var btnIndex=0;
var mark=false; //很关键的值,可以优化效果。即连续按钮切换时，不会紊乱，只能这个完成才进行下一个。
btnjump[0].style.background='rgba(0,0,0,0.7)';
function moveEvent(movepx){
	        mark=true;
	        var stop=parseInt(pichold.style.left)+movepx; 
	        //stop不能定义在moveSlow函数内部.否则会引起条件一直重置，而轮播也会一直进行下去。
	        var total=400;
            var interval=10;
            var speed=movepx/(total/interval);
	 function moveSlow(){
            if((speed<0)&&(parseInt(pichold.style.left)>stop)||(speed>0)&&(parseInt(pichold.style.left)<stop))
	        {   pichold.style.left=parseInt(pichold.style.left)+speed+'px';
	            setTimeout(moveSlow,interval);
	            }
	        else{mark=false;
	        	 if(parseInt(pichold.style.left)<-6745){
				 	 pichold.style.left=-1349+'px';
				 }
				 if(parseInt(pichold.style.left)>-1349){
				 	 pichold.style.left=-6745+'px';
				} 
	        }
	    }  
	moveSlow(); 
}
function btnEvent(){
	 for(var i=0;i<btnjump.length;i++){
	 	btnjump[i].style.background='rgba(0,0,0,0)';
	 	btnjump[i].style.width='10px';
	 	btnjump[i].style.height='10px';
	 }
     btnjump[btnIndex].style.background='rgba(255,255,255,1)';
	 btnjump[btnIndex].style.width='12px';
	 btnjump[btnIndex].style.height='12px';
}

var timer=setInterval(
	function(){
	  	btnRight.onclick()},2000)

btnRight.onclick=function(){
	 if(!mark){
	 	moveEvent(-1349);
	 	btnIndex++;
	 }
	 if(btnIndex==5){
	 	btnIndex=0;
	 }
	 btnEvent();
}
btnLeft.onclick=function(){
	 if(btnIndex==0){
	 	btnIndex=5;
	 }
	 if(!mark){
	 	moveEvent(1349);
	 	btnIndex--;
	 }
	 btnEvent();
}

for(var i=0;i<btnjump.length;i++){
	btnjump[i].onclick=function(){
		 var which=parseInt(this.getAttribute('index'));
		 if(!mark){
		 	moveEvent(1349*(btnIndex-which));
		 }
		 btnIndex=which;
		 btnEvent();
	}
}

  window.onload = function ()
	  {

            var oTab = document.getElementById("tab");
		    var aSpan = oTab.getElementsByTagName("span");
			var aDiv =  oTab.getElementsByTagName("div");
			
            function showButton(){
				for (var i = 0;i< buttons.length ; i++)
				{
					if (buttons[i].className == 'on')
				    {
						buttons[i].className = '';
				        break;
				    }
				}
				buttons[index - 1].className = 'on';
			  }

		    for(var i=0;i<aSpan.length;i++)
			 {
				 aSpan[i].index = i;
				 aSpan[i].onclick = function(){
					 for (var i=0;i<aSpan.length ;i++ )
					 {
						 aSpan[i].className ="";
						 aDiv[i].style.display="none";
					 }
					 this.className="active";
					 aDiv[this.index].style.display="block";
				 }
			 }
		 }