import { Component, OnInit } from '@angular/core';
import { WorkExperience } from './work-experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit{

  workExperience: WorkExperience = {
    title: "My work experience!",
    workExperience: "Throughout my career as a mechanic, I performed a multitude of tasks. I serviced and repaired engines, transmissions, and braking systems of various vehicles. I conducted diagnostics of malfunctions, replaced worn-out parts, and carried out maintenance. In addition, I worked with electronic systems of cars, including ignition systems and computer control systems. My job required attention to detail, patience, and the ability to work with my hands. This was an experience that allowed me to become the best in my craft."
  }

  constructor () {}

  ngOnInit(): void {
    console.log("3");
  }

}
