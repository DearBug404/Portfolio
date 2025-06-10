import { Component } from '@angular/core';
import { Header } from "../header/header";
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Mainintro } from "../mainintro/mainintro";

@Component({
  selector: 'app-masterpage',
  imports: [Header, Mainintro, About, Skills, Projects, Contact, Footer],
  templateUrl: './masterpage.html',
  styleUrl: './masterpage.css'
})
export class Masterpage {

}
