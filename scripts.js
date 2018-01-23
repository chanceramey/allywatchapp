$(document).ready(function() {
    $("#show-survey").click(function() {
        $("#survey").attr("display", "inline")
        console.log("displaying survey")
    });


    $("#submit").click(function(){
        console.log("form submitted")
        var form = $("#contact-form")
        console.log(form)
        var formData = $(form).serialize()
        console.log(formData)
        $(form).attr("visibility", "hidden")
        $("#thankYouMessage").attr("display", "inline")

        // return $.ajax({
        //     type: "POST",
        //     url: "mailer.php",
        //     data: formData,
        //   });

    })
});