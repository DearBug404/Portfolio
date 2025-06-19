import { Component } from '@angular/core';

@Component({
  selector: 'app-mainintro',
  imports: [],
  templateUrl: './mainintro.html',
  styleUrl: './mainintro.css'
})
export class Mainintro {
  
  scrollToContact() {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

}
