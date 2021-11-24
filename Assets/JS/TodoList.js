$("ul").on("click", "li", function(){
	$(this).toggleClass("completedTodo");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todo =  $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todo + "</li>");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});
