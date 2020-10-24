import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Modulo de rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//Modulo Ng-bootstrap 
import{NgbModule} from '@ng-bootstrap/ng-bootstrap'

//Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Services
import { MoviesService } from './services/movies.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    MoviesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
