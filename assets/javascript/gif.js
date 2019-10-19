
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


      var catGif= response.data[i].images.original.url;
       var gif = $(".gifDisplay").attr("src", catGif);
       $(".gifDisplay").append(gif);

     

    });

    

  });

  $("#search-button").on("click", function(){


    var searchInput = $("<input>", this).val().trim();
   var newBtn=  $("<button>").text(searchInput);
   $(".btns").append(newBtn);
  })
           // for (var i = 0; i < output.length; i++) {
  
              // Only taking action if the photo has an appropriate rating
              //if (output[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div for the gif
               // var gifDiv = $("<div>");
  
                // Storing the result item's rating
                //var rating = results[i].rating;
  
                // Creating a paragraph tag with the result item's rating
               // var p = $("<p>").text("Rating: " + rating);
  
                // Creating an image tag
               // var personImage = $("<img>");
  
                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
               // personImage.attr("src", results[i].images.fixed_height.url);
  
                // Appending the paragraph and personImage we created to the "gifDiv" div we created
               // gifDiv.append(p);
               // gifDiv.append(personImage);
  
                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              //  $("#gifs-appear-here").prepend(gifDiv);
           // }
         // }
        
    