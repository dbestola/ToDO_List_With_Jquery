// key features
// $(selector).action

$(document).ready(function() {
  $("body").addClass("light-mode")

  $("#toggle-mode").click(function () {
 
    $("body").toggleClass("light-mode dark-mode")
    
  })


  $("#add-task").click( function () {
    const taskText = $('#new-task').val()
    // console.log(taskText);

    if (taskText !== "") {
        $('#task-list').append(`<li> ${taskText}  <button class="Remove-btn"> Remove </button> </li>`)
        $('#new-task').val("") 
    } else {
        alert('filed cannot be empty')
    }
  })  

  $('#task-list').on("click", ".Remove-btn", function() {
    $(this).parent().remove();    
  } )

}

)



