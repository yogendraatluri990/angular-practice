import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'nx-layout-ui-core',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout-ui-core.page.html',
  styleUrls: ['./layout-ui-core.page.scss'],
})
export class LayoutUiCorePage {}
