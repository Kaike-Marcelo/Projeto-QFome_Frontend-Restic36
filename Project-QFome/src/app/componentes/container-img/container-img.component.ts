import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-img.component.html',
  styleUrl: './container-img.component.css'
})
export class ContainerImgComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
