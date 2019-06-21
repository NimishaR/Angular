import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sampleUi';

  constructor(private router:Router){

  }

  onParentClick(){
    this.router.navigate(['parent']);
  }

  onChildClick(){
    this.router.navigate(['child']);
  }
}
