import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { CardComponent } from "../../componentes/card/card.component";
import { ButtonComponent } from "../../componentes/button/button.component";
import { Category } from '../../interfaces/category';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  categories: Category[] = [];
  visibleItems: Category[] = [];
  showAll: boolean = false;

  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
    this.categories = this.menuService.getCategory();
    this.visibleItems = this.categories.slice(0, 3)
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
    this.visibleItems = this.showAll ? this.categories : this.categories.slice(0, 3);
  }

  goToDetail(categoryId: number) {
    this.router.navigate(['/menu', categoryId]);
  }
}
