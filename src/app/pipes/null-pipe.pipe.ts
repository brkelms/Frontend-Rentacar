import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullPipe'
})
export class NullPipePipe implements PipeTransform {

  transform(value: string ): string {
   if(value != null){
          return value;
   }
   else{
     return "Teslim edimemiş";
   }
  }

}
