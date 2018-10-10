import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('overlay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.1s', style({ opacity: 0 })),
      ]),
    ]),
    trigger('dropdown', [
      transition(':enter', [
        style({
          transform: 'translateY(-5px)',
          opacity: 0,
        }),
        animate('0.25s ease-out', style({
          transform: 'translateY(0)',
          opacity: 1,
        })),
      ]),
      transition(':leave', [
        animate('0.1s', style({
          transform: 'translateY(-5px)',
          opacity: 0,
        })),
      ]),
    ]),
  ],
})
export class AppComponent {
  public isOpen = false;

  public onTriggerClick() {
    this.isOpen = !this.isOpen;
  }

  public onOverlayClick() {
    this.isOpen = false;
  }
}
