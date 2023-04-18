import { Cliente } from './../models/Cliente.model';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClientesService } from '../services/clientes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  listaClientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) {
    this.buscarClientes()
  }

  buscarClientes(){
    this.clientesService.getAll().subscribe(dados => {
      this.listaClientes = dados as Cliente[];
    });
  }
}
