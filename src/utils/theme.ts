function setTheme(dark: boolean) {
    if (dark) {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute("data-theme", "night");
    } else {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute("data-theme", "winter");
    }
}

function isDarkTheme() {
    if (typeof window !== 'undefined') {
        return localStorage.theme === 'dark';
    }

    return false;
}

function toggleTheme() {
    if (isDarkTheme()) {
        setTheme(false);
    } else {
        setTheme(true);
    }
}

function initializeTheme() {
    if (localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme(true);
    } else {
        setTheme(false);
    }
}

export {
    isDarkTheme,
    setTheme,
    toggleTheme,
    initializeTheme,
}