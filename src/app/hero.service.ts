import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Hero } from './hero';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroesUrl = 'api/heroes';  

  constructor(private http: HttpClient) { }
  
  get(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  post(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  }

  delete(id: number): Observable<unknown> {
    const url = `${this.heroesUrl}/${id}`; 
    return this.http.delete(url, httpOptions);
  }

  put(hero: Hero): Observable<Hero> { 
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put<Hero>(url, hero, httpOptions)
  }

  patchName(id:number, heroName: string): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.patch<Hero>(url, { name: heroName }, httpOptions)
  }

}
