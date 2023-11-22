import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



interface ParentUser {
  Id: number;
  Firstname: string;
  Lastname: string;
  DateOfBirth: Date;
  PhoneNumber: string;
  Email: string;
}

interface ChildUser {
  Id: number;
  Firstname: string;
  Lastname: string;
  DateOfBirth: Date;
  PhoneNumber: string;
  Email: string;
}

interface randUser {
  Id: number;
  Firstname: string;
  Lastname: string;
  DateOfBirth: Date;
  PhoneNumber: string;
  Email: string;
}


@Component({
  selector: 'app-user',
  template: `
    <h1>{{ dataPassingMessage }}</h1>
    <div *ngFor="let user of users">
      {{ user.Firstname }} {{ user.Lastname }}
    </div>
  `,
})

export class UserComponent {
  @Input()
  users: ParentUser[] = [];
  @Output() childUsersEvent = new EventEmitter<ChildUser[]>();
  dataPassingMessage = 'Array from parent component';

  constructor(private displayService: DisplayService) {}
  displayUsers(): void {
    this.displayService.displayUsers(this.users);
  }
}

export class YourComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      Id: [0], 
      Firstname: ['', [Validators.required, Validators.minLength(3)]],
      Lastname: ['', [Validators.required, Validators.minLength(3)]],
      DateOfBirth: [null], 
      PhoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      Email: ['', [Validators.required, Validators.minLength(8), Validators.email]],
    });
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    const user: User = this.userForm.value;
    console.log('User:', user);
  }
}
