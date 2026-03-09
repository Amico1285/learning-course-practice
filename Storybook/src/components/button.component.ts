import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled"
    >
      {{ label }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'outline-primary'
    | 'outline-secondary' = 'primary';

  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() label = 'Button';
  @Input() disabled = false;

  get buttonClasses(): string {
    const classes = ['btn', `btn-${this.variant}`];
    if (this.size !== 'md') {
      classes.push(`btn-${this.size}`);
    }
    return classes.join(' ');
  }
}
