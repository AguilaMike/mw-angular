import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-material-complex-filter-element-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-material-complex-filter-element-label.component.html',
  styleUrls: ['./mw-material-complex-filter-element-label.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'opened',
        style({
          transform: 'rotate(0)',
        }),
      ),
      state(
        'closed',
        style({
          transform: 'rotate(-180deg)',
        }),
      ),
      transition('opened <=> closed', [animate('0.2s')]),
    ]),
  ],
})
export class MwMaterialComplexFilterElementLabelComponent {
  @Input() isOpened = false;

  @Output() openEvent = new EventEmitter<void>();
}
