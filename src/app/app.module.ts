import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {RoutesModule} from './routes/routes.module';
import {LayoutModule} from './layout/layout.module';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ProvidersModule} from './service/provider.module';
import {ShareModule} from './share/share.module';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutesModule,
    LayoutModule,
    ShareModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers : [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
