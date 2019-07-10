//Initial Array of Politicians
var topics = ["Elizabeth+Warren", "Mitch McConnell", "Joe Biden", "Cory Booker", "Kamala Harris", "Pete Buttigieg", "Lindsey Graham", "Bernie Sanders"];

 // Function for displaying buttons that first clears the div holding the buttons, then re-adds what is in the topic array
 function politicianButtons() {
    $("#gifButtons").empty();
    for (var i = 0; i < topics.length; i++){
        $("#gifButtons").append("<button class='btn btn-info m-2 topicButton' data-person='" + topics[i] + "'>" + topics[i] + "</button>");
      }
};

//function to add a new politican to the buttons after typing it in the input box
$("#addButton").on("click", function(event) {
  event.preventDefault();
  var gif = $("input").val().trim();
  topics.push(gif);
  politicianButtons();
  return false;
});


//function display Gifs when clicking the button
  $(document).on("click",".topicButton", function(){
      $("#gifDisplay").empty();
    var politician = $(this).attr("data-person");
    console.log(politician);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + politician + "&api_key=uCO577Cm4JScLTXEm3bCjg2b636mQ8dq&limit=10";
    console.log(queryURL);

    //Ajax call for Giphy API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        //loop to get gifs for each politician
        for(var i = 0; i < response.data.length; i++){

        //variables needed for still and animated gifs
        var still = response.data[i].images.fixed_height_still.url;
        var animate = response.data[i].images.fixed_height.url;
        
        //display gifs in their still version, but add attributes for the animated version and for the ability of the next function to switch between the two
        $("#gifDisplay").append("<img src ='" + still + "' data-still='" + still + "' data-animate='" + animate + "' data-state='still' class='changeState'></img>")
        
        //display the gif ratings
        $("#gifDisplay").append("<p><strong>Rating: " + response.data[i].rating + "</strong></p>")
        }
    });
  }); 


  
//function to pause/play gif by clicking on the gif
$(document).on("click",".changeState", function() {
  
  //create variable to hold the gif's data-state
  var state = $(this).attr("data-state");

  //if the data-state is still the when you click it change the source to the animated version and change the data-state to animate and vice versa
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});  


// Immediately display the pre-set politican buttons
politicianButtons();