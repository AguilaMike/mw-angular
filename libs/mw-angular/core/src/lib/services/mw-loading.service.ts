import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MwLoadingService {
  private isLoadingSubjectsPool: { [tag: string]: BehaviorSubject<number> } = {};

  getIsLoading(tag = 'general'): Observable<boolean> {
    this.checkAndInitIsLoadingSubject(tag);

    return this.isLoadingSubjectsPool[tag].asObservable().pipe(
      map((value: number) => value > 0),
      distinctUntilChanged(),
      debounceTime(100),
    );
  }

  startObservable(tag = 'general'): Observable<void> {
    return new Observable((subscriber: Subscriber<void>) => {
      this.start(tag);

      subscriber.next();
      subscriber.complete();

      return () => {};
    });
  }

  start(tag = 'general'): void {
    this.checkAndInitIsLoadingSubject(tag);

    this.isLoadingSubjectsPool[tag].next(this.isLoadingSubjectsPool[tag].value + 1);
  }

  stop(tag = 'general'): void {
    if (this.isLoadingSubjectsPool[tag] === undefined) {
      throw new Error(`Loading subject was not created for tag: ${tag}.`);
    }

    if (this.isLoadingSubjectsPool[tag].value > 0) {
      this.isLoadingSubjectsPool[tag].next(this.isLoadingSubjectsPool[tag].value - 1);
    }
  }

  destroy(tag = 'general'): void {
    if (this.isLoadingSubjectsPool[tag] !== undefined) {
      this.isLoadingSubjectsPool[tag].next(0);
      this.isLoadingSubjectsPool[tag].complete();
      delete this.isLoadingSubjectsPool[tag];
    }
  }

  private checkAndInitIsLoadingSubject(tag: string): void {
    if (this.isLoadingSubjectsPool[tag] === undefined) {
      this.isLoadingSubjectsPool[tag] = new BehaviorSubject<number>(0);
    }
  }
}
