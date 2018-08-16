$(function() {
	// -- Верхнее меню
	//let navBtn = document.getElementById('navBtn');

	$('#navBtn').on('click touchstart', function() {
//alert('КЛИК');

console.log($('#navTopList').css('display'));


	});




/*
	 $('#navBtn').on('click touchstart', function() {
 		let navTopList = document.getElementById('navTopList');
 		let MunuSet = window.getComputedStyle(navTopList).display;
 		if (MunuSet == 'none'){
			navTopList.style.cssText="display: block";
		} else {
			navTopList.style.cssText="display: none";
		}

		let otladka = navBtn.classList.contains('topnav_btn-close');
		if(navBtn.classList.contains('topnav_btn-close')){
			navBtn.classList.remove('topnav_btn-close');
			navBtn.classList.add('topnav_btn-open');
		} else {
			navBtn.classList.remove('topnav_btn-open');
			navBtn.classList.add('topnav_btn-close');
		}
    });
*/
    // Кнопка вверх
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({opacity : .3}).fadeIn('slow');
            }
        } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
    });
    $('#upbutton').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 300);
    });

    $('#upbutton').hover(function() {
    	$('#upbutton').css({opacity : .8});
    }, function() {
    	$('#upbutton').css({opacity : .3});
    });

	/* - Блоки одной высоты -*/
    function someHight(itemClass){
        let item = document.querySelectorAll(itemClass);
        if(item.length>0){
            let hightItem = 0;
            for (let i = 0; i < item.length; i++) {
                if (hightItem < item[i].offsetHeight) hightItem = item[i].offsetHeight;
            }
            for (let i = 0; i < item.length; i++) {
                item[i].style.height = hightItem + 'px';
            }
        }
        //console.log(item.length);
    }

	/*Одинаковая высота - заголовки каталога -*/
    someHight('.catalog_title');
    /*Одинаковая высота - заголовки разделов на стр. списка элементов каталога -*/
		someHight('.section_elem-title');
		/*Подгружаем ссылки соц.сетей -*/
		$('.foot_soc-btn').click(function(){
			window.open($(this).data('link'));return false;
		});













});