jQuery(document).ready(function ($) {
    let isPasswordVisible = false;
    const realPassword = 'mypassword123';
    const $passwordInput = $('.form-field--password input');
    
    $passwordInput.val('••••••••••••••••••••••••');
    
    $('.form-field__toggle-password').on('click', function(e) {
        e.preventDefault();
        
        const $button = $(this);
        const $input = $passwordInput;
        
        isPasswordVisible = !isPasswordVisible;
        
        if (isPasswordVisible) {
            $input.val(realPassword);
            $button.find('svg').html(`
                <path d="M7.08301 8.49998C7.08301 8.8757 7.23226 9.23604 7.49794 9.50171C7.76362 9.76739 8.12395 9.91665 8.49967 9.91665C8.8754 9.91665 9.23573 9.76739 9.50141 9.50171C9.76709 9.23604 9.91634 8.8757 9.91634 8.49998C9.91634 8.12426 9.76709 7.76392 9.50141 7.49825C9.23573 7.23257 8.8754 7.08331 8.49967 7.08331C8.12395 7.08331 7.76362 7.23257 7.49794 7.49825C7.23226 7.76392 7.08301 8.12426 7.08301 8.49998Z" stroke="#171717" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.875 8.5C13.175 11.3333 11.05 12.75 8.5 12.75C5.95 12.75 3.825 11.3333 2.125 8.5C3.825 5.66667 5.95 4.25 8.5 4.25C11.05 4.25 13.175 5.66667 14.875 8.5Z" stroke="#171717" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 1L16 16" stroke="#171717" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            `);
        } else {
            $input.val('••••••••••••••••••••••••');
            $button.find('svg').html(`
                <path d="M7.08301 8.49998C7.08301 8.8757 7.23226 9.23604 7.49794 9.50171C7.76362 9.76739 8.12395 9.91665 8.49967 9.91665C8.8754 9.91665 9.23573 9.76739 9.50141 9.50171C9.76709 9.23604 9.91634 8.8757 9.91634 8.49998C9.91634 8.12426 9.76709 7.76392 9.50141 7.49825C9.23573 7.23257 8.8754 7.08331 8.49967 7.08331C8.12395 7.08331 7.76362 7.23257 7.49794 7.49825C7.23226 7.76392 7.08301 8.12426 7.08301 8.49998Z" stroke="#171717" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.875 8.5C13.175 11.3333 11.05 12.75 8.5 12.75C5.95 12.75 3.825 11.3333 2.125 8.5C3.825 5.66667 5.95 4.25 8.5 4.25C11.05 4.25 13.175 5.66667 14.875 8.5Z" stroke="#171717" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            `);
        }
    });
    
    $passwordInput.on('focus', function() {
        if (!isPasswordVisible) {
            $(this).val('••••••••••••••••••••••••');
        }
    });
    
    $passwordInput.on('input', function() {
        if (!isPasswordVisible) {
            const inputLength = $(this).val().length;
            $(this).val('•'.repeat(Math.max(0, inputLength)));
        }
    });

});