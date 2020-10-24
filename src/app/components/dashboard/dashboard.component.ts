import { Component, OnInit } from '@angular/core';

//importamos nuestro servicio y nuestra interface.
import { MoviesService, Movies } from 'src/app/services/movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//declaramos e inicializamos variables como arreglos vacios ya que van a recibir la información proveniente de nuestro servicio.
  movies:Movies[]=[]; 

  orderMovies:Movies[]=[]; 

  random:Movies[]=[];


//Inyectamos nuestro servicio.
  constructor(private movie:MoviesService) { }


  //Inicializamos en el metodo NgOnInit de Angular para una mejor maneabilidad de datos.
  ngOnInit(): void {
    this.movies=this.movie.getMovies();
    this.orderMovies=this.movie.orderMovies(); 
  }

  
}
