import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,PanelModule,FormsModule,ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    PasswordModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  submitted = false;

  password: any;

  loading: boolean = false;
  ngOnInit() {
      this.loginForm = new FormGroup({
          'login': new FormControl('', Validators.required),
          'password': new FormControl('', Validators.required)
      });
  }

  onSubmit() {
      this.submitted = true;
      alert(JSON.stringify(this.loginForm.value));
  }

  @Input() title !: string;

  @Output() doload = new EventEmitter();

  loadsuccess = false;
  load(){
    this.loadsuccess=true;
    this.doload.emit(this.loadsuccess);
  }


}
