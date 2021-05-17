import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { BookingBusComponent } from './booking-bus/booking-bus.component';
import { BookingSearchComponent } from './booking-search/booking-search.component';
import { BookingViewComponent } from './booking-view/booking-view.component';
import { ConformBookingComponent } from './conform-booking/conform-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [BookingBusComponent,BookingSearchComponent,BookingViewComponent,ConformBookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
 
    
  ]
})
export class BookingModule { }
