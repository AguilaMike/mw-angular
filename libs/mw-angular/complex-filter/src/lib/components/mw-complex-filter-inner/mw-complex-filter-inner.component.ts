import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MwComplexFilterPortalModel } from '../../entities/mw-complex-filter-portal.model';

@Component({
  selector: 'mw-complex-filter-inner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-inner.component.html',
  styleUrls: ['./mw-complex-filter-inner.component.scss'],
})
export class MwComplexFilterInnerComponent {
  @Input() defaultPortalModels: MwComplexFilterPortalModel[] = [];
  @Input() dynamicPortalModels: MwComplexFilterPortalModel[] = [];

  @Output() submitValidEvent = new EventEmitter<any>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitValidEvent.emit(this.form.value);
    }
  }

  private initForm(): void {
    this.form = this.formBuilder.group({});
  }
}
