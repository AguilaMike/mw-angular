import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mw-material-complex-filter-element-text-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-material-complex-filter-element-text-label.component.html',
  styleUrls: ['./mw-material-complex-filter-element-text-label.component.scss'],
})
export class MwMaterialComplexFilterElementTextLabelComponent {
  @Input() label: string;
  @Input() value: string;
  @Input() emptyValuePlaceholder: string;
}
