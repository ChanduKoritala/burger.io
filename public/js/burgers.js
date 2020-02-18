$(function() {
    $(".form-group").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name : $("#bg").val().trim(),
            devoured: $("[name = burger_name]").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("New Burger created");
                location.reload();
            }
        )
    })
})

