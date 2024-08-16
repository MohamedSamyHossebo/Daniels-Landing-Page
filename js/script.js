// changing navbar color while scrolling
$(window).scroll(function () {
    let WindowScroll = $(window).scrollTop();
    // let home = $('#home').height();
    let aboutTop = $('.main').offset().top;
    console.log(home)
    if (WindowScroll > aboutTop) {
        $('.navbar').addClass('navbar-dark bg-dark text-light');
    } else {
        $('.navbar').removeClass('navbar-dark bg-dark');
    }
}
)   
