var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var newRow = $("<div>").attr("class", "row")
function makeTable(){
    for(i=0;i<hours.length;i++){
        var hrCol = $("<div>")
            .attr("class", "col-2 mt-4 time-block")
            .text(hours[i]);
        var textCol = $("<input>")
            .attr("class", "col-8 first entertext e9")
            .attr("id", "userInput")
        var bttn = $("<input>")
            .attr("class", "col-1 saveBtn fa fa-calendar-check-ob9")
            .attr("type", "submit")
            .attr("id", "userInput")
            .attr("value", "+")
        newRow.append(hrCol, textCol, bttn)
        $(".container").append(newRow)
    }
}
makeTable()