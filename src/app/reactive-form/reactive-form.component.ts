import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  contactForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    message: new FormControl()
  });
  validateForm:boolean = false;
  validateFormSubmit:boolean = false;
  todoList:any[]=[];
  formSubmit(){
    if(this.contactForm.value.name == null || this.contactForm.value.email == null || this.contactForm.value.message == null){
      this.validateForm = true;
    }else if(this.contactForm.value.name || this.contactForm.value.email || this.contactForm.value.message){
      this.validateForm = false;
      this.validateFormSubmit = true;
    }else{
      this.validateForm = true;  
    }
    this.todoList.push({
      id:this.contactForm.value,
      name:this.contactForm.value.name,
      email:this.contactForm.value.email,
      message:this.contactForm.value.message,
    })
    console.log(this.contactForm.value);
    console.log(this.contactForm);
    console.log(this.todoList.values);
  }
  itemDelete(id:number):void{
    this.todoList.splice(id, 1);
    console.log(id);
  }
}
