import { animate, style, transition, trigger } from '@angular/animations';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-complex-filter-material-element-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-element-overlay.component.html',
  styleUrls: ['./mw-complex-filter-material-element-overlay.component.scss'],
  animations: [
    trigger('transformPanel', [transition(':enter', [style({ opacity: 0 }), animate('0.15s', style({ opacity: 1 }))])]),
  ],
})
export class MwComplexFilterMaterialElementOverlayComponent {
  @Input() overlayOrigin: CdkOverlayOrigin;
  @Input() isOpened = false;

  @Output() closeEvent = new EventEmitter<void>();
}
