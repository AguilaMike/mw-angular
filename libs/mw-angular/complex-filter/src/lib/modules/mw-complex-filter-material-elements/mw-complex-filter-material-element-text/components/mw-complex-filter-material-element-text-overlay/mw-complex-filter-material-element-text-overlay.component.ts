import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-complex-filter-material-element-text-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-element-text-overlay.component.html',
  styleUrls: ['./mw-complex-filter-material-element-text-overlay.component.scss'],
})
export class MwComplexFilterMaterialElementTextOverlayComponent {
  @Input() value: string;

  @Output() changeValueEvent = new EventEmitter<string>();
}
