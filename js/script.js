
function handleGetData(event){
    event.preventDefault();
    
    const cityName = $("#city").val()
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=99df413c60279878184277e08a2c6863`)
    .then(
        (data) => {
            console.log(data);
            $("#name").text(data.name)
            $("#temp").text(data.temp)
            $("#feels").text(data.feels_like)
            $("#weather").text(data.weather)
            
        },
        (error) => {
            console.log("bad request: ", error)
        }
        )
        console.log("It's working!")
}
$('form').on("submit", handleGetData)

