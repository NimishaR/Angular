import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votertaker',
  templateUrl: './votertaker.component.html',
  styleUrls: ['./votertaker.component.sass']
})
export class VotertakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];
 
  constructor() { }

  ngOnInit() {
  }
  onVoted(agreed: boolean) {
    console.log('onvoted---------------------------------');
    agreed ? this.agreed++ : this.disagreed++;
  }
}
