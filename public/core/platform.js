class Platform {
    x; y; width; height; background; game; element;
    
    constructor({x, y, width, height, background, css, game, id}) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.width = width;
        this.height = height;
        this.background = background;
        this.game = game;
        this.id = id;
        this.css = css;

        this.createElement();
    }

    createElement() {
        var platformEl = document.createElement("div");
        platformEl.classList.add('platform');
        this.element = platformEl;
        if (this.css) {
            const existingCssText = this.element.getAttribute("style") || "";
            const mergedCssText = SpriteCss.mergeCssText(existingCssText, this.css);
            this.element.setAttribute("style", mergedCssText);
        }
        Core.gameEl.appendChild(platformEl);
    }

    draw() {
        this.element.style.position = 'absolute';
        this.element.style.left = this.x + 'px';
        this.element.style.bottom = this.y + 'px';
        this.element.style.width = this.width;
        this.element.style.height = this.height;
        this.element.style.background = this.background;
    }
}
