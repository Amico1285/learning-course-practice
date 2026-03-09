import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="mb-3">
      <label [for]="fieldId" class="form-label">{{ label }}</label>
      <input
        [type]="type"
        [id]="fieldId"
        class="form-control"
        [class.is-invalid]="isInvalid"
        [placeholder]="placeholder"
        [value]="value"
      />
      <div class="form-text" *ngIf="helperText && !isInvalid">
        {{ helperText }}
      </div>
      <div class="invalid-feedback" *ngIf="isInvalid && errorText">
        {{ errorText }}
      </div>
    </div>
  `,
})
export class FormFieldComponent {
  @Input() label = 'Label';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() fieldId = 'field';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() isInvalid = false;
}
