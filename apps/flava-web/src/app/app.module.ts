import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ShellModule } from '@flava/web/shell/feature'
import { AppComponent } from './app.component';
import { getAppConfigProvider } from '@flava/web/shared/app-config';
import { errorInterceptorProvider } from '@flava/web/shell/util';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShellModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    getAppConfigProvider(environment),
    errorInterceptorProvider
  ]
})
export class AppModule {}
