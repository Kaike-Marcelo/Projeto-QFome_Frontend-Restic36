import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContainerImgComponent } from '../container-img/container-img.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ContainerImgComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = 'Hamburguer';
  @Input() ingredients: string = 'pão de queijo e amora e amendoim de salsucha e creme com chantili de manteiga ';
}
