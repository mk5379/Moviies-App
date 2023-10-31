import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { DetailsComponent } from './details/details.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingComponent,
    DetailsComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavComponent,
    SlideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
