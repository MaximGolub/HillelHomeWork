"use strict";

// SLIDER CONSTRUCTOR
function Slider({ wrapperId, itemsId, prevId, nextId, paginationId, slides }) {
    this.wrapperEl = document.getElementById(wrapperId);
    this.itemsEl = document.getElementById(itemsId);
    this.prevEl = document.getElementById(prevId);
    this.nextEl = document.getElementById(nextId);
    this.paginationEl = document.getElementById(paginationId);

    this.currentIndex = 0;
    this.slidesLength = slides.length;

    const { width: wrapperWidth } = this.wrapperEl.getBoundingClientRect();

    this.itemsEl.style.width = `${this.slidesLength * wrapperWidth}px`;

    const createSlides = () => {
        slides.forEach((item, index) => {
            const slide = document.createElement("div");
            slide.style.backgroundImage = `url(${item.src})`;
            slide.classList.add("slide");

            const overlay = document.createElement("div");
            overlay.innerText = item.description;
            overlay.classList.add("slide-overlay");

            const paginationEl = document.createElement("div");
            paginationEl.classList.add("pagination-item");
            paginationEl.dataset.index = index;
            if (index === 0) {
                paginationEl.classList.add('active');
            }

            slide.appendChild(overlay);

            this.itemsEl.appendChild(slide);
            this.paginationEl.appendChild(paginationEl);
        });
    };

    createSlides();

    this.moveToIndex = function(index) {
        if (index < 0) {
            this.currentIndex = 0;
        } else if (index > this.slidesLength - 1) {
            this.currentIndex = this.slidesLength - 1;
        } else {
            this.currentIndex = index;
        }

        const paganationItemsCollection = document.querySelectorAll('.pagination-item');
        const paganationItemsArray = Array.from(paganationItemsCollection);

        paganationItemsArray.forEach((item, idx) => {
            item.classList.remove('active');
            if (idx === this.currentIndex) {
                item.classList.add('active');
            }
        });

        const posX = this.currentIndex * wrapperWidth;
        this.itemsEl.classList.add('transition');
        this.itemsEl.style.transform = `translate(${-posX}px,0)`;
    };

    // SIDE NAVIGATION

    this.prevEl.addEventListener("click", (e) => {
        this.moveToIndex(this.currentIndex - 1);
    });

    this.nextEl.addEventListener("click", (e) => {
        this.moveToIndex(this.currentIndex + 1);
    });

    this.itemsEl.addEventListener('transitionend', (e) => {
        this.itemsEl.classList.remove('transition');
    });

    // DRAWING

    let isDrawing = false;
    const leftThreshold = 100;
    const rightThreshold = -100;
    let startDrawPosX = 0;

    this.itemsEl.addEventListener('mousedown', (e) => {
        isDrawing = true;
        startDrawPosX = e.clientX;
    });

    this.itemsEl.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        const diffX = startDrawPosX - e.clientX;

        if (diffX >= leftThreshold) {
            this.moveToIndex(this.currentIndex + 1);
            isDrawing = false;
        }

        if (diffX <= rightThreshold) {
            this.moveToIndex(this.currentIndex - 1);
            isDrawing = false;
        }
    });

    this.itemsEl.addEventListener('mouseleave', () => {
        if (!isDrawing) return;
        isDrawing = false;
    });

    this.itemsEl.addEventListener('mouseup', (e) => {
        if (!isDrawing) return;
        isDrawing = false;
    });

    // PAGINATION

    this.paginationEl.addEventListener('click', (e) => {
        const el = e.target;
        if (e.target.classList.contains('pagination-item')) {
            const index = +el.dataset.index;
            this.moveToIndex(index);
        }
    });

    // KEYBOARD NAVIGATION

    document.addEventListener('keydown', (e) => {
        if (e.code === "ArrowRight") {
            this.moveToIndex(this.currentIndex + 1);
        } else if (e.code === "ArrowLeft") {
            this.moveToIndex(this.currentIndex - 1);
        }
    });
}

// SLIDER ARRAY
const slides = [{
        description: "Test slide 1",
        src: "https://via.placeholder.com/600X400",
    },
    {
        description: "Test slide 2",
        src: "https://via.placeholder.com/600X400",
    },
    {
        description: "Test slide 3",
        src: "https://via.placeholder.com/600X400",
    },
    {
        description: "Test slide 4",
        src: "https://via.placeholder.com/600X400",
    },
    {
        description: "Test slide 5",
        src: "https://via.placeholder.com/600X400",
    },
];

// OBJECT
const slider = new Slider({
    wrapperId: "wrapper-slides",
    itemsId: "slides",
    prevId: "prev",
    nextId: "next",
    paginationId: "pagination",
    slides,
});