import { Injectable } from "@angular/core";

export class Product {
    productID: Number = 0;
    name: string = "";
    productNumber: string = "";
    listPrice: Number = 0.0;
}

@Injectable({providedIn: "root"})
export class ProductRepository {

    url: string = "https://yand.dyndns.org/api/nocors.aspx?target=http://yand.dyndns.org/api/products.aspx"
   
    async getProducts():Promise<Product[]> {
        const response = await fetch(this.url)
        const products: Product[] = await response.json()
        return products;
    }
}