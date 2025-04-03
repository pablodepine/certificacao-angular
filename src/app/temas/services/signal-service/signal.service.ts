import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor() { }

  private dataSignal = signal<string>('Initial Value');

  updateData(newValue: string) {
    this.dataSignal.set(newValue);
  }

  getDataSignal() {
    return this.dataSignal;
  }
}
