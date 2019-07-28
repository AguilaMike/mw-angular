import { ComponentPortal } from '@angular/cdk/portal';
import { BehaviorSubject } from 'rxjs';

export interface MwComplexFilterPortalModel {
  id: string;
  control: BehaviorSubject<any>;
  filterPortal: ComponentPortal<any>;
  deleteButtonPortal?: ComponentPortal<any>;
}
