import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MwComplexFilterComponentModel } from './entities/mw-complex-filter-component-model';
import { MwComplexFilterConfigModel } from './entities/mw-complex-filter-config-model';
import { MwComplexFilterPortalModel } from './entities/mw-complex-filter-portal-model';
import { MwComplexFilterPortalCreationService } from './services/mw-complex-filter-portal-creation.service';

@Component({
  selector: 'mw-complex-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [MwComplexFilterPortalCreationService],
  template: `
    <mw-complex-filter-inner
      [defaultPortalModels]="defaultPortalModelsSubject | async"
      [dynamicPortalModels]="dynamicPortalModelsSubject | async"
    ></mw-complex-filter-inner>
  `,
})
export class MwComplexFilterComponent {
  @Input() set config(config: MwComplexFilterConfigModel) {
    this.defaultPortalModelsSubject.next(
      config.defaultFilters.map((componentModel: MwComplexFilterComponentModel) =>
        this.buildPortalModel(componentModel),
      ),
    );

    if (config.dynamicFilters) {
      this.dynamicPortalModelsSubject.next(
        config.dynamicFilters.map((componentModel: MwComplexFilterComponentModel) =>
          this.buildPortalModel(componentModel),
        ),
      );
    }
  }

  defaultPortalModelsSubject = new BehaviorSubject<MwComplexFilterPortalModel[]>([]);
  dynamicPortalModelsSubject = new BehaviorSubject<MwComplexFilterPortalModel[]>([]);

  constructor(private mwComplexFilterPortalCreationService: MwComplexFilterPortalCreationService) {}

  private buildPortalModel(componentModel: MwComplexFilterComponentModel): MwComplexFilterPortalModel {
    return {
      portal: this.mwComplexFilterPortalCreationService.createPortal(componentModel.component, componentModel.data),
    };
  }
}
