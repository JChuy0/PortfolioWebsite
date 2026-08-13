import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    // styles: ` * { border: 2px solid black }`
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
