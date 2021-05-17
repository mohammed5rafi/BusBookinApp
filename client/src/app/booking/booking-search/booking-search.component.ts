import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.scss']
})
export class BookingSearchComponent implements OnInit {
  coachType:any=null;
  public searchFrom = new FormGroup({
    Bustype:new FormControl(''),
    From:new FormControl(''),
    To:new FormControl('')
  })
  constructor(private tosterService:ToastrService,private route:Router,private bookingSerchService:BookingService) { }

  async ngOnInit() {
   await this.GetCoachType();
  }

  onSearch(){
    console.log('hai');
   this.route.navigate['booking'];
  }

  async GetCoachType(){
  await this.bookingSerchService.GetCoachTypeData().toPromise().then(
    (res)=>{
      this.coachType = res;
      console.log(res);
    },
    (error)=>{
    this.tosterService.error("data is not avalible");
    }
  );

}
}
