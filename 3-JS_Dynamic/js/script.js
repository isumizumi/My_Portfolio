// Define button onlick jquery

$(".create").on("click", createNew)
$("#results").on("click", ".complete", done)
$("#results").on("click", ".delete", del)

function createNew() {
  $('#results').append("<li class='result' draggable='true'><header>" + $('.todolist').val() + "</header><br> <button class='complete'>Complete</button><button class='delete'>Delete</button> </li>")
  $('.todolist').val('')
}

function done() {
  $(this).parent('li.result').addClass("done")
}

function del() {
  $(this).parent('li.result').remove()
}
