import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-from-driven',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './from-driven.component.html',
  styleUrl: './from-driven.component.scss'
})
export class FromDrivenComponent {
  formfilled ={
    name:'',
    email:'',
    message:''
  };
  currentDate: Date = new Date();
  formFilledData:boolean = false;
  formSubmit(items:any){
    if(items.valid){
      this.formFilledData = true;
      console.log(this.formfilled);
      console.log('hi');
    }
    
  }
}
