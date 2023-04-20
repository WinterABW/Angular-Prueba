import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  equipo: any[] = [
    {
      name: 'Winter',
      especilidad: 'Html',
      desc: 'Hell, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus saepe quod eaque quibusdam ad vel cum, amet quae illum eius? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ipsa possimus facere dolores temporibus repellendus ratione? Ipsam eius necessitatibus inventore repellendus fugit porro magnam ad similique natus? Non accusantium sit optio ea sint nulla impedit eum, eius dolor voluptates rem illum facere ut. Corporis ratione aliquam voluptatibus, qui delectus placeat?',
    },
    {
      name: 'Lizandra',
      especilidad: 'CSS',
      desc: 'Heaven, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus saepe quod eaque quibusdam ad vel cum, amet quae illum eius? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ipsa possimus facere dolores temporibus repellendus ratione? Ipsam eius necessitatibus inventore repellendus fugit porro magnam ad similique natus? Non accusantium sit optio ea sint nulla impedit eum, eius dolor voluptates rem illum facere ut. Corporis ratione aliquam voluptatibus, qui delectus placeat?',
    },
    {
      name: 'Enki',
      especilidad: 'Javascript',
      desc: 'Another World, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus saepe quod eaque quibusdam ad vel cum, amet quae illum eius? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ipsa possimus facere dolores temporibus repellendus ratione? Ipsam eius necessitatibus inventore repellendus fugit porro magnam ad similique natus? Non accusantium sit optio ea sint nulla impedit eum, eius dolor voluptates rem illum facere ut. Corporis ratione aliquam voluptatibus, qui delectus placeat?',
    },
  ];

  constructor() {
    console.log('Servicio funcionando!');
  }

  getEquipo() {
    return this.equipo;
  }

  getByIndex(i: any) {
    return this.equipo[i];
  }
}
