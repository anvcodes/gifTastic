
        // In this case, the "this" keyword refers to the button that was clicked
        var topics= ["cat", "dog", "bunny", "hamster"];
        var apiKey= "api_key=GQZjN6CrGW0gHa27wPKmPXrqbmyBGdEM";
        var newInputBtn= 0;
    


    $(".btn-sm").on("click", function(){
      var pressedBtn= $(this).val().trim();

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + pressedBtn + apiKey;

      $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
      var data= response.data[0];
      for(var i = 0; i < data.length; i ++){


       

      };
      
      console.log(response.data[i].images.original.url);


      var clickedGif= response.data[i].images.original.url;
       var gif = $(".gifDisplay").attr("src", clickedGif);
       $(".gifDisplay").append(gif);

     

    });

    

  });

  $("#search-button").on("click", function(){


    var searchInput = $("#input").val().trim();
   var newBtn=  $("<button>").text(searchInput);
   $(".btns").append(newBtn);


   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchInput + "&" + apiKey;
  
   $.ajax({
    url: queryURL,
    method: "GET"
    
}).then(function(response) {
  var data= response.data[0];
  for(var i = 0; i < data.length; i ++){
  }

  var newGif= response.data[i].images.original.url;

  var gif = $(".gifDisplay").attr("src", newGif);
  $(".gifDisplay").append(gif);



});

  });
          
    