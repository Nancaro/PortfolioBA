import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit, AfterViewInit {
  educacion = [
    {
      universidad: 'Oracle - Alura Latam',
      titulo: 'Back-end',
      fecha: '2022-2023',
      descripcion: 'Java orientado a objetos, Java y Springboot',
      imagen: './assets/Oracle.png',
      url: 'https://app.aluracursos.com/user/Nancaro/program/certificate'
    },

    {
      universidad: 'UBA - IALAB',
      titulo: 'Datos e IA',
      fecha: 'Feb-2023',
      descripcion: 'ABC IA, ABC datos, cultura de datos, datos a los algoritmos de IA, enfoque ético IA',
      imagen: './assets/DatoseIA.png',
      url: 'https://drive.google.com/file/d/1897AAK2wgxB21fGUYztWQQZHUnYiGHDh/view'
    },

    {
      universidad: 'Python Institute - Cisco',
      titulo: 'Python Essentials',
      fecha: '2023',
      descripcion: 'Descripción',
      imagen: './assets/CiscoPy.png',
      url: 'https://drive.google.com/file/d/1pbeYqA10s-KcezEsSU6EhMB1pLqBtdVj/view?usp=sharing'
    },

    {
      universidad: 'Pearson',
      titulo: 'C1-Advanced',
      fecha: '2022',
      descripcion: 'Cursos de ingles A1, B1, C1, certificados',
      imagen: './assets/EFSET.png',
      url: 'https://www.efset.org/cert/i21P4p'
    },

    {
      universidad: 'Punto de aprendizaje virtual',
      titulo: 'Manejo de Base de Datos',
      fecha: '2022',
      descripcion: 'Evaluación y Big Data, ABC MySQL, Visualización de datos',
      imagen: './assets/DatosPAV.png',
      url: 'https://drive.google.com/file/d/1sgZlTxbmhdYGqNqRhzUl6sLQ1OvYta9x/view?usp=sharing'
    },

    {
      universidad: 'CESSI',
      titulo: 'Perfil web Full Stack Junior',
      fecha: '2021-2022',
      descripcion: 'Conocimientos en front-end y back-end',
      imagen: './assets/ArgPro.png',
      url: 'https://drive.google.com/file/d/1Puzia8PoDyXoTRBvnPKkqiHfiQUBHgZB/view?usp=sharing'
    },
    // Agrega más objetos de educación según sea necesario
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.scrollService.scrollToFragment('educacion');
  }
}