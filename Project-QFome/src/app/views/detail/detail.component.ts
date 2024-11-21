import { Component } from '@angular/core';
import { Items } from '../../interfaces/items';
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../../componentes/header/header.component";
import { CardComponent } from "../../componentes/card/card.component";
import { ButtonComponent } from "../../componentes/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, ButtonComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  categoryId: number = 0;
  categoryName: string = '';
  itemsMenu: Items[] = [];

  visibleItems: Items[] = [];
  showAll: boolean = false;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.categoryId = +id;
        const category = this.menuService.getCategory().find(cat => cat.id === this.categoryId);
        if (category) {
          this.categoryName = category.name;
        }
        this.itemsMenu = this.menuService.getItemsByCategory(this.categoryId);
      }
    });

    this.visibleItems = this.itemsMenu.slice(0, 3)
  }


  toggleShowAll() {
    this.showAll = !this.showAll;
    this.visibleItems = this.showAll ? this.itemsMenu : this.itemsMenu.slice(0, 3);
  }

  goToProduct(itemId: number) {
    this.router.navigate(['/product', itemId]);
  }
}
