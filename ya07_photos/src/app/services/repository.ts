import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Portrait } from "./portrait";
import { Observable } from "rxjs";

const URL = "photos/gallery.json"

@Injectable({providedIn: "root"})
export class PortraitRepository {
    http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    getPortraits(): Observable<Portrait[]> {
        return this.http.get<Portrait[]>(URL);
    }
}