import { Component } from '@angular/core';
import { Header } from "../header/header";
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Mainintro } from "../mainintro/mainintro";
import { Services } from '../services/services';
import { Resume } from "../resume/resume";
import { Reviews } from "../reviews/reviews";

@Component({
  selector: 'app-masterpage',
  imports: [Header, Mainintro, About, Services, Skills, Contact, Footer, Resume, Reviews],
  templateUrl: './masterpage.html',
  styleUrl: './masterpage.css'
})
export class Masterpage {

}
