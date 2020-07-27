import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { from } from 'rxjs';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  listBook: Book;
  constructor(
    private router: Router,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.bookService.getAll().subscribe((result) => {
      this.listBook = result;
    });
  }
  delete(id: number) {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này?') == true) {
      this.bookService.delete(id).subscribe((next) => {
        location.reload();
      });
    }
  }
}
