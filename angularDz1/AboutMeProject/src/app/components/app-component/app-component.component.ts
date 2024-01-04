import { FRIENDS } from './../app-component/mock-friends';
import { Component, OnInit } from '@angular/core';
import { AboutMe } from './app-component';

@Component({
  selector: 'app-app-component',
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.scss']
})
export class AppComponentComponent implements OnInit{

  aboutMe: AboutMe = {
    title: "Information about me!",
    name: "Vova",
    surname: "Mechanicovskyi",
    dateOfBirth: "04.11.1953",
    age: 22,
    gender: "male",
    growth: 154,
    hobbies: "music",
    education: "2nd grade school"
  };

  friends = FRIENDS;

  attitudes: string = 'marriage';

constructor () {

}

ngOnInit(): void {
  console.log('1');
  console.log(this.friends)
}

}
