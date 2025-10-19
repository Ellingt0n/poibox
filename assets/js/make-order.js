jQuery(document).ready(function ($) {

    $('.size-selector__current').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $selector = $(this).closest('.size-selector');
        const $dropdown = $selector.find('.size-selector__dropdown');
        const $button = $(this);
        
        $('.size-selector__dropdown').not($dropdown).slideUp(200);
        $('.size-selector__current').not($button).removeClass('active');
        
        $dropdown.slideToggle(200);
        $button.toggleClass('active');
    });

    $('.size-selector__option').on('click', function(e) {
        e.stopPropagation();
        
        const $option = $(this);
        const $selector = $option.closest('.size-selector');
        const $button = $selector.find('.size-selector__current');
        const $value = $button.find('.size-selector__value');
        const $dropdown = $selector.find('.size-selector__dropdown');
        
        $selector.find('.size-selector__option').removeClass('selected');
        $option.addClass('selected');
        
        $value.text($option.text()).removeClass('placeholder');
        
        $dropdown.slideUp(200);
        $button.removeClass('active');
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.size-selector').length) {
            $('.size-selector__dropdown').slideUp(200);
            $('.size-selector__current').removeClass('active');
        }
    });
});