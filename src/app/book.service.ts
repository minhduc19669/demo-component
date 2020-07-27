import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly url = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book> {
    return this.http.get<Book>(this.url);
  }
  update(id: number, book: any) {
    return this.http.put(this.url + '/' + id, book);
  }

  create(book: any): Observable<Book[]> {
    return this.http.post<Book[]>(this.url, book);
  }
  delete(id: number) {
    return this.http.delete<Book>(this.url + '/' + id);
  }
  findBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.url + '/' + id);
  }
}
