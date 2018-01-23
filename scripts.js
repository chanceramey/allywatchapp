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
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
    })
});