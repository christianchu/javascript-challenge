// from data.js
var tableData = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// YOUR CODE HERE!
console.log(tableData);

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Loop Through `tableData` and console.log each ufo sighting object
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
  });

// Use d3 to update each cell's text with
// ufo report values (datetime, city, state, country, shape, durationMinutes, comments)
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    });
});

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Print the value to the console
    console.log(inputValue);
    // Set the span tag in the h1 element to the text
    // that was entered in the form
    d3.select("h1>span").text(inputValue);
  }
  