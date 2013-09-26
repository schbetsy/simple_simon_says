
function add_color(){
  $.post('/color',function (response) {
    var cell_selector = '#color_me li:nth-child('+response.cell+')';
    $(cell_selector).css('background-color', response.color);
  });
}

$(document).ready(function(){
  $('#get_color').on('click', add_color);
});
