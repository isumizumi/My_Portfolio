//Source code from repo:
//
// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     console.log("WAT")
//     $('.dice').append('<div class="die">0</div>')
//   })
//
//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1)
//       $(die).text(value)
//     })
//   })
// })

//REFACTOR:
function addDice() {
  $('.dice').append('<div class="die">0</div>')
}

function rollDice() {
  $('.die').each(function (k, die) {
    let value = Math.floor((Math.random() * 6) + 1)
    $('.die').text(value)
  })
}
