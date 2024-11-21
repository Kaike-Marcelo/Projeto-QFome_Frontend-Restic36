import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() backgroundColor: string = '';
  @Input() borderColor: string = '';
  //@Input() textColor: string = 'black';
  @Input() label: string = 'button';
  @Input() width: string = 'auto';
  @Input() height: string = 'auto';
}
