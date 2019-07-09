//Initial Array of Politicians
var topics = ["Elizabeth Warren", "Joe Biden", "Cory Booker", "Kamala Harris", "Pete Buttigieg", "Bill de Blasio", "Julian Castro", "Bernie Sanders"];

//Function to  allow html display gifs and rating
    
    var politician = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + politician + "&api_key=uCO577Cm4JScLTXEm3bCjg2b636mQ8dq&limit=10";

    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    console.log(response);
    });
