import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-data',
    templateUrl: './custom-data.component.html',
    styleUrls: ['./custom-data.component.scss']
})
export class CustomDataComponent {
    public customData: any[] = [1,2,3,4, 'hello', 1,2,3,4, 'hello', 1,2,3,4, 'hello', 1,2,3,4, 'hello', 1,2,3,4, 'hello', 1,2,3,4, 'hello',
    1,2,3,4, 'hello', 1,2,3,4, 'hello', 1,2,3,4, 'hello', 1,2,3,4, 'hello'];
}