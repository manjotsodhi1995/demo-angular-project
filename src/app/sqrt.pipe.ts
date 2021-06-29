import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sqrt"
})
export class SqrtPipe implements PipeTransform {
  transform(number: any): any {
    return Math.sqrt(number);
  }
}
