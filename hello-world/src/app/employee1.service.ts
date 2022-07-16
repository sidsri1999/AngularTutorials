import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Employee1Service {

  private _url = "assets/data/employees.json";
  private _urlNotPresent = "assets/data/thisDoesNotExists.json";

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

  getEmployeesWithError(){
    return this.http.get<IEmployee[]>(this._urlNotPresent).pipe(
      catchError(this.errorHandlerMethod)
    );
  }

  errorHandlerMethod(error: HttpErrorResponse){
     return throwError(() => new Error(error.message || 'server Error'));
  }
}
