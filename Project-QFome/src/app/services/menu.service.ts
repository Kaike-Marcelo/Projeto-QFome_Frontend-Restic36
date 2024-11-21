import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { Items } from '../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private allItems: Items[] = [
    { id: 1, categoryId: 1, title: 'X-Alface-Premium', price: '25,00', ingredients: 'Pão, Hambúrguer vegano e alface', description: 'Um hambúrguer delicioso e saudável feito com grão-de-bico, acompanhado de vegetais frescos e um molho especial vegano.' },
    { id: 2, categoryId: 1, title: 'X-Tomate', price: '28,00', ingredients: 'Pão, Hambúrguer vegano e tomate', description: 'Hambúrguer de tofu grelhado com um toque oriental, servido com vegetais crocantes e molho teriyaki vegano.' },
    { id: 3, categoryId: 1, title: 'X-Frutas', price: '30,00', ingredients: 'Pão, Hambúrguer, alface, tomate, maçã, pêra, uva e abaxaxi', description: 'Hambúrguer de cogumelos com um toque de shoyu, acompanhado de vegetais frescos e molho de mostarda e mel vegano.' },
    { id: 4, categoryId: 2, title: 'Chicken Fit', price: '27,00', ingredients: 'Hambúrguer de frango grelhado, alface, tomate, abacate, molho de iogurte.', description: 'Hambúrguer de frango grelhado, leve e saboroso, acompanhado de alface, tomate e abacate, com um toque de molho de iogurte.' },
    { id: 5, categoryId: 2, title: 'Quinoa Power', price: '26,00', ingredients: 'Hambúrguer de quinoa, espinafre, tomate, pepino, molho de tahine.', description: 'Hambúrguer nutritivo de quinoa, servido com espinafre fresco, tomate e pepino, finalizado com um delicioso molho de tahine.' },
    { id: 6, categoryId: 3, title: 'Mega Bacon', price: '35,00', ingredients: 'Hambúrguer de carne bovina, bacon crocante, queijo cheddar, cebola caramelizada, molho barbecue', description: 'Um hambúrguer indulgente com carne bovina suculenta, bacon crocante, queijo cheddar derretido e cebola caramelizada, finalizado com molho barbecue.' },
    { id: 7, categoryId: 3, title: 'Double Trouble', price: '40,00', ingredients: 'Dois hambúrgueres de carne bovina, queijo cheddar, bacon, alface, tomate, maionese especial.', description: 'Para os amantes de hambúrgueres, dois hambúrgueres de carne bovina com queijo cheddar, bacon, alface e tomate, tudo isso com uma maionese especial.' },
    { id: 8, categoryId: 4, title: 'Super Combo', price: '36,00', ingredients: 'Hambúrguer de carne bovina, queijo cheddar, presunto, bacon, alface, tomate, cebola, molho especial', description: 'Um hambúrguer luxuoso com carne bovina, queijo cheddar, presunto, bacon, alface, tomate e cebola, finalizado com um molho especial.' }
  ];

  constructor() { }

  getCategory(): Category[] {
    return [
      { id: 1, name: 'X-Vegan', ingredients: 'Opções sem carne, feitas com ingredientes como grão-de-bico, feijão preto, cogumelos ou tofu, acompanhados de vegetais frescos e molhos veganos.' },
      { id: 2, name: 'X-Fitnnes', ingredients: 'Opções com ingredientes mais leves e saudáveis, como pão integral, hambúrguer de frango, peito de peru, queijo branco, molhos light e vegetais frescos.' },
      { id: 3, name: 'X-Infarto', ingredients: 'Opções com ingredientes mais calóricos e gordurosos, como pão com gergelim, hambúrguer de carne bovina, bacon, queijo cheddar, molho barbecue e vegetais fritos.' },
      { id: 4, name: 'X-Tudo', ingredients: 'Opções com todos os ingredientes disponíveis, como pão com gergelim, hambúrguer de carne bovina, bacon, queijo cheddar, molho barbecue, vegetais frescos e fritos, ovo frito e batata palha.' }
    ];
  }

  getItemsByCategory(categoryId: number): Items[] {
    return this.allItems.filter(item => item.categoryId === categoryId);
  }

  getItemById(itemId: number): Items | undefined {
    return this.allItems.find(item => item.id === itemId);
  }
}
