import { animate, state, style, transition, trigger } from '@angular/animations';

export const vortex =
  trigger('routeAnimation', [
    state('void', style({
      opacity: 0
    })),
    transition(':enter', [
      animate(300)
    ])
    ]
  )
