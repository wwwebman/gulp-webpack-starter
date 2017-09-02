$(function() {
    "use strict";

    $('.structure a[data-toggle="list"]').on('shown.bs.tab', function (e) {
        $($(e.target).data('cont')).tab('show');
        $($(e.relatedTarget).data('cont')).removeClass('active');
    })

    var mySwiper = new Swiper ('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        autoplay: 10000,
        parallax: true,
        loop: true,
    })

    if ($('.news-one article')) {
        var arcticle = $('.news-one article').outerHeight();
        console.log(arcticle);
        if (arcticle > 620) {
            $('.news-one .gallery').css('height', arcticle);
        }
    }

    var myWindow = $(document);

    var myPos = myWindow.scrollTop(),
        up = false,
        newScroll;

    var navigation = $('.navigation'),
        navigationIcon = $('.navigation-projects-collapse-button-container i'),
        projectsCollapseButton = $('.navigation-projects-collapse-button');

    if (myPos > 0) {
        navigation.removeClass('navigation-transparent-bg show-panel');
    }

    myWindow.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
    	console.log('move');
        newScroll = myWindow.scrollTop();
        if (newScroll > myPos && !up) {
            navigation.addClass('projects-collapsed hide-navigation').removeClass('navigation-transparent-bg show-panel');
            projectsCollapseButton.addClass('now-click');
            up = !up;
        } else if (newScroll < myPos && up) {
            navigation.removeClass('hide-navigation show-panel');
            up = !up;
        } else if (newScroll === 0) {
            navigation.addClass('navigation-transparent-bg').removeClass('hide-navigation');
        }
        myPos = newScroll;
    });

    projectsCollapseButton.on('click', function (e) {

        if (!$(this).hasClass('now-click')) {
            if (myPos === 0) {
                $('html, body').animate({
                    scrollTop: 108
                }, 300, function () {
                });
            }

        } else {
            navigation.toggleClass('show-panel');
            navigationIcon.toggleClass('icon-right-arrow');
            navigationIcon.toggleClass('icon-square-menu');
        }

        e.preventDefault();
        e.stopPropagation();
    });

    checkDesktopWidth();

});

$(window).resize(function () {
    checkDesktopWidth();
});

function checkDesktopWidth() {
    var bh = document.documentElement.clientHeight,
        bw = document.documentElement.clientWidth;
    if (bw > 1200 && bh > 640) {
        $('.main-w-video').css({
            height: bh
        });
    }
};