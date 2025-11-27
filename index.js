$('h1').addClass("big-title margin-50");
// adding class
$('h1').hasClass('margin-50')

$("h1").attr("class"); 
//querying for class

$("h1").text("Bye");
//manipualting text

$('img').attr('src', 'cow.png');

$('a').attr('href', 'https://www.bing.com');

//manipulating attributes

$("h1").click(function() {
    $("h1").css("color", "red")
    });
    
//event listener

$("button").click(function () {
    $("h1").css("color", "purple");
  });


$("input").keydown (function(event) {
    console.log(event.key);
    });
// logs all keys when input is clicked
$(document).keydown(function(event) {
    $("h1").text(event.key);
});

//replaces h1 when a key is clicked anywhere on the WHOLE document 

$("h1").on("click", function() {
    $("h1").css("color", "purple");
    });
//changes in colour whenever h1 is clicked

$("h1").before("<button>one</button>");
//adds an element before h1
$("h1").after("<button>one</button>");
//adds an element after h1
$("h1").prepend("<button>one</button>");
//adds an element inside the h1, just after opening tag
$("h1").append("<button>one</button>");
//adds an element inside the h1, just before the end of the closing tag (and after the content e.g. "hello world")
//Remove element
$("h1").remove();
//removes element
