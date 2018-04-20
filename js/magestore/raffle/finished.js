document.observe('dom:loaded',function(){
	$$('.show-hide-tickets').each(function(el){
		el.observe('click',function(){
			var element = el.up().next();
			if(element.visible()){
				element.hide();
				el.update('show');
			}else{
				element.show();
				el.update('hide');
			}
		});
	});
});