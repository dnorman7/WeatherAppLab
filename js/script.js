console.log("It's working!")

function handleGetData(event){
  event.preventDefault();
  // Load in the value of the search textbox:
  const searchText = $("#cityname").val()
  $.ajax({url: `api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=99df413c60279878184277e08a2c6863`})
    .then(
      (data) => {
        console.log(data);
        $("#weatherFor").text(data.Weatherfor)
        $("temperature").text(data.Temperature)
        $("feelsLike").text(data.FeelsLike)
        $("weather").text(data.Weather)
        
      },
      (error) => {
        console.log("bad request: ", error)
      }
    )
}
$('form').on("submit", handleGetData)

