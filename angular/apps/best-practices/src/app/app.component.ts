import { Component } from '@angular/core';
import { LayoutUiCorePage } from '@nx/layouts';
import {NavbarComponent} from '@nx/navbar';
@Component({
  standalone: true,
  imports: [LayoutUiCorePage, NavbarComponent],
  selector: 'angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'best-practices';
}
