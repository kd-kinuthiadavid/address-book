
//business logic 
function Contact(first, last){
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function(){
  return this.firstName + "" + this.lastName;
}




//user interface logic
$(document).ready(function(){
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputedFirsName = $("input#new-first-name").val();
    var inputedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputedFirsName, inputedLastName);

    $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fullName() +  "</span></li>");
    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);


    });

    $("input#new-first-name").val("");
    $("input#new-first-name").val("");

  });
});
