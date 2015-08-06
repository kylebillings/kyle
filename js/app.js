$(document).ready(function() {
  var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=kylebillings&api_key=baa058997d36363f5406bfdbc0e4da25&format=json";
  $.getJSON(url, function(data) {
    var artist = data.recenttracks.track[0].artist["#text"];
    var song = data.recenttracks.track[0]["name"];
    var cover = data.recenttracks.track[0].image[3]["#text"];
    
    $('.track').html("\
      <strong>"+artist+"</strong><br />\
      "+song+"\
    ");
    if (cover == "") {
      cover = "http://upload.wikimedia.org/wikipedia/commons/d/d7/No_Cover_.jpg";
    }
    $('.cover').css("background-image", "url("+cover+")");
    //alert(data.recenttracks.track[1].artist["#text"]);
  });  
});
