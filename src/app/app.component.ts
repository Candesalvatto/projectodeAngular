import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';


  constructor(
    private router: Router
  ){};



irInicio(){
  this.router.navigate(['inicio'])

}
}


