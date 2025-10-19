jQuery(document).ready(function ($) {
    const EXCHANGE_RATE = 11.02;
    const DELIVERY_CHINA = 450;
    const DELIVERY_RUSSIA = 400;
    
    const COMMISSION = {
        'shoes': 1000,
        'clothes': 800,
        'accessories': 600,
        'bags': 1200,
        'other': 1000
    };

    const CATEGORIES = {
        'shoes': 'Кроссовки',
        'clothes': 'Одежда', 
        'accessories': 'Аксессуары',
        'bags': 'Сумки',
        'other': 'Другое'
    };

    let selectedCategory = 'shoes';

    $('.calculator__result').hide();

    const dropdown = `
        <div class="calculator__dropdown" style="display: none;">
            <div class="calculator__dropdown-item" data-value="shoes">Кроссовки</div>
            <div class="calculator__dropdown-item" data-value="clothes">Одежда</div>
            <div class="calculator__dropdown-item" data-value="accessories">Аксессуары</div>
            <div class="calculator__dropdown-item" data-value="bags">Сумки</div>
            <div class="calculator__dropdown-item" data-value="other">Другое</div>
        </div>
    `;
    $('.calculator__field-calc').append(dropdown);

    $('.calculator__field-calc').on('click', function(e) {
        if (!$(e.target).hasClass('calculator__dropdown-item')) {
            $('.calculator__dropdown').slideToggle(200);
            $('.calculator__dropdown-toggle').toggleClass('active');
        }
    });

    $('.calculator__dropdown-item').on('click', function() {
        selectedCategory = $(this).data('value');
        $('.calculator__label').text($(this).text());
        $('.calculator__dropdown').slideUp(200);
        $('.calculator__dropdown-toggle').removeClass('active');
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.calculator__field-calc').length) {
            $('.calculator__dropdown').slideUp(200);
            $('.calculator__dropdown-toggle').removeClass('active');
        }
    });

    $('.calculator__submit').on('click', function(e) {
        e.preventDefault();
        
        let price = parseFloat($('.calculator__input').val().replace(/[^\d.]/g, '')) || 0;
        
        if (price <= 0) {
            $('.calculator__result').fadeOut(300);
            return;
        }

        $('.calculator__result').fadeIn(300);
        
        const priceRub = price * EXCHANGE_RATE;
        const commission = COMMISSION[selectedCategory];
        const total = priceRub + DELIVERY_CHINA + DELIVERY_RUSSIA + commission;
        
        $('.calculator__result-total').text(Math.round(total).toLocaleString('ru-RU') + ' ₽');
        
        $('.calculator__result-list').find('li').eq(0).find('.calculator__result-text').text('Цена в RUB: ' + Math.round(priceRub).toLocaleString('ru-RU') + ' ₽');
        $('.calculator__result-list').find('li').eq(1).find('.calculator__result-text').text('Доставка по Китаю: ' + DELIVERY_CHINA + ' ₽');
        $('.calculator__result-list').find('li').eq(2).find('.calculator__result-text').text('Доставка в РФ: ' + DELIVERY_RUSSIA + ' ₽');
        $('.calculator__result-list').find('li').eq(3).find('.calculator__result-text').text('Комиссия сервиса: ' + commission + ' ₽');
    });
});