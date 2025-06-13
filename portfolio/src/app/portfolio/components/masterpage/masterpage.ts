import { Component } from '@angular/core';
import { Header } from "../header/header";
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Mainintro } from "../mainintro/mainintro";
import { Services } from "../services/services/services";

@Component({
  selector: 'app-masterpage',
  imports: [Header, Mainintro, About, Services, Skills, Projects, Contact, Footer, Services],
  templateUrl: './masterpage.html',
  styleUrl: './masterpage.css'
})
export class Masterpage {

}
