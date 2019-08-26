import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../cross-platform/languages/entities/language';
import { AcceptedLanguagesService } from '../cross-platform/languages/services/accepted-languages.service';
import { CurrentLanguageService } from './modules/translations/services/current-language.service';

@Component({
  selector: 'app-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppContainerComponent {
  private acceptedLanguagesService: AcceptedLanguagesService;

  constructor(private currentLanguageService: CurrentLanguageService, private translateService: TranslateService) {
    this.acceptedLanguagesService = new AcceptedLanguagesService();

    this.initTranslations();
  }

  private initTranslations(): void {
    this.translateService.setDefaultLang(this.acceptedLanguagesService.getDefaultLangId());

    this.currentLanguageService.getCurrentLang().subscribe((currentLang: Language) => {
      this.translateService.use(currentLang.id);
    });
  }
}
