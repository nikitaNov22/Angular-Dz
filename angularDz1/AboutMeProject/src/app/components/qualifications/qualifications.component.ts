import { Component, OnInit } from '@angular/core';
import { Qualification } from './qualifications';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent implements OnInit{

  qualification: Qualification = {
    title: "My qualifications!",
    specialty: "mechanic",
    experience: "83",
    position: "Director",
    salary: 284,
    skills: "I am a mechanic, and my skills cover a wide range of areas. I can service and repair various mechanical systems, including engines, transmissions, and braking systems. I also have diagnostic skills, which allow me to quickly find and fix faults. Attention to detail, patience, and the ability to work with my hands - that's what makes me a good mechanic."
  }

  constructor () {}
  
  ngOnInit(): void {
    console.log('2')
  }

}
