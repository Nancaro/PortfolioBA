import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit, AfterViewInit {
  proyectos = [
    {
      nombre: 'Desencriptador Alura',
      imagen: './assets/Encriptador.png',
      descripcion: 'Este es un programa hecho con HTML, CSS, JS que permite encriptar y desencriptar texto.',
      githubUrl: 'https://github.com/Nancaro/Challenge-Oracle-ONE',
      vistaUrl: 'https://nancaro.github.io/Challenge-Oracle-ONE/',
      tiempo: '2023-06-18',
    },
    {
      nombre: 'Conversor',
      imagen: './assets/Conversor.png',
      descripcion: 'Esta es una aplicación hecha con JAVA que permite realizar conversiones de divisas y temperaturas.',
      githubUrl: 'https://github.com/Nancaro/Challenge-Oracle-One-2',
      vistaUrl: 'https://github.com/Nancaro/Challenge-Oracle-One-2',
      tiempo: '2023-06-18',
    },
    {
      nombre: 'Calculadora',
      imagen: './assets/Calculadora.png',
      descripcion: 'Esta es una aplicación hecha con PYTHON y TKINTER que permite realizar calculos básicos.',
      githubUrl: 'https://github.com/Nancaro/Calculadora-basica',
      vistaUrl: 'https://github.com/Nancaro/Calculadora-basica',
      tiempo: '2023-06-18'
    },
    {
      nombre: 'Signo Zodiacal',
      imagen: './assets/Signozodiacal.png',
      descripcion: 'Esta es una aplicación hecha con PYTHON y TKINTER que permite preguntar sobre tu signo.',
      githubUrl: 'https://github.com/Nancaro/Signo-del-zodiaco',
      vistaUrl: 'https://github.com/Nancaro/Signo-del-zodiaco',
      tiempo: '2023-06-18'
    },
    {
      nombre: 'Calculadora de IMC',
      imagen: './assets/IMC.png',
      descripcion: 'Esta es una aplicación hecha con PYTHON y TKINTER que permite saber tu IMC.',
      githubUrl: 'https://github.com/Nancaro/Calculadora-de-IMC',
      vistaUrl: 'https://github.com/Nancaro/Calculadora-de-IMC',
      tiempo: '2023-06-18',
    },
    {
      nombre: 'Pong',
      imagen: './assets/Pang.png',
      descripcion: 'Esta es una aplicación hecha con PYTHON que permite jugar con alguien más en la misma pc.',
      githubUrl: 'https://github.com/tu-usuario/calculadora',
      vistaUrl: 'https://tu-usuario.github.io/calculadora',
      tiempo: '2023-06-18'
    },
    {
      nombre: 'Arte e Paisagem',
      imagen: './assets/ArteePaisagem.png',
      descripcion: 'Esta es una página hecha con HTML, CSS, JS para la empresa Artee Paisagem',
      githubUrl: 'https://github.com/Nancaro/ArteePaisagem',
      vistaUrl: '',
      tiempo: '2023-06-18'
    },
    {
      nombre: 'Portofolio AP',
      imagen: './assets/PortAP.jpeg',
      descripcion: 'Esta es una página hecha con HTML, CSS, JS, ANGULAR, MYSQL Y JAVA para la formación Argentina Programa',
      githubUrl: 'https://github.com/Nancaro/PFBA',
      vistaUrl: 'https://fpba-2a62c.web.app/',
      tiempo: '2023-06-18'
    },
    {
      nombre: 'Portfolio Hugo Gandolfo',
      imagen: './assets/PortHG.png',
      descripcion: 'Descripción de la Calculadora',
      githubUrl: 'https://github.com/tu-usuario/calculadora',
      vistaUrl: 'https://tu-usuario.github.io/calculadora',
      tiempo: '2023-06-18'
    },
    // Agrega más proyectos aquí
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.scrollService.scrollToFragment('proyectos');
  }
}