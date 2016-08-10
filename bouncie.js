var elToClone;
$(document).ready(function(){
    elToClone = $('[class*=bouncie-this]');
    init();
});
function init(){
    getStyles();
}
function getStyles() {
    elToClone.each(function(){
        if ($(this).css('width') == null) {
            $(this).width($(this).textWidth());
        }
    });
    createClonedLayers();
}
$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};
function createClonedLayers(){
    elToClone.each(function(){
        var toClone = $(this).html();
        $(this).append('<div class="bouncie-front-layer"></div>');
        var clone = $(this).find('.bouncie-front-layer');
        clone.html(toClone);
    });
    setColors();
    handleHover();
}
function setColors() {
    elToClone.each(function(){
        if ($(this).attr('back-color') != null) {
            $(this).css({
                color: $(this).attr('back-color')
            });
        }
        if ($(this).attr('fill-color') != null) {
            $(this).find('.bouncie-front-layer').css({
                color: $(this).attr('fill-color')
            });
        }
    });
}
function handleHover() {
    elToClone.hover(function(e){
        var frontEl = $(e.currentTarget).find('.bouncie-front-layer');
        frontEl.addClass('open');
    }, function(e){
        var frontEl = $(e.currentTarget).find('.bouncie-front-layer');
        frontEl.removeClass('open');
    });
}
