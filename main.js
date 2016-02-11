$(function(){
	var run = true;
	const fps = 1000/30;

	window.onload = function(){
		$('body').keypress(function(e){
			if(e.which == 13){
				run = false;
				return false;
			}
		});
		alert($("div:first").outerHeight());
		//再帰呼び出し
		(function(){
			//
			if(run){ setTimeout(arguments.callee,fps); }
		})();
	};

});
