import { Component } from '@angular/core';
import { LayoutUiCorePage } from '@nx/layouts';
import {NavbarComponent} from '@nx/navbar';
import {FooterDirective} from '@nx/prevalent';
@Component({
  standalone: true,
  imports: [LayoutUiCorePage, NavbarComponent, FooterDirective],
  selector: 'angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'best-practices';
}
