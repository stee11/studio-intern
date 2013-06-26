// Main app object
function App() {
  // initialization
  this.start = function() {
    this.poll();
  }
  // polling function
  this.poll = function() {
    //console.log(this)

    setTimeout(_.bind(function(){
      //console.log(this)


      $.ajax({
        url: "http://localhost:8000/api/number",
        success: _.bind(function(data) {
          this.render(data.data)
        }, this),
        complete: _.bind(function(){
          //console.log(this)
          this.poll()
        }, this)
       })
    }, this), 1000);
    /*
    ~ Use _.bind to run a setTimeout to run poll on an interval
    ~ Use $.ajax to run the ajax requests to your new route
    ~ Make sure to utilze the success function to render the number 
      and the complete function to rerun the poll
    ~ Do not use setInterval
    */
  }
  // rendering function
  this.render = function(response) {
    $('#target').text("");
    $('#target').text(response);
  }
}
