import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | undefined;
  constructor(private router: Router,  
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
     ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
    id: ['', Validators.required],
    password: ['', Validators.required],
    
    })
  }
  requestResult = '';
  error = '';



  //  login() {
     
    


  //   this.api.login(this.loginForm.value)
  //   .subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //       alert("Account Successfully Logged in");
  //       console.log(this.loginForm.value);
  //       this.openDialogFaculty(this.loginForm.value);
  //     },
  //     error:()=>{
  //       alert("Error, Invalid Credentials");
  //       console.log(this.loginForm.value)
  //     }
  //   })

   
    
  //  }

  //  openDialogFaculty(element: any){
  //   this.dialog.open(FacultyViewComponent,{
  //     width:'40%', height:'63%', data: element
  //   })
  // }
  nav(destination: string) {
    this.router.navigate([destination]);
  }
}
