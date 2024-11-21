import { Component } from '@angular/core';
import { ContainerImgComponent } from "../container-img/container-img.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ContainerImgComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
