import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-complex-filter-material-element-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-element-overlay.component.html',
  styleUrls: ['./mw-complex-filter-material-element-overlay.component.scss'],
})
export class MwComplexFilterMaterialElementOverlayComponent {
  @Input() overlayOrigin: CdkOverlayOrigin;
  @Input() isOpened = false;

  @Output() closeEvent = new EventEmitter<void>();
}
