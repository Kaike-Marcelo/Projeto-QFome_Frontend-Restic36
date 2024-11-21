import { Component } from '@angular/core';
import { ContainerImgComponent } from "../../componentes/container-img/container-img.component";
import { HeaderComponent } from "../../componentes/header/header.component";
import { ButtonComponent } from "../../componentes/button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerImgComponent, HeaderComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  goToCategories(): void {
    this.router.navigate(['/menu']);

  }

  goToOrder(): void {
    this.router.navigate(['/order']);

  }
}
