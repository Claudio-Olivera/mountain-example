import { Component } from '@angular/core';
import { RecorridosService } from 'src/app/recorridos.service';

@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.component.html',
  styleUrls: ['./recorridos.component.css']
})
export class RecorridosComponent {
public data:any;
  constructor(private recorridos: RecorridosService){}
      ngOnInit():void{
        this.data = this.recorridos.getRecorridos()
      }
}
