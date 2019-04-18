// in variables.css

// default theme
:root {
    --font-default-size: 16px;
    --font-size-small: 14px;
    --font-size-big: 18px;
    ...
    /* this part is default dark theme */
    --background-color: rgb(35, 44, 49);
    --font-color-default: rgb(255, 255, 255);
    --font-color-gray: rgb(155, 155, 155);
}

:root[data-theme="light"] {
    --background-color: rgb(255, 255, 255);
    --font-color-default: rgb(0, 0, 0);
    --font-color-gray: rgb(74, 74, 74);
}


// ---------------------------
// in App.js

    state = {
        theme: 'dark'
    };

    toggleTheme = () => {
        const theme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.setState({ theme: theme });
        document.documentElement.setAttribute("data-theme", theme);
    };
    
    
// easy-peasy
