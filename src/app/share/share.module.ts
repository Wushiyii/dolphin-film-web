import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';



const THIRDMODULES = [
  NgZorroAntdModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...THIRDMODULES,
  ],
  exports: [
    ...THIRDMODULES
  ],
  declarations: []
})
export class ShareModule { }
