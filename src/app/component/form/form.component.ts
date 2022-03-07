import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      profession: ['', [Validators.required]],
      check: ['', [Validators.required]],
    });
  }
  get name() {
    return this.reactiveForm.get('name');
  }
  get age() {
    return this.reactiveForm.get('age');
  }
  get profession() {
    return this.reactiveForm.get('profession');
  }
  get check() {
    return this.reactiveForm.get('check');
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
