import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HardwareComponent } from './hardware/hardware.component';
import { SoftwareComponent } from './software/software.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ListusersComponent } from './listusers/listusers.component';
import { ListassignmentsComponent } from './listassignments/listassignments.component';

const routes: Routes =[
    /*{ path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },*/
     { path: '',          component: LoginComponent },
    { path: 'users',          component: UsersComponent },
    { path: '', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
