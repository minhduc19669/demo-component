import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from './post';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API_URL:'http://jsonplaceholder.typicode.com/posts';


  constructor(private httpClient:HttpClient) { }
  // @ts-ignore


  getPosts(count=10):Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.API_URL).pipe(
      map(response=>response.filter((post,i)=>i<count))
    );
  }

}
