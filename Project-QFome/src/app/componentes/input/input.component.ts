import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Input() productId: string = '';
  @Input() productName: string = '';
  @Input() quantityId: string = '';
  @Input() quantityName: string = '';
}
