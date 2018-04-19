$(document).ready(function()
{
    $('.fancybox-media').fancybox();

    // $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup
    // ({
    //     disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false
    // });

    $('.popup-with-zoom-anim').magnificPopup
    ({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    $('.thi-testimonials').royalSlider
    ({
        autoHeight: true,
        arrowsNav: true,
        arrowsNavAutoHide:false,
        fadeinLoadedSlide: false,
        controlNavigationSpacing: 0,
        controlNavigation: 'none',
        imageScaleMode: 'none',
        imageAlignCenter:false,
        loop: true,
        loopRewind: true,
        numImagesToPreload: 6,
        keyboardNavEnabled: true,
        usePreloader: false,
        autoPlay:
        {
            enabled: false,
            pauseOnHover: true,
            delay:5000
        }
    });

    $('.blog-testimonials').royalSlider({
        autoHeight: true,
        arrowsNav: false,
        arrowsNavAutoHide:false,
        fadeinLoadedSlide: false,
        controlNavigationSpacing: 0,
        controlNavigation: 'bullets',
        imageScaleMode: 'none',
        imageAlignCenter:false,
        loop: true,
        loopRewind: true,
        numImagesToPreload: 6,
        keyboardNavEnabled: true,
        usePreloader: false,
        autoPlay: {
            enabled: false,
            pauseOnHover: true,
            delay:5000
        }
    });

    $('#FX').buttonset();

    $('.stack').stacktable();

    $('.select').selectmenu();

    $('.datagrid2 table').stacktable({headIndex:13});

    //Horizontal Tab
    $('#returns').easyResponsiveTabs
    ({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });

    // var owl = $(".owl-carousel");
    // owl.owlCarousel
    // ({
    //     autoWidth:false,
    //     autoHeight:true,
    //     mouseDrag:false,
    //     items:4,
    //     loop:false,
    //     nav: true,
    //     navText: ["<img class='nav-left arnav' src='/images/arnavleft.png'/>","<img class='nav-right arnav' src='/images/arnavrightdark.png'/>"],
    //     onInitialize : SetupButtons
    // });
    //
    // $('.nav-left').click(function(e)
    // {
    //     e.preventDefault();
    //     var itemList = $('.resp-tabs-list').find('.resp-tab-item');
    //     var CurrentPos = itemList.index($('.resp-tabs-list').find('.resp-tab-active'));
    //     NavSetButtons(CurrentPos-1,itemList.length-1);
    //     if (0!=CurrentPos)
    //     {
    //         itemList.eq(CurrentPos-1).trigger( "click" );
    //     }
    // });
    //
    // $('.nav-right').click(function(e)
    // {
    //     e.preventDefault();
    //     var itemList = $('.resp-tabs-list').find('.resp-tab-item');
    //     var CurrentPos = itemList.index($('.resp-tabs-list').find('.resp-tab-active'));
    //     NavSetButtons(CurrentPos+1,itemList.length-1);
    //     if (itemList.length-1!=CurrentPos)
    //     {
    //         itemList.eq(CurrentPos+1).trigger( "click" );
    //     }
    // });

    // function SetupButtons()
    // {
    //     var itemList = $('.resp-tabs-list').find('.resp-tab-item');
    //     var CurrentPos = itemList.index($('.resp-tabs-list').find('.resp-tab-active'));
    //     NavSetButtons(CurrentPos+1,itemList.length-1);
    // }

    // function NavSetButtons(position,total)
    // {
    //     console.log(position);
    //     console.log(total);
    //     if (position==0 || position<0)
    //     {
    //         $('img.nav-left').attr('src','/images/arnavlefttranparent.png');
    //         $('img.nav-right').attr('src','/images/arnavrightdark.png');
    //         return;
    //     }
    //     if (position==total || total<position)
    //     {
    //         $('img.nav-left').attr('src','/images/arnavleft.png');
    //         $('img.nav-right').attr('src','/images/arnavright.png');
    //         return;
    //     }
    //     if (0<position<total)
    //     {
    //         $('img.nav-left').attr('src','/images/arnavleft.png');
    //         $('img.nav-right').attr('src','/images/arnavrightdark.png');
    //         return;
    //     }
    // }

    //Horizontal Tab
    $('#parentHorizontalTab').easyResponsiveTabs
    ({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
            bottomBox();
        }
    });

    $('#callback').on('selectmenuchange', function()
    {
        if($(this).val() === '1')
        {
            $('#callback1').removeClass('hidden');
            $('input[name="callbackoffset"]').val(new Date().getTimezoneOffset());
        }
        else if($('#callback').val() === '0')
        {
            $('#callback1').addClass('hidden');
        }
    });

});