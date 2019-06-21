import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownChildComponent } from '../countdown-child/countdown-child.component';

@Component({
  selector: 'app-countdown-parent',
  templateUrl: './countdown-parent.component.html',
  styleUrls: ['./countdown-parent.component.sass']
})
export class CountdownParentComponent implements  AfterViewInit {
  @ViewChild(CountdownChildComponent)
  private timerComponent: CountdownChildComponent;
  constructor() { }

  ngOnInit() {
  }

  seconds() { return 0; }
 
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }
 
  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}
