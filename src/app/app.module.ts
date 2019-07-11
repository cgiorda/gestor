import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AbmClienteComponent } from './abm-cliente/abm-cliente.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import {Routes, RouterModule} from '@angular/router'

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'Clientes', component: ClientesComponent},
  { path: 'AbmCliente', component: AbmClienteComponent},
  { path: 'AbmCliente/:id', component: AbmClienteComponent},
  { path: '**', component: AppComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    AbmClienteComponent,
    MensajeComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
