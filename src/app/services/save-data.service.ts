import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable} from 'rxjs';
import { quotes } from 'src/app/models/quote.mode';
@Injectable({
  providedIn: 'root'
})
export class SaveDataService {
  private baseurl="http://127.0.0.1:8000";
  constructor(private http:HttpClient) { }

  create(quoteData:quotes):Observable<any>{
    return this.http.post(this.baseurl+'/saveData/', quoteData)
  }
}
