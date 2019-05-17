/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let current = 0;

class Carousel {
    constructor(carousel) {
        this.leftButton = carousel.querySelector('.left-button');
        this.rightButton = carousel.querySelector('.right-button');
        this.images = carousel.querySelectorAll('img');
        this.indexes = ['1', '2', '3', '4'];
        // console.log(this.indexes);

        this.currentIndex = this.indexes[current];
        // console.log(current);

        this.images[current].style.display = 'flex';

        this.rightButton.addEventListener('click', () => this.changeImageRight());
        this.leftButton.addEventListener('click', () => this.changeImageLeft());
    }

    changeImageRight() {
        current += 1;
        this.currentIndex = this.indexes[current];
        console.log(this.currentIndex);

        Array.from(this.images).forEach(image => {
            if (image.dataset.index === this.currentIndex) {
                image.style.display = 'none';
            } else {
                image.style.display = 'flex';
            }
        });
    }

    changeImageLeft() {
        current -= 1;
        this.currentIndex = this.indexes[current];
        console.log(this.currentIndex);

        Array.from(this.images).forEach(image => {
            if (image.dataset.index === this.currentIndex) {
                image.style.display = 'none';
            } else {
                image.style.display = 'flex';
            }
        });
    }
}

const carousel = document.querySelector('.carousel');
const carousel1 = new Carousel(carousel);




