$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    $(".person1").append(person1Input);
    $(".person2").append("blah blah");
    $(".animal").append("blah blah");
    $(".exclamation").append("blah blah");
    $(".verb").append("blah blah");
    $(".noun").append("blah blah");

    $("#story").show();
     event.preventDefault();
  });
});
