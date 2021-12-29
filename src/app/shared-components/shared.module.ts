import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
 


@NgModule({
  declarations: [
  HeaderComponent,
  FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
   ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
