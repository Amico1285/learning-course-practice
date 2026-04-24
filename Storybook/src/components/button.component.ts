import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled || loading"
    >
      <span *ngIf="loading" class="btn-spinner"></span>
      <span *ngIf="leftIcon && !loading && !iconOnly" class="btn-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
        </svg>
      </span>
      <span *ngIf="iconOnly && !loading" class="btn-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
        </svg>
      </span>
      <span *ngIf="!iconOnly">{{ label }}</span>
    </button>
  `,
})
export class ButtonComponent {
  @Input() variant:
    | 'primary'
    | 'accent'
    | 'outline'
    | 'ghost'
    | 'text' = 'primary';

  @Input() size: 'm' | 'xl' = 'm';
  @Input() label = 'Button';
  @Input() leftIcon = false;
  @Input() iconOnly = false;
  @Input() disabled = false;
  @Input() loading = false;

  get buttonClasses(): string {
    const classes = ['btn', `btn-${this.variant}`];
    if (this.size === 'xl') {
      classes.push('btn-lg');
    }
    if (this.iconOnly) {
      classes.push('btn-icon-only');
    }
    return classes.join(' ');
  }
}
