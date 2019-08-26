import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MetaService } from '../../modules/core/services/meta.service';
import { TRANSLATE } from '../../modules/translations/helpers/translation-marker.helper';
import { CurrentLanguageService } from '../../modules/translations/services/current-language.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-server-error code="404" [description]="pageTitle$ | async"></app-server-error>
  `,
})
export class NotFoundPageContainerComponent implements OnInit, OnDestroy {
  pageTitle$: Observable<string>;

  private destroySubject = new Subject();

  constructor(private metaService: MetaService, private currentLanguageService: CurrentLanguageService) {
    this.pageTitle$ = this.metaService.getPageTitle();
  }

  ngOnInit(): void {
    this.currentLanguageService
      .getCurrentLang()
      .pipe(takeUntil(this.destroySubject))
      .subscribe(() => {
        this.metaService.setTitle(TRANSLATE('NotFoundPageContainerComponent.Title'));
      });
  }

  public ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
