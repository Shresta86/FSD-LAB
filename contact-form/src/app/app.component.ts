import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jobForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.email]],
    information: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  submit() {
    if (this.jobForm.valid) {
      alert('Application submitted successfully!');
    }
  }
}