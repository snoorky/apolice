import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent {
  nome: string = "";
  sexo: string = "";
  idade: number | null = null;
  valorAutomovel: number | null = null;
  valorApolice: string = "";

  calcularApolice() {
    if (!this.valorAutomovel) {
      this.valorApolice = "0";
      return;
    }

    if (this.sexo === "masculino" && this.idade && this.idade <= 25) {
      this.valorApolice = (this.valorAutomovel * 0.15).toFixed(2);
    } else if (this.sexo === "masculino") {
      this.valorApolice = (this.valorAutomovel * 0.10).toFixed(2);
    } else if (this.sexo === "feminino") {
      this.valorApolice = (this.valorAutomovel * 0.08).toFixed(2);
    }
    this.valorApolice = "R$" + this.valorApolice;
  }
}