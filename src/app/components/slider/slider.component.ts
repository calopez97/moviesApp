import { Component, OnInit } from '@angular/core';

//Importamos nuestro servicio y nuestra interface. 
import {MoviesService, Banners} from '../../services/movies.service'

//importamos el modulo del Carousel perteneciente a @ng-bootstrap; accediendo a su configuración.
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
//Declaramos e inicializo variable como arreglo vacio ya que van a recibir la información de banners proveniente de nuestro servicio.
  banners:Banners[]=[];

//Inyectamos nuestro servicio.
//Inyectamos nuestro modulo de Carousel-Ng-Bootstrap.
  constructor(private _Banners:MoviesService, private _slideConfig:NgbCarouselConfig) { 


    //Gracias a nuestra variable _slideConfig tipada con NgbCarouselConfig permite añadirle o quitarle efectos a nuestro banner-slider. 
    _slideConfig.interval=2000;
    _slideConfig.pauseOnHover=true;
    _slideConfig.showNavigationArrows= false;
    _slideConfig.wrap=true;
  }

  //Inicializamos en el metodo NgOnInit de Angular para una mejor maneabilidad de datos.
  ngOnInit(): void {

    this.banners = this._Banners.getBanners(); 
   

  }

}
