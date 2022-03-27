const stickySidebar = document.querySelector('.sticky-sidebar');
window.addEventListener('scroll', function() {
    let wScroll = this.pageYOffset;
    console.log(wScroll);
    if(wScroll > stickySidebar.clientHeight * 2) {
        stickySidebar.classList.add('sticky')
        stickySidebar.classList.add('top-24')
        stickySidebar.classList.add('right-0')
    }
})