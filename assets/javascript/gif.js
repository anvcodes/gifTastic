

var queryURL = "https://api.giphy.com/v1/gifs/random?tag=cat&api_key=PHu3NIFQrteKkNpB3YUk619JaCDjYJzw";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});