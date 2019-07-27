import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mw-complex-filter-material-delete-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-delete-button.component.html',
  styleUrls: ['./mw-complex-filter-material-delete-button.component.scss'],
})
export class MwComplexFilterMaterialDeleteButtonComponent {
  @Output() clickEvent = new EventEmitter<void>();
}
