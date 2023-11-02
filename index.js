$( document ).ready(function() {
    console.log( "ready!" );
    });

    $(document).ready(function(){
        $('go').click(function() {
            var firstName = $('#fname').val();
            var lastName = $('#lname').val();

            alert('Hello, ' + firstName + ' ' + lastName + '!');

            return false;
        });
    });

    $( document ).ready(function() {
        $("#go").click(function(){
            var fullName = $("#fname").val() + " " + $("#lname").val();
            $("#jumbotron").text(fullName);
            return false;
        });
    });
