/*!
 * jQuery Immobilis v1.1.1 (https://github.com/agenceepsilon/jquery-immobilis)
 * Copyright 2014 Agence Epsilon.
 * Licensed under MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function($){
    $.fn.immobilis = function(opts){
        var defaults = {
            mainClass: "immobilis",
            target: "top",
            css: true
        };

        var params = $.extend(defaults, opts);

        return this.each(function(){
            var $mobilisClass = $(this);
            var $initialPosTop = $mobilisClass.offset().top;

            function cssStyle(){
                if(params.css){
                    if(params.target == "top"){
                        $mobilisClass.css({
                            "width": "100%",
                            "position": "fixed",
                            "top": 0,
                            "left": 0
                        });
                    } else {
                        $mobilisClass.css({
                            "width": "100%",
                            "position": "fixed",
                            "top": "auto",
                            "bottom": "0",
                            "left": 0
                        });
                    }
                }
            }

            function cssStyleReset(){
                if(params.css){
                    if(params.target == "top"){
                        $mobilisClass.css({
                            "width": "",
                            "position": "",
                            "top": "",
                            "left": ""
                        });
                    } else {
                        $mobilisClass.css({
                            "width": "",
                            "position": "",
                            "top": "",
                            "bottom": "",
                            "left": ""
                        });
                    }
                }
            }

            function immobilisTop(){
                var $scrollTop = $(window).scrollTop();
                var $mobilisPos = $mobilisClass.offset().top;
                var $mobilisHeight = $($mobilisClass).innerHeight();

                if($scrollTop > $mobilisPos){
                    $mobilisClass.addClass(params.mainClass);
                    $mobilisClass.next().css("margin-top", $mobilisHeight);

                    cssStyle();
                }
                if($scrollTop < $initialPosTop){
                    $mobilisClass.removeClass(params.mainClass);
                    $mobilisClass.next().css("margin-top", "");

                    cssStyleReset();
                }
            }

            function immobilisFooter(){
                var $windowHeight = $(window).height();
                var $documentHeight = $(document).height();
                var $heightGap = $documentHeight - $windowHeight;
                var $scrollTop = $(window).scrollTop();
                var $mobilisHeight = $($mobilisClass).innerHeight();

                if($scrollTop < $heightGap){
                    $mobilisClass.addClass(params.mainClass);
                    $mobilisClass.prev().css("margin-bottom", $mobilisHeight);

                    cssStyle();
                } else {
                    $mobilisClass.removeClass(params.mainClass);
                    $mobilisClass.prev().css("margin-bottom", "");

                    cssStyleReset();
                }
            }

            function initImmobilis(){
                if(params.target == "top"){
                    immobilisTop();
                }
                if(params.target == "bottom"){
                    immobilisFooter();
                }
            }

            initImmobilis();

            $(window).scroll(function(){
                initImmobilis();
            });
        });
    };
})(jQuery);