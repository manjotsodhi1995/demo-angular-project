import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "square"
})
export class SquarePipe implements PipeTransform {
  transform(value): any {
    return value * value;
  }
}
