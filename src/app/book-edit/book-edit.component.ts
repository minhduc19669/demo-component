import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  editBook: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
  });
  update() {
    const id = this.activatedRoute.snapshot.params['id'];
    const book = this.editBook.value;
    this.bookService.update(id, book).subscribe(
      (next) => {
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSubmit() {
    this.update();
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.bookService.findBookById(id).subscribe((result) => {
      this.editBook.patchValue({
        title: result.title,
        author: result.author,
      });
    });
  }
}
