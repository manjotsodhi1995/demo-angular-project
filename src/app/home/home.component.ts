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
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  array2 = [" good morning ", "good evening ", "good night"];
  showProfile = true;
  showTitle = true;
  color = "red";
  status1 = "Offline";
  status2 = "Online";
  employee = {
    name: "John Doe",
    email: "john@gmail.com"
  };
  user = [
    {
      name: "john",
      status: "online"
    },
    {
      name: "ram",
      status: "offline"
    },
    {
      name: "john",
      status: "online"
    },
    {
      name: "sham",
      status: "online"
    },
    {
      name: "shareef",
      status: "offline"
    },
    {
      name: "parveen",
      status: "offline"
    }
  ];
  cars = [
    {
      name: "Mg hector"
    },
    {
      name: "Ford"
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
  sample(status) {
    return status === "Online" ? "green" : "red";
  }
  ondiv() {
    console.log("div is called");
  }
  onsave(event) {
    console.log("button is clicked", event);
  }
}
