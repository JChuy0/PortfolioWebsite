import { Component, Input } from '@angular/core';
import { Diorama } from '../_models/Diorama';
import { Router } from '@angular/router';

@Component({
    selector: 'app-diorama-card',
    templateUrl: './diorama-card.component.html',
    styleUrl: './diorama-card.component.css'
})

export class DioramaCardComponent {
  @Input() diorama = {} as Diorama;

  constructor(private router: Router) {}

  navigateToDioramaDetails(name: string) {
    // URL is a manifest containing files for a specific diorama
    this.router.navigate(['/creative-corner/diorama', name]);
  }
}
