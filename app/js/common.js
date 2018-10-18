$(function() {

	if (document.getElementById('bx_1847241719_199')){
		let parentCat = document.getElementById('bx_1847241719_199');	
		let chaildCat = parentCat.getElementsByTagName('h3')[0];
		let sp = document.createElement('span');
		sp.className = 'oferTxt';
		sp.textContent = "Гарантия лучшей цены";
		parentCat.insertBefore(sp, chaildCat);
	}





	// -- Верхнее меню






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



	let modalShow=document.getElementById('modalShow');

	modalShow.onclick = function() {
		let modal = document.getElementById('modal');
		let modalTopBtn = document.getElementById('modalTopBtn');
		let modalBottomBtn = document.getElementById('modalBottomBtn');
		let modalWindow = document.getElementById('modalWindow');


		if(modal.classList.contains('modal-closed')){
			modal.classList.remove('modal-closed');
			modal.classList.add('modal-open');
			if(!modalWindow.classList.contains('modalUp')){
				modalWindow.classList.add('modalUp');
				}			
			}


		modalTopBtn.onclick = function() {
			if(modal.classList.contains('modal-open')){
				modal.classList.remove('modal-open');
				modal.classList.add('modal-closed');
			}
			if(!modalWindow.classList.contains('modalUp')){
					modalWindow.classList.remove('modalUp');
			}
		}

		modalBottomBtn.onclick = function() {
			if(modal.classList.contains('modal-open')){
				modal.classList.remove('modal-open');
				modal.classList.add('modal-closed');
			}
			if(!modalWindow.classList.contains('modalUp')){
					modalWindow.classList.remove('modalUp');
			}	
		}

	}






});