import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { elementAt } from 'rxjs';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen: boolean = false;
  clickedTab: string = 'home';
  hoveredTab: string = '';
  setHoveredTab(tab: string) {
    this.hoveredTab = tab;
  }
  clearHoveredTab() {
    this.hoveredTab = '';
  }
  setClickedTab(tab: string) {
    this.clickedTab = tab;
    this.menuOpen = false;
  }
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  goHome(): void {
  this.scrollTo('home');      // scroll to home
  setTimeout(() => {
    window.location.reload(); // refresh the page after scroll
  }, 500); // delay ensures scroll happens first
}

}
