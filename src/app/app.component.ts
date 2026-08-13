import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NavbarComponent, RouterOutlet]
})
export class AppComponent {
  title = "new website title"
}
