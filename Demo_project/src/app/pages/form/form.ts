import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.html',
})
export class FormComponent {
  name = '';
  email = '';
  phone = '';
  company = '';
  message = '';

  onSubmit() {
    console.log('Form submitted:', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      company: this.company,
      message: this.message,
    });
  }

  onCancel() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.company = '';
    this.message = '';
  }
}
