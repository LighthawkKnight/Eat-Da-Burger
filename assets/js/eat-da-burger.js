$(doucment).ready(()=> {
    
    $('.devour-form').on("submit", (event) => {
        event.preventDefault();
        var burger_id = $(this).children(".btn").attr("data-id");
        
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        });

    });
});