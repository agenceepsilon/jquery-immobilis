/*!
 * jQuery Immobilis v1.1.0 (https://github.com/agenceepsilon/jquery-immobilis)
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

            function immobilisTop(){
                var $scrollTop = $(window).scrollTop();
                var $mobilisPos = $mobilisClass.offset().top;
                var $mobilisHeight = $($mobilisClass).innerHeight();

                if($scrollTop > $mobilisPos){
                    $mobilisClass.addClass(params.mainClass);
                    $mobilisClass.next().css("margin-top", $mobilisHeight);
                    if(params.css){
                        $mobilisClass.css({
                            "width": "100%",
                            "position": "fixed",
                            "top": 0,
                            "left": 0
                        });
                    }
                }
                if($scrollTop < $initialPosTop){
                    $mobilisClass.removeClass(params.mainClass);
                    $mobilisClass.next().css("margin-top", "");
                    if(params.css){
                        $mobilisClass.css({
                            "width": "",
                            "position": "",
                            "top": "",
                            "left": ""
                        });
                    }
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
                    if(params.css){
                        $mobilisClass.css({
                            "width": "100%",
                            "position": "fixed",
                            "top": "auto",
                            "bottom": 0,
                            "left": 0
                        });
                    }
                } else{
                    $mobilisClass.removeClass(params.mainClass);
                    $mobilisClass.prev().css("margin-bottom", "");
                    if(params.css){
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

            if(params.target == "top"){
                immobilisTop();
            }
            if(params.target == "bottom"){
                immobilisFooter();
            }

            $(window).scroll(function(){
                if(params.target == "top"){
                    immobilisTop();
                }
                if(params.target == "bottom"){
                    immobilisFooter();
                }
            });
        });
    };
})(jQuery);