import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  title = "my-first-angular-application";
  heading = "Hyse Academy";
  array = [1, 2, 3, 4];

  hello() {
    alert(this.title);
  }
  gotoprofile() {
    this.router.navigate(["/profile"]);
  }

  gotodemo() {
    this.router.navigate(["/demo"]);
  }
}
