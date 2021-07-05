import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ObjectUnsubscribedError, Observable, of, Observer } from "rxjs";
import { HeroService } from "../hero.service";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private service: HeroService) {}
  data = [];
  sequence;
  ngOnInit() {
    // Create a new Observable that will deliver the above sequence
    this.sequence = new Observable(this.sequenceSubscriber);
    this.sequence.subscribe({
      next(num) {
        console.log(num);
      },
      complete() {
        console.log("Finished sequence");
      }
    });
    // const data = of(1, 2, 3, 4);
    // const observer = {
    //   next: x => {
    //     console.log("number is ", x);
    //   },
    //   error: err => {
    //     console.log("error is ", err);
    //   },
    //   complete: () => {
    //     console.log("its complete");
    //   }
    // };
    // data.subscribe(observer);
    // this.getAlbums();
    this.getPost();
  }

  ngOnDestroy() {
    this.sequence.unsubscribe();
  }
  title = "hyse academy";
  secondnumber: Number = 4;
  birthday = new Date();
  firstnumber: Number = 5;
  lastname = "academy";
  model: any = {};

  albumData;
  post;
  color = new FormControl("hello", [Validators.required]);

  hello() {
    this.color.setValue("blue");
  }
  onSubmit() {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.model));
  }

  sequenceSubscriber(observer: Observer<number>) {
    const seq = [1, 2, 3];
    let timeoutId: any;

    // Will run through an array of numbers, emitting one value
    // per second until it gets to the end of the array.
    function doInSequence(arr: number[], idx: number) {
      timeoutId = setTimeout(() => {
        // calling a timeout
        observer.next(arr[idx]);
        if (idx === arr.length - 1) {
          observer.complete();
        } else {
          doInSequence(arr, ++idx);
        }
      }, 3000);
    }

    doInSequence(seq, 0);

    // Unsubscribe should clear the timeout to stop execution
    return {
      unsubscribe() {
        clearTimeout(timeoutId);
      }
    };
  }

  getAlbums() {
    this.service.getAlbums().subscribe(res => {
      console.log(res);
      this.albumData = res;
    });
  }
  getPost() {
    this.service.getAlbumsbyid(1).subscribe(res => {
      console.log(res);
      this.post = res;
    });
  }
}
