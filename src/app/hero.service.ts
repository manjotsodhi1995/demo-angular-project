import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private http: HttpClient) {}

  getAlbums(id) {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/" + id);
  }
}
