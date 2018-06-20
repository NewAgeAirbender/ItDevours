// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-done").on("click", function(event) {
      var id = $(this).data("id");
      var newDone = $(this).data("newdone");
  
      var newDoneState = {
        done: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newDoneState
      }).then(
        function() {
          console.log("changed done to", newDone);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBook = {
        title: $("#ca").val().trim(),
        done: $("[name=done]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/books", {
        type: "POST",
        data: newBook
      }).then(
        function() {
          console.log("created new book");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-book").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/book/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted book", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  