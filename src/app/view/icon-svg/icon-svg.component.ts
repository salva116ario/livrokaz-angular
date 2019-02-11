import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.css']
})
export class IconSvgComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'padlock locked',
      sanitizer.bypassSecurityTrustUrl('../../../assets/icon/lock-512.png')
    );
    iconRegistry.addSvgIcon(
      'padlock',
      sanitizer.bypassSecurityTrustUrl('../../../assets/icon/padlock-icon-vector.jpg')
    );
  }


}
