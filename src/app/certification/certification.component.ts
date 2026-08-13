import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Certificate } from '../_models/Certificate';

@Component({
    selector: 'app-certification',
    templateUrl: './certification.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './certification.component.css'
})
export class CertificationComponent {
  @Input() certificate = {} as Certificate;
}
