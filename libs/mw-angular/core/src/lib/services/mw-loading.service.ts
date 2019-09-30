import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subscriber } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MwLoadingService {
  private isLoadingSubjectsPool: { [tag: string]: BehaviorSubject<number> } = {};
  private readonly generalTag = 'general';
  private readonly debounceTime = 100;

  getIsLoading(tag = this.generalTag): Observable<boolean> {
    this.checkAndInitIsLoadingSubject(tag);

    return this.isLoadingSubjectsPool[tag].asObservable().pipe(
      map((value: number) => value > 0),
      distinctUntilChanged(),
      debounceTime(this.debounceTime),
    );
  }

  getIsLoadingGroup(tags = [this.generalTag]): Observable<boolean> {
    const tagsIsLoading: Observable<boolean>[] = tags.map((tag: string) => this.getIsLoading(tag));

    return combineLatest(tagsIsLoading).pipe(
      map((loadings: boolean[]) => loadings.some((loader: boolean) => loader)),
      distinctUntilChanged(),
      debounceTime(this.debounceTime),
    );
  }

  startObservable(tag = this.generalTag): Observable<void> {
    return new Observable((subscriber: Subscriber<void>) => {
      this.start(tag);

      subscriber.next();
      subscriber.complete();

      return () => {};
    });
  }

  start(tag = this.generalTag): void {
    this.checkAndInitIsLoadingSubject(tag);

    this.isLoadingSubjectsPool[tag].next(this.isLoadingSubjectsPool[tag].value + 1);
  }

  stop(tag = this.generalTag): void {
    if (this.isLoadingSubjectsPool[tag] === undefined) {
      throw new Error(`Loading subject was not created for tag: ${tag}.`);
    }

    if (this.isLoadingSubjectsPool[tag].value > 0) {
      this.isLoadingSubjectsPool[tag].next(this.isLoadingSubjectsPool[tag].value - 1);
    }
  }

  destroy(tag = this.generalTag): void {
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
