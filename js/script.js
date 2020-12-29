

const ToogleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked){
        document.documentElement.setAttribute('mode-dark', 'dark');
        localStorage.setItem('theme', 'dark'); // save to localstorage in dark mode
    }else{
        document.documentElement.setAttribute('mode-dark', 'light');
        localStorage.setItem('theme', 'light'); // save to localstorage in light mode
    }
}

ToogleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('mode-dark', currentTheme);

        if (currentTheme === 'dark') {
            ToogleSwitch.checked = true;
        }
    }