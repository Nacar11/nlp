import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  events: string[] = [];
  
  shown = false;

  constructor(
    private dialog: MatDialog,
    private router: Router,
   
  ) {}

  ngOnInit(): void {}
  // openDialogAtt() {
  //   this.dialog.open(addAttendannceComponent, {
  //     width: '40%',
  //     height: '70%',
  //   });
  // }

  
  nav(destination: string) {
    this.router.navigate([destination]);
  }


  // openDialogAcc(){
  //   this.dialog.open(AddAccountComponent,{
  //     width:'40%', height:'63%'
  //   })
  // }
}
