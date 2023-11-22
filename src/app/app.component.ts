import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <h1>Users Over 20</h1>
    <div *ngFor="let user of users">
      <ng-container *ngIf="user.age > 20">
        {{ user.firstname }} {{ user.lastname }} - {{ user.age }}
      </ng-container>
    </div>
  `,
})
export class AppComponent {
  users = [
    { firstname: 'Dato', lastname: 'Davidiani', age: 19 },
    { firstname: 'Levani', lastname: 'Iluridze', age: 19 },
    { firstname: 'Saba', lastname: 'Basharuli', age: 20 },
    { firstname: 'Koka', lastname: 'Gabisonia', age: 19 },
    { firstname: 'Giorgi ', lastname: 'Farmaniani', age: 22 },
  ];

  parentUsers = [
    
  ];
}