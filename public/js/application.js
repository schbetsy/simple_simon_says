
function add_color(){
  console.log("clicked");
  $.post('/color',function (response) {
    console.log(response);
  });
}

$(document).ready(function(){
  $('#get_color').on('click', add_color);
});
