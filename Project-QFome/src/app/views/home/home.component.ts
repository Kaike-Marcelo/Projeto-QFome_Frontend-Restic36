import { Component } from '@angular/core';
import { ContainerImgComponent } from "../../componentes/container-img/container-img.component";
import { HeaderComponent } from "../../componentes/header/header.component";
import { ButtonComponent } from "../../componentes/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerImgComponent, HeaderComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
