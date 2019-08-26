import { Language } from '../entities/language';

export class AcceptedLanguagesService {
  getAcceptedLangs(): Language[] {
    return [
      {
        id: 'en',
        label: 'En',
      },
      {
        id: 'ru',
        label: 'Ru',
      },
    ];
  }

  getDefaultLangId(): string {
    return this.getAcceptedLangs()[0].id;
  }

  getAcceptedLangIds(): string[] {
    return this.getAcceptedLangs().map((lang: Language) => lang.id);
  }
}
