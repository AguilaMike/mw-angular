import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mw-complex-filter-material-element-text-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-element-text-label.component.html',
  styleUrls: ['./mw-complex-filter-material-element-text-label.component.scss'],
})
export class MwComplexFilterMaterialElementTextLabelComponent {
  @Input() label: string;
  @Input() value: string;
  @Input() emptyValuePlaceholder: string;
}
