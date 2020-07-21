import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = (<HTMLInputElement>document.getElementById("myRange")).value;
    
    slider.oninput = function() {
      output.innerHTML = (<HTMLInputElement>event.target).value
    }
  }

}
