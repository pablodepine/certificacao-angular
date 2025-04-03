import { Component, OnInit } from '@angular/core';
import { SignalService } from './services/signal-service/signal.service';
import { BehaviorSubjectService } from './services/behavior-subject/behavior-subject.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  dataBehaviorSubject = '';
  dataSignal = this.signalService.getDataSignal();

  constructor(private behaviorSubjectService: BehaviorSubjectService, private signalService: SignalService) { }

  ngOnInit() {
    this.behaviorSubjectService.data$.subscribe(value => this.dataBehaviorSubject = value);
  }

  updateSignalValue() {
    this.signalService.updateData('Updated Value');
  }

  updateBehaviorSubjectValue() {
    this.behaviorSubjectService.updateData('Updated Value');
  }
}