import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class Resume {
  experiences = [
    {
      title: 'Senior UX/UI Designer',
      duration: 'Jan 2020 - Present',
      company: 'Bergnaum, Hills and Howe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
    },
    {
      title: 'Frontend Developer',
      duration: 'Jul 2018 - Dec 2019',
      company: 'TechVision Inc.',
      description: 'Worked on responsive web apps and optimized UI performance for Angular-based applications.'
    },
     {
      title: 'Web Developer',
      duration: 'Jul 2018 - Dec 2019',
      company: 'TechVision Inc.',
      description: 'Worked on responsive web apps and optimized UI performance for Angular-based applications.'
    }
  ];

}
