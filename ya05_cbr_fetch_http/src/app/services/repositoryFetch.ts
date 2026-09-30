import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class CbrFetchRepository {
    private url = "https://www.cbr-xml-daily.ru/daily_json.js";

    async getAllRates():Promise<any> {
        const response = await fetch(this.url);
        const result = await response.json();
        console.log(result);
        return result;
    }

}