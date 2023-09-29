
favouriteMovieGenre("space")

favouriteFruit("tomato")

favouriteMode("dark")

favouriteEdgeStyle("round")


function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
}

function favouriteEdgeStyle(style) {
    setProp("--image", "var(--" + style + ")");
}

function favouriteMovieGenre(font) {
    if (font) {
        setProp("--font", "var(--" + font + ")");    
    }
}

function favouriteMode(mode) {
    if (mode === "dark") {
        setProp('--background', "var(--dark)");
        setProp('--text', "var(--light)");
    }
}

function favouriteFruit(theme) {  
    if (theme === "tomato") {
        setProp('--light', "#d62e2e")
        setProp('--dark', "#600000")
}


