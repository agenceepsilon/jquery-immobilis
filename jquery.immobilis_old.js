/*!
 * jQuery Immobilis v1.2.0 (https://github.com/agenceepsilon/jquery-immobilis)
 * Copyright 2014 Agence Epsilon.
 * Licensed under MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function($){
    $.fn.immobilis = function(opts){
        var defaults = {
            itemSelector: "immobilis",
            target: "top",
            css: true
        };

        var params = $.extend(defaults, opts);

        return this.each(function(){
            var $elem = $(this);
            var initialElemPos = $elem.offset().top;

            /**
             * Top fixed
             */
            function immobilisTop(){
                var scrollTop = $(window).scrollTop();
                var mobilisPos = $elem.offset().top;
                var elemHeight = $elem.outerHeight();

                if(scrollTop > mobilisPos){
                    $elem.addClass(params.itemSelector);
                    $elem.next().css("margin-top", elemHeight);

                    cssStyle();
                }
                if(scrollTop < initialElemPos){
                    $elem.removeClass(params.itemSelector);
                    $elem.next().css("margin-top", "");

                    cssStyle(false);
                }
            }

            /**
             * Footer fixed
             */
            function immobilisFooter(){
                var scrollTop = $(window).scrollTop();
                var windowHeight = $(window).height();
                var documentHeight = $(document).height();
                var heightGap = documentHeight - windowHeight;
                var elemHeight = $elem.outerHeight();

                if(scrollTop >= heightGap){
                    $elem.removeClass(params.itemSelector);
                    $elem.prev().css("margin-bottom", "");

                    cssStyle(false);
                } else{
                    $elem.addClass(params.itemSelector);
                    $elem.prev().css("margin-bottom", elemHeight);

                    cssStyle();
                }
            }

            /**
             * Default CSS style
             *
             * @param $reset
             */
            function cssStyle($reset){
                if(params.css){
                    if($reset !== false){
                        if(params.target == "top"){
                            $elem.css({
                                "width": "100%",
                                "position": "fixed",
                                "top": 0,
                                "left": 0
                            });
                        } else{
                            $elem.css({
                                "width": "100%",
                                "position": "fixed",
                                "bottom": "0",
                                "left": 0
                            });
                        }
                    } else{
                        if(params.target == "top"){
                            $elem.css({
                                "width": "",
                                "position": "",
                                "top": "",
                                "left": ""
                            });
                        } else{
                            $elem.css({
                                "width": "",
                                "position": "",
                                "bottom": "",
                                "left": ""
                            });
                        }
                    }
                }
            }

            function immobilisInit(){
                if(params.target == "top"){
                    immobilisTop();
                }
                if(params.target == "bottom"){
                    immobilisFooter();
                }
            }

            immobilisInit();

            $(window).scroll(function(){
                immobilisInit();
            });
        });
    };
})(jQuery);