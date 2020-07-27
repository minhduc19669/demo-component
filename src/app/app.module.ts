import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFinalComponent } from './register-final/register-final.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { LoginStep1Component } from './login-step1/login-step1.component';
import { LoginStep2Component } from './login-step2/login-step2.component';
//import {UserModule} from './user/user.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogModule } from './blog/blog.module';
import { RouteProductComponent } from './route-product/route-product.component';
import { IonicModule } from '@ionic/angular';
import { UserModule } from './user/user.module';
import { BookComponent } from './book/book.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    RegisterComponent,
    RegisterFinalComponent,
    LoginComponent,
    LoginStep1Component,
    LoginStep2Component,
    RouteProductComponent,
    BookComponent,
    BookCreateComponent,
    BookEditComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    //UserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BlogModule,
    IonicModule.forRoot(),
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
