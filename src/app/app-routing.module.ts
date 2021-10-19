import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//o routes diz ao router qual o display que deve ser inserido consoante o URL utilizado
const routes : Routes = [
  // quando nao ha nenhuma rota no url, este manda para o url de dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //path é uma string que corresponde ao URL
  //component é o component que o router deve criar (localhost:4200/heroes)
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },

// o (:) e um placeholder para o id, ou seja, recebe uma variavel id
  { path: 'detail/:id', component: HeroDetailComponent},
];

//a aplicacao importa o routermodule e o router para ter uma funcionalidade de routing.
//importa tambem o heroescomponent para dar um seguimento ao routing
@NgModule({
  declarations: [],
  imports: [
    // método chama se for root porque o router é configurado para a aplicação forRoot
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
