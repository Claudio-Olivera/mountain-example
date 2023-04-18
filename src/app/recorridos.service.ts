import { Injectable } from '@angular/core';
import {MOCK_RECORRIDOS} from './Pages/recorridos/mockRecorridos'
@Injectable({
  providedIn: 'root'
})
export class RecorridosService {

  constructor() { }

  getRecorridos() {
    return MOCK_RECORRIDOS;
  }

}
