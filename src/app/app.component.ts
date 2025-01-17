import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Edhas Polymer';
  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  // Images for the carousel
  carouselImages = [
  
    { src: 'assets/p3.jpg', alt: 'Third Slide' },
    { src: 'assets/p4.jpg', alt: 'Fourth Slide' },
    { src: 'assets/p5.jpg', alt: 'Fifth Slide' },
    { src: 'assets/p6.jpg', alt: 'Sixth Slide' },
    { src: 'assets/p7.jpg', alt: 'Seventh Slide'},
    { src: 'assets/p7.jpg', alt: 'Eight Slide'},
    { src: 'assets/p1.jpg', alt: 'First Slide' },
    { src: 'assets/p2.jpg', alt: 'Second Slide' }
  ];

  // Active slide index
  activeSlideIndex = 0;

  // Method to change slides manually
  setActiveSlide(index: number) {
    this.activeSlideIndex = index;
  }

  // Method to go to the next slide
  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.carouselImages.length;
  }

  // Method to go to the previous slide
  prevSlide() {
    this.activeSlideIndex =
      (this.activeSlideIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }
}
