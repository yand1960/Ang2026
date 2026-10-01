import { Component, ChangeDetectorRef } from "@angular/core";
import { ProductRepository, Product } from "../services/repository";

@Component({
  imports: [],
  selector: "app-products1",
  styleUrl: "./products.css",
  templateUrl: "./products.html",
})
export class Products1 {

  private repository: ProductRepository;
  private cdr: ChangeDetectorRef; // чтобы уведомить шаблон об асинхронном изменении данных
  private allProducts: Product[] = [];
  products: Product[] = [];
  status: string = "";

  constructor(repository: ProductRepository, cdr: ChangeDetectorRef){
    this.repository = repository;
    this.cdr = cdr;
    this.status = "идет загрузка";
  }

  doFilter(letters: string) {
    this.products = this.allProducts.filter(
      p => p.name.toLowerCase().startsWith(letters.toLowerCase())
    )
    console.log(letters, this.products);
  }

  async ngOnInit() {
    this.allProducts = await this.repository.getProducts();
    this.products = this.allProducts;
    this.status = `${this.products.length} шт.`;
    this.cdr.markForCheck();
    console.log(this.products);
  }

}
