import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private http: HttpClient) {}

  getAlbumsbyid(id) {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/" + id);
  }
  getAlbums() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  createAlbum() {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1
    });
  }
  updateAlbum(id) {
    return this.http.put("https://jsonplaceholder.typicode.com/posts/" + id, {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1
    });
  }
  deleteAlbum(id) {
    return this.http.delete("https://jsonplaceholder.typicode.com/posts/" + id);
  }
}
