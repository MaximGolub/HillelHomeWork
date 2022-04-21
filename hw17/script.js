'use strict'

class DiceBearAvatars {
    constructor(spriteElement, seedElement, backgroundColor) {
        this.spriteSelectEl = document.getElementById(spriteElement);
        this.seedInputEl = document.getElementById(seedElement);
        this.backgroundColorSelectEl = document.getElementById(backgroundColor);
        this.previewImage = document.getElementById('previewImg');
        this.downloadEl = document.getElementById('downloadEl');

        this.changePreviewImage();
        this.addListeners();
    }

    changePreviewImage() {
        const currentSprite = this.spriteSelectEl.value;
        const currentSeed = this.seedInputEl.value;
        const currentBackgroundColor = this.backgroundColorSelectEl.value.slice(1);

        this.previewImage.src = `https://avatars.dicebear.com/api/${currentSprite}/${currentSeed}.svg?background=%23${currentBackgroundColor}`;
    }

    async downloadImage() {
        let response = await fetch(this.previewImage.src);
        let blob = await response.blob();

        let a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = `${this.spriteSelectEl.value}_${this.seedInputEl.value}`;
        a.click();
    }

    addListeners() {
        this.spriteSelectEl.addEventListener('change', this.changePreviewImage.bind(this));
        this.seedInputEl.addEventListener('change', this.changePreviewImage.bind(this));
        this.backgroundColorSelectEl.addEventListener('change', this.changePreviewImage.bind(this));
        this.downloadEl.addEventListener('click', (e) => {
            e.preventDefault();
            this.downloadImage();
        });
    }
}

new DiceBearAvatars('sprite', 'seed', 'backgroundColor');