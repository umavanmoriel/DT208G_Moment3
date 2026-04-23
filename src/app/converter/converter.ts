import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule,],
  templateUrl: './converter.html',
  styleUrl: './converter.css',
})
export class Converter {
  // Properties
  celsiusValue : number = 0;
  fahrenValue : number = 32;
  meterValue : number = 0;
  feetValue : number = 3.28;

  //Metods
  convertToFahrenheit() : void {
    this.fahrenValue = parseFloat(((this.celsiusValue * 1.8 ) + 32).toFixed(2));
  }

  convertToCersius() : void {
    this.celsiusValue = parseFloat(((this.fahrenValue - 32 ) * 5/9).toFixed(2));
  }

  convertToFeet() : void {
    this.feetValue = parseFloat((this.meterValue * 3.28).toFixed(1));
  }

  convertToMeter() : void {
    this.meterValue = parseFloat((this.feetValue * 0.3048).toFixed(1));
  }
}
