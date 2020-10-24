import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
//Creación de variables e inicialización de la misma frente a la interfaz.
private movies:Movies[]=[
    {
      title:"Bohemian Rhapsody",
      description:"Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. ... Bohemian Rhapsody is a movie based on the true story of Queen's journey from the start of the rock band to their now-legendary 1985 performance at the Live Aid concert in Wembley Stadium.",
      img:"assets/images/thumbnails/bohemian-rhapsody.jpg",
      release:2018,
      views:100000000,
      favorite:false
    },
    {
      title:"Avengers Infinity War",
      description:"In the film, the Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe. The film was announced in October 2014 as Avengers: Infinity War – Part 1.",
      img:"assets/images/thumbnails/avengers-infinity-war.png",
      release:2018,
      views: 42000000,
      favorite:false
    },
    {
      title:"Deadpool",
      description:"Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life. Wade Wilson is a small-time mercenary. He meets Vanessa and falls in love. ... Things look bleak but a man appears who says he can be cured, through a treatment that gives him superhero powers.",
      img:"assets/images/thumbnails/deadpool.png",
      release:2016,
      views: 21000000,
      favorite:true
    },
    {
      title:"First-Man",
      description:"A Biopic on the life of the legendary American Astronaut Neil Armstrong from 1961-1969, on his journey to becoming the first human to walk the moon. Exploring the sacrifices and costs on the Nation and Neil himself, during one of the most dangerous missions in the history of space travel.",
      img:"assets/images/thumbnails/first-man.jpg",
      release:2018,
      views: 30000000,
      favorite:true
    },
    {
      title:"Han Solo",
      description:"Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga's most unlikely heroes",
      img:"assets/images/thumbnails/han-solo.jpg",
      release:2018,
      views:12000000,
      favorite:true
    },
    {
      title:"The Incredibles II",
      description:"The Incredibles hero family takes on a new mission, which involves a change in family roles: Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
      img:"assets/images/thumbnails/incredibles.jpg",
      release:2018,
      views:26000000,
      favorite:false
    },
    {
      title:"Jurassic World",
      description:"A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree. Twenty-two years after the original Jurassic Park failed, the new park, also known as Jurassic World, is open for business.",
      img:"assets/images/thumbnails/jurassic-world.jpg",
      release:2015,
      views:18000000,
      favorite: true
    },
    {
      title:"Venom",
      description:"A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it. After a faulty interview with the Life Foundation ruins his career, former reporter Eddie Brock's life is in pieces. Six months later, he comes across the Life Foundation again, and he comes into contact with an alien symbiote and becomes Venom, a parasitic antihero.",
      img:"assets/images/thumbnails/venom.jpg",
      release:2018,
      views:53000000,
      favorite:false
    }
]

private banners:Banners[]=[
  {
    title:"Aquaman",
    description:"Arthur Curry learns that he is the heir of the underwater kingdom of Atlantis. This will become Aquaman, the emperor of Atlantis, committed to defending the entire planet, both on land and in the seas.",
    img:"assets/images/banners/banner-aquaman.jpg"
  },
  {
    title:"Bumblebee",
    description:"In this prequel film to 'The Transformers' film series, this movie opens on the planet Cybertron as a fierce battle rages on between the good Autobots and the evil Decepticons. ... The Decepticons rush over to destroy the launch pad, but B-127 makes it off Cybertron in time while Optimus stays to keep fighting.",
    img:"assets/images/banners/banner-bumblebee.jpg"
  },
  {
    title:"Venom",
    description:"A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it. After a faulty interview with the Life Foundation ruins his career, former reporter Eddie Brock's life is in pieces. Six months later, he comes across the Life Foundation again, and he comes into contact with an alien symbiote and becomes Venom, a parasitic antihero.",
    img:"assets/images/banners/banner-venom.png"
  }
]



constructor() { 
}


//Retornamos todas nuestras movies.
getMovies(){
  return this.movies; 
}

//Retornamos los sliders que se verán en el banner. 
getBanners(){
  return this.banners;
}



//Ordenar de mayor a menor por año de lanzamiento. 
orderMovies(){

   this.movies.sort( (a, b) =>{ 
    if (a.release > b.release) {
    return -1;
    }
  })

  return this.movies
}

// //Obtener un objeto random de nuestro Arreglo.
// getRandomMovie() {
//   const randomMovie = Math.floor(Math.random() * (this.movies.length - 1)) + 2;
//   return this.movies[randomMovie];
// }




}

//Implementación de Interfaces para controlar de mejor forma la info. de las movies.
export interface Movies{
  title:string;
  description:string;
  img:string;
  release:number;
  views:number;
  favorite:boolean;
}

export interface Banners{
  title:string;
  description:string;
  img:string;
}