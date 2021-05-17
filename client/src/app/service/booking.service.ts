import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API_URL= environment.ApiUrl
@Injectable({
  providedIn: 'root'
})
export class BookingService {

constructor(private http:HttpClient) { }


GetCoachTypeData():Observable<any>{
  return this.http.get<any>(`${API_URL}/BookingSearch`);
}

}

