import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MwComplexFilterEventModel, MwComplexFilterEventType } from '../entities/mw-complex-filter-event-model';

@Injectable()
export class MwComplexFilterEventBusService {
  private eventBusSubject = new Subject<MwComplexFilterEventModel>();

  emit(eventType: MwComplexFilterEventType, data = {}): void {
    this.eventBusSubject.next({ eventType, data });
  }

  getStream(eventTypes?: MwComplexFilterEventType[]): Observable<MwComplexFilterEventModel> {
    let stream$ = this.eventBusSubject.asObservable();

    if (eventTypes !== undefined) {
      stream$ = stream$.pipe(filter((event: MwComplexFilterEventModel) => eventTypes.includes(event.eventType)));
    }

    return stream$;
  }
}
