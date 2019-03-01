import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestListComponent } from './test-list/test-list.component';
import {RouterModule, Routes} from '@angular/router';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', redirectTo: 'test' },
  { path: 'list', component: TestListComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TestListComponent, TestComponent]
})
export class HomeModule { }
