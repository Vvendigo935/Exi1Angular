import { Component } from '@angular/core';

@Component({
  selector: 'app-exo1',
  imports: [],
  templateUrl: './exo1.html',
  styleUrl: './exo1.css'
})
export class Presentation {
  counter : number = 0
  isEven : boolean = false
  

  toggleCounter() : void {
    this.counter++;

    if(this.counter%2 === 0){
      this.isEven = false;
    } else{
      this.isEven = true;
    }
  }


  toggleAntiCounter() : void {
    this.counter--;

    if(this.counter%2 === 0){
      this.isEven = false;
    } else{
      this.isEven = true;
    }
  }




}
