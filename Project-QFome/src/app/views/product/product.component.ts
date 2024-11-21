import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { Items } from '../../interfaces/items';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';
import { ContainerImgComponent } from "../../componentes/container-img/container-img.component";
import { CardComponent } from "../../componentes/card/card.component";
import { ButtonComponent } from "../../componentes/button/button.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, ButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  productId: number = 0;
  product: Items | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productId = +id;
        this.product = this.menuService.getItemById(this.productId);
      }
    });
  }

  goToOrder(product_Id: number) {
    this.router.navigate(['/order', product_Id]);
  }

}
