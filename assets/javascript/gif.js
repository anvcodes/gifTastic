
        // In this case, the "this" keyword refers to the button that was clicked
       

    
        var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=PHu3NIFQrteKkNpB3YUk619JaCDjYJzw&limit=cat&rating=G";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    
   results= response.data;
    console.log(response);

    console.log(response.data);

    console.log(response.data["9"]);

    console.log(results["9"].images["480w_still"]);

    
  


    $(".btn-sm").on("click", function(){

      var imageDisplay = (results[9].images.original.url);


      $("#gifsHere").attr("src", imageDisplay);





    });

    

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
        
    