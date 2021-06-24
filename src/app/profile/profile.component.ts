import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  secondnumber: Number = 4;
  firstnumber: Number = 5;

  favColor = new FormControl("blue");

  hello() {
    alert(this.favColor.value);
  }
}
