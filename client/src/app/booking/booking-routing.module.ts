import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingBusComponent } from './booking-bus/booking-bus.component';
import { BookingSearchComponent } from './booking-search/booking-search.component';
import { BookingViewComponent } from './booking-view/booking-view.component';
import { ConformBookingComponent } from './conform-booking/conform-booking.component';

const routes: Routes = [
  {
    path:"", component:BookingSearchComponent
  },
  {
    path:"view", component:BookingViewComponent
  },
  {
    path:"conform", component:ConformBookingComponent
  },
  {
    path:"booking", component:BookingBusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
