//Initial Array of Politicians
var topics = ["Elizabeth Warren", "Joe Biden", "Cory Booker", "Kamala Harris", "Pete Buttigieg", "Bill de Blasio", "Julian Castro", "Bernie Sanders"];
for (var j = 0; j < topics.length; j++){

}

politicianButtons();

 // Function for displaying buttons
 function politicianButtons() {
    $("#gifButtons").empty();
    for (var i = 0; i < topics.length; i++){
        $("#gifButtons").append("<button class='btn btn-info m-2 topicButton' data-person='" + topics[i] + "'>" + topics[i] + "</button>");
      }
};


//function display Gifs
  $(document).on("click",".topicButton", function(){
      $("#gifDisplay").empty();
    var politician = $(this).attr("data-person");
    console.log(politician);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + politician + "&api_key=uCO577Cm4JScLTXEm3bCjg2b636mQ8dq&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        for(var i = 0; i < response.data.length; i++){
    
        $("#gifDisplay").append("<p>" + response.data[i].rating + "</p>")
        $("#gifDisplay").append("<img src =" + response.data[i].images.fixed_height.url + "</img>")
        }
    });
  });  

//function to add a new politican to the buttons after typing it in the input box
  $("#addButton").on("click", function(event) {
    event.preventDefault();
    var gif = $("input").val().trim();
    topics.push(gif);
    politicianButtons();
    return false;
  });