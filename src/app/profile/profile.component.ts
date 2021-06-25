import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  title = "hyse academy";
  secondnumber: Number = 4;
  firstnumber: Number = 5;
  lastname = "academy";
  model: any = {};

  color = new FormControl("hello", [Validators.required]);

  hello() {
    this.color.setValue("blue");
  }
  onSubmit() {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.model));
  }
}
