import { Component } from '@angular/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public navList: string[] = ['main', 'goals', 'resume', 'skills', 'contacts'];

  constructor() {}
}
