function getRandomColor() {
  $.ajax({
    method: 'GET',
    url: "http://www.colr.org/json/color/random",
    dataType: 'json'
  }).done(function(data) {
    let color   = data.colors[0].hex
    let letter  = Math.floor(Math.random() * 9)
    $(".coloring").eq(letter).css("background-color", "#"+color)
  });
}

$('.clickrandom').on('click', getRandomColor)
