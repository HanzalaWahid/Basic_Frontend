$(document).ready(function() {
    $('.logosliderinner').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.reviewbox').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.ghostwrite-gal, .galleryimgs').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            }
        }]
    });
    const spans = $(".numbero");
    let currentIndex = 0;
    function toggleHiddenClass() {
        spans.removeClass("is_hidden");
        spans.eq(currentIndex).addClass("is_hidden");
        currentIndex = (currentIndex + 1) % spans.length;
        setTimeout(toggleHiddenClass, 5000);
    }
    toggleHiddenClass();
    let menulist = 0;
    $(".bundlelinksmob").click(function() {
        if (menulist == 0) {
            $(".dropdown-menu-mobile").slideDown();
            menulist = 1;
        } else if (menulist == 1) {
            $(".dropdown-menu-mobile").slideUp();
            menulist = 0;
        }
    });
    console.log(base_url);
    $('.telephone').inputmask({
        mask: '999-999-9999',
        allowNumeric: true,
        removeMaskOnSubmit: true
    });
    $("li.nav-item.dropdown").mouseenter(function() {
        $("ul.dropdown-menu").addClass("show");
    });
    $("li.nav-item.dropdown").mouseleave(function() {
        $("ul.dropdown-menu").removeClass("show");
    });
    $('form#footerform').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        var formData = form.serialize();
        $.ajax({
            type: 'POST',
            url: base_url + 'email.php',
            data: formData,
            dataType: 'json',
            beforeSend: function() {},
            success: function(response) {
                if (response.success) {
                    if (response.datadone == 1) {
                        $('.datadone').text(response.message);
                        $('.datadone').show();
                        $('.errorreport').hide();
                        $('.fname').removeClass('border-red');
                        $('.email').removeClass('border-red');
                        $('.telephone').removeClass('border-red');
                    }
                } else {
                    if (response.datadone == 2) {
                        $('.errorreport').text(response.message);
                        $('.errorreport').show();
                        $('.datadone').hide();
                    } else if (response.datadone == 3) {
                        $('.errorreport').text(response.message);
                        $('.datadone').hide();
                        $('.errorreport').show();
                        $('.fname').addClass('border-red');
                        $('.email').addClass('border-red');
                        $('.telephone').addClass('border-red');
                    } else if (response.datadone == 4) {
                        $('.errorreport').text(response.message);
                        $('.datadone').hide();
                        $('.errorreport').show();
                        $('.fname').addClass('border-red');
                        $('.email').removeClass('border-red');
                        $('.telephone').removeClass('border-red');
                    } else if (response.datadone == 5) {
                        $('.errorreport').text(response.message);
                        $('.datadone').hide();
                        $('.errorreport').show();
                        $('.email').addClass('border-red');
                        $('.fname').removeClass('border-red');
                        $('.telephone').removeClass('border-red');
                    } else if (response.datadone == 6) {
                        $('.errorreport').text(response.message);
                        $('.datadone').hide();
                        $('.errorreport').show();
                        $('.telephone').addClass('border-red');
                        $('.fname').removeClass('border-red');
                        $('.email').removeClass('border-red');
                    }
                }
            },
            error: function() {
                console.error('AJAX Error:', status, error);
            },
            complete: function() {
                form.trigger('reset');
            }
        });
    });
    $('form#contactform').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        var formData = form.serialize();
        $.ajax({
            type: 'POST',
            url: base_url + 'email.php',
            data: formData,
            dataType: 'json',
            beforeSend: function() {},
            success: function(response) {
                if (response.success) {
                    if (response.datadone == 1) {
                        $('.cdatadone').text(response.message);
                        $('.cdatadone').show();
                        $('.cerrorreport').hide();
                        $('.fname').removeClass('cborder-red');
                        $('.email').removeClass('cborder-red');
                        $('.telephone').removeClass('cborder-red');
                    }
                } else {
                    if (response.datadone == 2) {
                        $('.cerrorreport').text(response.message);
                        $('.cerrorreport').show();
                        $('.cdatadone').hide();
                    } else if (response.datadone == 3) {
                        $('.cerrorreport').text(response.message);
                        $('.cdatadone').hide();
                        $('.cerrorreport').show();
                        $('.fname').addClass('cborder-red');
                        $('.email').addClass('cborder-red');
                        $('.telephone').addClass('cborder-red');
                    } else if (response.datadone == 4) {
                        $('.cerrorreport').text(response.message);
                        $('.cdatadone').hide();
                        $('.cerrorreport').show();
                        $('.fname').addClass('cborder-red');
                        $('.email').removeClass('cborder-red');
                        $('.telephone').removeClass('cborder-red');
                    } else if (response.datadone == 5) {
                        $('.cerrorreport').text(response.message);
                        $('.cdatadone').hide();
                        $('.cerrorreport').show();
                        $('.email').addClass('cborder-red');
                        $('.fname').removeClass('cborder-red');
                        $('.telephone').removeClass('cborder-red');
                    } else if (response.datadone == 6) {
                        $('.cerrorreport').text(response.message);
                        $('.cdatadone').hide();
                        $('.cerrorreport').show();
                        $('.telephone').addClass('cborder-red');
                        $('.fname').removeClass('cborder-red');
                        $('.email').removeClass('cborder-red');
                    }
                }
            },
            error: function() {
                console.error('AJAX Error:', status, error);
            },
            complete: function() {
                form.trigger('reset');
            }
        });
    });
});
