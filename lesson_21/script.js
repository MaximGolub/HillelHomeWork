'use strict'

async function fetchClient({ url }) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (e) {
        console.error(e);
    }
}

const getCardTemplate = (src) => {
    return `
      <div class="flex w-full h-60">
        <img class="object-cover rounded-lg w-full" src="${src}" alt=""/>
      </div>
    `
};

class GalleryApp {
    constructor(layoutElID, breedEl, countEl) {
        this.layoutEl = document.getElementById(layoutElID);
        this.breedSelectEl = document.getElementById(breedEl);
        this.countSelectEl = document.getElementById(countEl);

        this.currentBreed = this.breedSelectEl.value;
        this.currentCount = this.countSelectEl.value;

        this.fetchBreedList();
        this.addListeners();
    }

    async fetchBreedList() {
        const response = await fetchClient({ url: 'https://dog.ceo/api/breeds/list/all' });
        this.appendBreedsToElement(Object.keys(response.message));
    }

    async fetchImages() {
        const { message: result } = await fetchClient({ url: `https://dog.ceo/api/breed/${this.currentBreed}/images/random/${this.currentCount}` });
        return result;
    }

    appendBreedsToElement(arr) {
        arr.forEach(element => {
            const elementBreed = document.createElement('option');
            elementBreed.value = element;
            elementBreed.innerText = element.toUpperCase();
            this.breedSelectEl.appendChild(elementBreed);
        });
    }

    appendGalleryContent(arr) {
        const templates = arr.reduce((acc, item) => {
            acc += getCardTemplate(item);
            return acc;
        }, '');
        this.layoutEl.innerHTML = templates;
    }

    async handleSelectBreed(e) {
        const { value } = e.target;
        this.currentBreed = value;
        const list = await this.fetchImages();
        this.appendGalleryContent(list);
    }

    async handleSelectCount(e) {
        const { value } = e.target;
        this.currentCount = value;
        const list = await this.fetchImages();
        this.appendGalleryContent(list);
    }

    addListeners() {
        this.breedSelectEl.addEventListener('change', this.handleSelectBreed.bind(this));
        this.countSelectEl.addEventListener('change', this.handleSelectCount.bind(this));
    }
}

new GalleryApp('gallery-layout', 'breed-select', 'gallery-count-select');