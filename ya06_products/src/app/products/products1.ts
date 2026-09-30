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
  products: Product[] = [];

  constructor(repository: ProductRepository, cdr: ChangeDetectorRef){
    this.repository = repository;
    this.cdr = cdr;
  }

  async ngOnInit() {
    this.products = await this.repository.getProducts();
    this.cdr.markForCheck(); 
    console.log(this.products);
  }

}
