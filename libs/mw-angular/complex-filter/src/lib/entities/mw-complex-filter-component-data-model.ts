import { BehaviorSubject } from 'rxjs';

export interface MwComplexFilterComponentDataModel {
  id: string;
  control: BehaviorSubject<any>;
  [key: string]: any;
}
