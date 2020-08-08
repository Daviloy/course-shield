(function(){
    document.addEventListener('DOMContentLoaded', appInit);

    function appInit(){
        // Topbar exit button
        const topbar = document.querySelector('.topbar');
        const exitBtn = document.getElementById('exit-btn');

        if(exitBtn !== null){
            exitBtn.addEventListener('click', () => {
                topbar.remove();
            });
        }

    window.addEventListener('scroll', checkBarPos);
    window.addEventListener('resize', checkDeviceWidth);

    function checkBarPos(){
            if(topbar !== null){
                if(window.scrollY === 0){
                    topbar.style.position = 'static';
                }else{
                    topbar.style.position = 'fixed';
                }
            }
        }
        checkBarPos();
        
        function checkDeviceWidth(){
            if(topbar !== null){
                if(!(window.outerWidth <= 600)){
                    setTimeout(() => {
                        topbar.style.display = 'flex';
                    }, 5000)
                }else{
                    topbar.style.display = 'none';
                }
            }
        }
        checkDeviceWidth();

        // Mobile Menu Toggler
        const menuBar = document.getElementById('menu-bar');
        const navMenu = document.getElementById('nav-menu');

        let hidden = true;

        function menuToggler(e){
            e.preventDefault();

            hidden = !hidden;

            hidden === false ? navMenu.classList.remove('hide-mobile') : navMenu.classList.add('hide-mobile');
        }

        menuBar.addEventListener('click', menuToggler);
    }
}());