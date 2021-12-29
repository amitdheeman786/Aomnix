import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-components/shared.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
