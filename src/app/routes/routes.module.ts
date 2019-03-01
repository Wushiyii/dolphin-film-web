import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from '../layout/layout.module';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', loadChildren: './home/home.module#HomeModule'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forRoot(routes, { useHash: true})
  ],
  declarations: []
})
export class RoutesModule { }
