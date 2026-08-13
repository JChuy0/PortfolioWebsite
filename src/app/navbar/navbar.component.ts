import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    // styles: ` * { border: 2px solid black }`
    styleUrl: './navbar.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink, RouterLinkActive]
})
export class NavbarComponent {

}
