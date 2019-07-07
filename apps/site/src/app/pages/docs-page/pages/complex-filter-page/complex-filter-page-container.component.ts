import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MetaService } from '../../../../modules/core/services/meta.service';
import { TRANSLATE } from '../../../../modules/translations/helpers/translation-marker.helper';
import { CurrentLanguageService } from '../../../../modules/translations/services/current-language.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-docs-layout-container>
      <app-complex-filter-page></app-complex-filter-page>
    </app-docs-layout-container>
  `,
})
export class ComplexFilterPageContainerComponent implements OnInit, OnDestroy {
  private destroySubject = new Subject();

  constructor(private metaService: MetaService, private currentLanguageService: CurrentLanguageService) {}

  ngOnInit(): void {
    this.currentLanguageService
      .getCurrentLang()
      .pipe(takeUntil(this.destroySubject))
      .subscribe(() => {
        this.metaService.setTitle(TRANSLATE('ComplexFilterPageContainerComponent.Title'));
      });
  }

  public ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
