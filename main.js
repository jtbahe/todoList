// check off specific todos by clicking
// when an li is clicked inside of an ul run the following code
$("ul").on('click', 'li', function(){
    $(this).toggleClass("completed");
  })
  
  // click on X to delete todo
  // when a span inside a ul is clicked run the code
  $("ul").on('click', 'span', function(event) {
    // this refers to the span
    $(this).parent().fadeOut(500, function() {
      // this refers to the li
      $(this).remove();
    });
    // stops bubbling up to parent elements
    event.stopPropagation();
  })
  
  // create a new todo
  $('input[type="text"]').keypress(function(event){
    //which refers to keycode, 13 is enter key 
    if(event.which === 13) {
      // grabbing new todo text from input
      let todoText = $(this).val()
      //create a new li and add to ul
      $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
      $(this).val("");
    }
  })
  
  $('.fa-plus').click(function() {
    $("input[type='text']").fadeToggle();
  })