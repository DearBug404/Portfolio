import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit{
  skills = [
    { name: 'Angular', percent: 50 },
    { name: 'HTML', percent: 95 },
    { name: 'CSS', percent: 85 },
    { name: 'TypeScript', percent: 70 },
    { name: 'SQL', percent: 85 },
    { name: '.NET Core', percent: 70 }
  ];

  constructor() {}

  ngOnInit(): void {}

}
