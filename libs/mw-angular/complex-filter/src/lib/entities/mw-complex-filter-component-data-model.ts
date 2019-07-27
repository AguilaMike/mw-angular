import { BehaviorSubject } from 'rxjs';

export interface MwComplexFilterComponentDataModel {
  id: string;
  label: string;
  control: BehaviorSubject<any>;
}
