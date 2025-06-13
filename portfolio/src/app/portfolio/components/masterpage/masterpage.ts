import { Component } from '@angular/core';
import { Header } from "../header/header";
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Mainintro } from "../mainintro/mainintro";
import { Services } from '../services/services';

@Component({
  selector: 'app-masterpage',
  imports: [Header, Mainintro, About, Services, Skills, Contact, Footer],
  templateUrl: './masterpage.html',
  styleUrl: './masterpage.css'
})
export class Masterpage {

}
