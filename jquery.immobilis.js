/**
 * jQuery Immobilis
 * Version: 1.0.0
 *
 * GitHub: https://github.com/agenceepsilon/jquery-immobilis
 *
 * Date: 2014-02-27
 */

(function($){
    $.fn.immobilis = function(opts){
        var defaults = {
            mainClass: "immobilis",
            css: true
        };

        var params = $.extend(defaults, opts);

        return this.each(function(){
            var $mobilisClass = $(this);
            var $initialPos = $mobilisClass.offset().top;

            function immobilis(){
                var $scrollTop = $(window).scrollTop();
                var $mobilisPos = $mobilisClass.offset().top;

                if($scrollTop > $mobilisPos){
                    $mobilisClass.addClass(params.mainClass);
                    if(params.css){
                        $mobilisClass.css({
                            "width": "100%",
                            "position": "fixed",
                            "top": 0,
                            "left": 0
                        });
                    }
                } else if($scrollTop < $initialPos){
                    $mobilisClass.removeClass(params.mainClass);
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

            $(window).scroll(function(){
                immobilis();
            });
        });
    };
})(jQuery);