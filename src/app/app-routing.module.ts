import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginStep1Component } from './login-step1/login-step1.component';
import { LoginStep2Component } from './login-step2/login-step2.component';
import { PetComponent } from './pet/pet.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'book/add',
    component: BookCreateComponent,
  },
  {
    path: 'book/:id/edit',
    component: BookEditComponent,
  },
  {
    path: 'book/:id/detail',
    component: BookDetailComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// export const routingComponents =[ListComponent,AddComponent,EditComponent]
