import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//  Servicios
import { EquipoService } from './equipo.service';

// Components
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HomeComponent } from './home/home.component';
import { EquipoComponent } from './equipo/equipo.component';
//import { from } from 'rxjs'; 

const appRoutes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'equipo/:id', component: EquipoComponent },
  { path: 'body', component: BodyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'notfound', component: PageNotFoundComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '', redirectTo: '/body', pathMatch: 'full' },
  { path: '**', redirectTo: '/notfound', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    LayoutComponent,
    FooterComponent,
    ContactComponent,
    PageNotFoundComponent,
    NosotrosComponent,
    HomeComponent,
    EquipoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [EquipoService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
