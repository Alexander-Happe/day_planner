
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var milTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
var newRow = $("<div>").attr("class", "row")
var moment = moment().format('dddd, MMMM Do YYYY');
//function colorChange(){
    //var currentHour = moment().hour()
    //console.log(currentHour)
//}
//I can't get moment to work for me more than the one time
//I was going to use a military hour to determine the class and therefor color of the textareas
colorChange
function addDate(){
    var dateTime = $("<h2>")
        .attr("class", "head headbottom")
        .text("Todays date is: " + moment)
    $(".heading").append(dateTime)

}
addDate()
function makeTable(){
    for(i=0;i<hours.length;i++){
        var hrCol = $("<div>")
            .attr("class", "col-2 mt-4 time-block time")
            .text(hours[i]);
        var textCol = $("<input>")
            .attr("class", "col-8 first entertext e9 inputArea")
            .attr("id", milTime[i])
            .attr("type", "text")
            .attr("value", localStorage.getItem(hours[i]))
        var newDiv = $("<div>")
            .attr("id", hours[i] + "div")
        var bttn = $("<input>")
            .attr("class", "col-1 saveBtn fa fa-calendar-check-ob9 sbmBttn")
            .attr("type", "submit")
            .attr("id", hours[i] + "bttn")
            .attr("value", "+")
        newRow.append(hrCol, textCol, newDiv, bttn)
        $(".container").append(newRow)
    }
}
makeTable()
$("#9ambttn").on("click", function(event){
    var valuebttn = $("#9").val()
    event.preventDefault();
    localStorage.removeItem("9am")
    localStorage.setItem("9am", valuebttn)
})
$("#10ambttn").on("click", function(event){
    var valuebttn = $("#10").val()
    event.preventDefault();
    localStorage.removeItem("10am")
    localStorage.setItem("10am", valuebttn)
})
$("#11ambttn").on("click", function(event){
    var valuebttn = $("#11").val()
    event.preventDefault();
    localStorage.removeItem("11am")
    localStorage.setItem("11am", valuebttn)
})
$("#12pmbttn").on("click", function(event){
    var valuebttn = $("#12").val()
    event.preventDefault();
    localStorage.removeItem("12pm")
    localStorage.setItem("12pm", valuebttn)
})
$("#1pmbttn").on("click", function(event){
    var valuebttn = $("#13").val()
    event.preventDefault();
    localStorage.removeItem("1pm")
    localStorage.setItem("1pm", valuebttn)
})
$("#2pmbttn").on("click", function(event){
    var valuebttn = $("#14").val()
    event.preventDefault();
    localStorage.removeItem("2pm")
    localStorage.setItem("2pm", valuebttn)
})
$("#3pmbttn").on("click", function(event){
    var valuebttn = $("#15").val()
    event.preventDefault();
    localStorage.removeItem("3pm")
    localStorage.setItem("3pm", valuebttn)
})
$("#4pmbttn").on("click", function(event){
    var valuebttn = $("#16").val()
    event.preventDefault();
    localStorage.removeItem("4pm")
    localStorage.setItem("4pm", valuebttn)
})
$("#5pmbttn").on("click", function(event){
    var valuebttn = $("#17").val()
    event.preventDefault();
    localStorage.removeItem("5pm")
    localStorage.setItem("5pm", valuebttn)
})

