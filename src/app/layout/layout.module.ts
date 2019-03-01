import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ShareModule} from '../share/share.module';
import {RouterModule} from '@angular/router';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  LayoutComponent,
];


@NgModule({
  imports: [
    CommonModule, ShareModule, RouterModule,
],
  providers: [],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],

})
export class LayoutModule { }
