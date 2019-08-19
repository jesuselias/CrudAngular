import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HardwareComponent } from './hardware/hardware.component';
import { SoftwareComponent } from './software/software.component';
import { UsersService } from './shared/services/users.service';
import { HardwareService } from './shared/services/hardware.service';
import { SoftwareService } from './shared/services/software.service';

import { HttpClientModule } from '@angular/common/http';
import { AssignmentComponent } from './assignment/assignment.component';
import { ListusersComponent } from './listusers/listusers.component';

import { NgxPaginationModule } from 'ngx-pagination';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    UsersComponent,
    HardwareComponent,
    SoftwareComponent,
    AssignmentComponent,
    ListusersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,HttpClientModule,NgxPaginationModule,BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [UsersService,HardwareService,SoftwareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
