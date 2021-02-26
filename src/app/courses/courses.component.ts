import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  email = "email@test.com";

    onKeyUp() {
        console.log(this.email);
    }

  ngOnInit(): void {
  }
}
