import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [style.max-width.px]="maxWidth">
      <div class="card-body">
        <h5 class="card-title" *ngIf="title">{{ title }}</h5>
        <p class="card-text text-body-secondary" *ngIf="text">{{ text }}</p>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input() title = '';
  @Input() text = '';
  @Input() maxWidth = 0;
}
