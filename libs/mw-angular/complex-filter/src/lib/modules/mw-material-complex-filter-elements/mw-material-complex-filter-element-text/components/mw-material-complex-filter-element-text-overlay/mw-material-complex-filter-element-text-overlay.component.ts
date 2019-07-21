import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-material-complex-filter-element-text-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-material-complex-filter-element-text-overlay.component.html',
  styleUrls: ['./mw-material-complex-filter-element-text-overlay.component.scss'],
})
export class MwMaterialComplexFilterElementTextOverlayComponent {
  @Input() value: string;

  @Output() changeValueEvent = new EventEmitter<string>();
}
