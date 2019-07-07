import { HttpClient } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MwPlatformService } from '@mw-angular/core';
import { TranslateServerLoader } from './loaders/translate-server-loader';
import { CurrentLanguageService } from './services/current-language.service';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: LoaderFactory,
        deps: [MwPlatformService, HttpClient],
      },
    }),
  ],
})
export class TranslationsModule {
  constructor(
    @Optional() @SkipSelf() parentModule: TranslationsModule,
    currentLanguageService: CurrentLanguageService,
  ) {
    if (parentModule) {
      throw new Error(`TranslationsModule has already been loaded. Import it in the AppModule only.`);
    }

    currentLanguageService.init();
  }
}

export function LoaderFactory(mwPlatformService: MwPlatformService, httpClient: HttpClient): TranslateLoader {
  let translateLoader: TranslateLoader;

  if (mwPlatformService.isServer()) {
    translateLoader = new TranslateServerLoader();
  } else if (mwPlatformService.isBrowser()) {
    translateLoader = new TranslateHttpLoader(httpClient);
  } else {
    throw new Error('Unknown platform.');
  }

  return translateLoader;
}
