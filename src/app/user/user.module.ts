import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  Router,
} from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './list/search/search.component';

const routes: Routes = [
  {
    path: 'users',
    component: ListComponent,
  },
  {
    path: 'users/add',
    component: AddComponent,
  },
  {
    path: 'users/:id/edit',
    component: EditComponent,
  },
];

@NgModule({
  declarations: [ListComponent, AddComponent, EditComponent, SearchComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserModule {}
