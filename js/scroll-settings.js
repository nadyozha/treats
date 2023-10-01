$(document).ready(function(){
	////подключение плагина для стилизации scroll
	Scrollbar.initAll(); 
		const scrollbar = Scrollbar.init(document.querySelector('.my-scrollbar'));
		function listener() {
			if(scrollbar.scrollTop > 70){
			  $('.header-first').addClass('header-first-active');
			} else{
			  $('.header-first').removeClass('header-first-active');
			}
		};
	scrollbar.addListener(listener);
});