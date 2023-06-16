import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { DecoratorNotificationComponent } from '../../components';


@Component({
  selector: 'nx-custom-decorator',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './custom-decorator.page.html',
  styleUrls: ['./custom-decorator.page.scss'],
})
export class CustomDecoratorPage {
  @ViewChild('dynamicContainer', {read: ViewContainerRef}) dynamicContainer!: ViewContainerRef;



  createDynamicContainer(): void {
    /*
     * ComponentFactoryResolver has been deprecated. Now we can simply use ViewContainerRef.
     *  */
    this.dynamicContainer.createComponent(DecoratorNotificationComponent);
  }
}
