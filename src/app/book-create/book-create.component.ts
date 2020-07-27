import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
})
export class BookCreateComponent implements OnInit {
  constructor(
    private router: Router,
    private bookService: BookService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}
  addBook: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  create() {
    const book = this.addBook.value;
    console.log(book);
    this.bookService.create(book).subscribe((next) => {
      this.router.navigate(['']);
    });
  }

  onSubmit() {
    this.create();
  }
  ngOnInit(): void {}
}
