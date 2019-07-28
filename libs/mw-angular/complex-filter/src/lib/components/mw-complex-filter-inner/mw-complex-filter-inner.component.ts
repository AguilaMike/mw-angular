import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  MwComplexFilterExpandedPortalModel,
  MwComplexFilterPortalModel,
} from '../../entities/mw-complex-filter-portal-model';

@Component({
  selector: 'mw-complex-filter-inner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-inner.component.html',
  styleUrls: ['./mw-complex-filter-inner.component.scss'],
})
export class MwComplexFilterInnerComponent {
  @Input() resetButtonPortal: ComponentPortal<any>;
  @Input() fixedPortalModels: MwComplexFilterPortalModel[] = [];
  @Input() shownPortalModels: MwComplexFilterExpandedPortalModel[] = [];

  trackByFn(_index: number, item: MwComplexFilterPortalModel): string | number {
    return item.id;
  }
}
