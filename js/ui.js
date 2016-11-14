var gogColor = document.getElementById('h1-GOG').style.color;
var gogNewColor = "red";
var aGog = document.getElementById('a-GOG');

aGog.onmouseover = function(){document.getElementById('h1-GOG').style.color = gogNewColor}
aGog.onmouseout = function(){document.getElementById('h1-GOG').style.color = gogColor}

var menuItemBG;
$(document).ready(function(){
  menuItemBG = $('.navbar.navbar-inverse').css('background');
}); 
$('#navbar a').hover(function(){
  $(this).css('background','#151E8C');
  },
  function(){
    $(this).css('background', menuItemBG);
  }
);

var dropMenuItemBG;
$(document).ready(function(){
  dropMenuItemBG = $('.dropdown-menu').css('background');
}); 
$('.dropdown-menu a').hover(function(){
  $(this).css('background','#151E8C');
  },
  function(){
    $(this).css('background', dropMenuItemBG);
  }
);


function initMap() {
        var uluru = {lat: 44.791525, lng: 20.489902};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}

w3IncludeHTML();

function slider() {
  $(".slider #1").show("fade", 500);
  $(".slider #1").delay(5500).hide("slide",{direction: 'left'}, 500);

  var sc = $(".slider img").size();
  var count=2;

  setInterval(function(){
    $(".slider #"+count).show("fade",{direction: 'right'}, 500);
    $(".slider #"+count).delay(5500).hide("slide",{direction: 'left'}, 500);

    if(count==sc){
      count=1;
    }else{
      count=count+1;
    }
  }, 6500);
}

$(function() {
  $("#datepicker").datepicker();
});

