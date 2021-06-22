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
  array = [1, 2, 3, 4, 5, 6, 7];
  array2 = [" good morning ", "good evening ", "good night"];
  showProfile = false;
  showTitle = false;
  color = "red";
  status1 = "Offline";
  status2 = "Online";

  cars = [
    {
      name: "Mg hector",
      color: "blue"
    },
    {
      name: "Ford",
      color: "red"
    }
  ];

  hello() {
    alert(this.title);
  }
  gotoprofile() {
    this.router.navigate(["/profile"]);
  }

  gotodemo() {
    this.router.navigate(["/demo"]);
  }

  changetext() {
    this.showProfile = !this.showProfile;
  }
  getColor(status) {
    return status === "Online" ? "green" : "red";
  }
}
