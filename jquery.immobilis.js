/**
 * jQuery Immobilis
 * Version: 0.0.1
 *
 * GitHub: https://github.com/agenceepsilon/jquery-immobilis
 *
 * Date: 2014-02-27
 */

$(document).ready(function(){
    var $mobilisClass = $(".mobilis");
    var $initialPos = $mobilisClass.offset().top;

    function immobilis(){
        var $scrollTop = $(window).scrollTop();
        var $mobilisPos = $mobilisClass.offset().top;

        if($scrollTop > $mobilisPos){
            $mobilisClass.addClass("immobilis");
            $mobilisClass.css({
                "width": "100%",
                "position": "fixed",
                "top": 0,
                "left": 0
            });
        } else if($scrollTop < $initialPos){
            $mobilisClass.removeClass("immobilis");
            $mobilisClass.css({
                "width": "",
                "position": "",
                "top": "",
                "left": ""
            });
        }
    }

    $(window).scroll(function(){
        immobilis();
    });
});