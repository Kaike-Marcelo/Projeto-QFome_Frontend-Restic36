import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { CardComponent } from "../../componentes/card/card.component";
import { ButtonComponent } from "../../componentes/button/button.component";
import { Category } from '../../interfaces/category';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HeaderComponent, CardComponent, ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  categories: Category[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.categories = this.menuService.getCategory();
  }

}
