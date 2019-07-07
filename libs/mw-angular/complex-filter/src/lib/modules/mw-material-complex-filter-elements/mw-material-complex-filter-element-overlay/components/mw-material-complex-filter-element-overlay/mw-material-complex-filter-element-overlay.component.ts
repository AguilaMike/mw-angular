import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-material-complex-filter-element-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-material-complex-filter-element-overlay.component.html',
  styleUrls: ['./mw-material-complex-filter-element-overlay.component.scss'],
})
export class MwMaterialComplexFilterElementOverlayComponent {
  @Input() overlayOrigin: CdkOverlayOrigin;
  @Input() isOpened = false;

  @Output() closeEvent = new EventEmitter<void>();
}
