import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { InputComponent } from "../../componentes/input/input.component";
import { ButtonComponent } from "../../componentes/button/button.component";
import { Items } from '../../interfaces/items';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [HeaderComponent, InputComponent, ButtonComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  order: Items | undefined;
  constructor(private route: ActivatedRoute, private menuService: MenuService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        const orderId = +id; this.order = this.menuService.getItemById(orderId);
        if (this.order) {
          this.populateForm(this.order);

        }
      }
    });
  }

  populateForm(order: Items): void {
    (document.getElementById('produto1') as HTMLInputElement).value = order.title;
    (document.getElementById('quantidade1') as HTMLInputElement).value = "";
    (document.getElementById('observacao') as HTMLTextAreaElement).value = order.description;
  }
}
