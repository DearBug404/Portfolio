import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews implements OnInit {
  currentIndex = 0;
  reviewsList = [
    {
      text: "Excellent service and great communication! Truly professional experience from start to finish.Highly recommended for any web development project.",
      image: "assets/client1.jpg",
      name: "John Doe",
      designation: "CEO, TechCorp"
    },
    {
      text: "Truly professional experience from start to finish.",
      image: "assets/client2.jpg",
      name: "Jane Smith",
      designation: "CTO, WebFlow"
    },
    {
      text: "Highly recommended for any web development project.",
      image: "assets/client3.jpg",
      name: "Robert Miles",
      designation: "Founder, StartupX"
    },
    {
      text: "Fantastic collaboration and timely delivery!",
      image: "assets/client1.jpg",
      name: "Afzal",
      designation: "Founder"
    }
  ];
  ngOnInit() {
    this.updateSlidePosition();
    window.addEventListener('resize', () => {
      this.updateSlidePosition();
    });
  }
  get maxIndex() {
    return Math.max(this.reviewsList.length - 1, 0);
  }
  nextSlide() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
      this.updateSlidePosition();
    }
  }
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlidePosition();
    }
  }
  updateSlidePosition() {
    const track = document.querySelector('.reviews-track') as HTMLElement;
    const card = document.querySelector('.review-block') as HTMLElement;
    if (track && card) {
      const gap = 20; 
      const cardWidth = card.offsetWidth;
      const offset = this.currentIndex * (cardWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;
    }
  }
  onImageError(event: Event) {
  const target = event.target as HTMLImageElement;
  target.src = 'assets/images/default-user.png'; 
}
}
