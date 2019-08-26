import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MwCoreModule } from '@mw-angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { environment } from '../environments/environment';
import { AppContainerComponent } from './app-container.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslationsModule } from './modules/translations/translations.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslationsModule,
    MwCoreModule.forRoot(environment),
    AppRoutingModule,
  ],
  declarations: [AppContainerComponent],
  bootstrap: [AppContainerComponent],
})
export class AppModule {}
