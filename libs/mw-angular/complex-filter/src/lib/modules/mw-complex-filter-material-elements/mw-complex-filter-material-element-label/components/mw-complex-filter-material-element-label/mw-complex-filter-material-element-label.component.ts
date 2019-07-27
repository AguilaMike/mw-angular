import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-complex-filter-material-element-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-element-label.component.html',
  styleUrls: ['./mw-complex-filter-material-element-label.component.scss'],
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
      transition('opened <=> closed', animate('0.15s')),
    ]),
  ],
})
export class MwComplexFilterMaterialElementLabelComponent {
  @Input() isOpened = false;

  @Output() openEvent = new EventEmitter<void>();
}
