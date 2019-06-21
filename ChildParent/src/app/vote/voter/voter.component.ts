import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.sass']
})
export class VoterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()  name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;
 
  vote(agreed1: boolean) {
    console.log('inside vote======================')
    this.voted.emit(agreed1);
    this.didVote = true;
  }
}
