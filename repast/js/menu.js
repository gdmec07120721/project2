var links_len;
window.onload=function(){
	var links = document.getElementById("menu_nav").getElementsByTagName('li');
	links_len=links.length;
	
	for(var i=1; i<=links_len; i++){
		var menu = document.getElementById("day"+i);
		var menudiv = document.getElementById("data"+i);
		if(i==1){
			menu.className="day";
			menudiv.style.display="block";
		}
		else{
			menu.className="";
			menudiv.style.display="none";
		}
	}
}


function day(num){
	var num=num;
	for(var i=1; i<=links_len; i++){
		var menu = document.getElementById("day"+i);
		var menudiv = document.getElementById("data"+i);
		if(i==num){
			menu.className="day";
			menudiv.style.display="block";
		}
		else{
			menu.className="";
			menudiv.style.display="none";
		}
	}
}

function mousemove(){
		var user_box = document.getElementById("user_box");
		user_box.style.display="block";
		
}
function mouseout(){
		var user_box = document.getElementById("user_box");
		user_box.style.display="none";

}