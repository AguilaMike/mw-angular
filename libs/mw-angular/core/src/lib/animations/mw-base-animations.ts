import { animateChild, AnimationTriggerMetadata, query, transition, trigger } from '@angular/animations';

export const mwBaseAnimations: {
  readonly removableChildWrap: AnimationTriggerMetadata;
} = {
  /**
   * This animation ensures child animations is called when
   * closing removing parent from DOM.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  removableChildWrap: trigger('removableChildWrap', [
    transition(':leave', query('@*', [animateChild()], { optional: true })),
  ]),
};
