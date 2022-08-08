import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';/*libreria para los mensajes*/
import { ToastrModule } from 'ngx-toastr';/*libreria para los mensajes*/
//import { CommonModule } from '@angular/common';/*libreria para los mensajes*/
import { HttpClientModule} from '@angular/common/http';/*libreria para los servicios*/
import { FormsModule } from '@angular/forms'; 
import { AlimentosComponent } from './Componentes/alimentos/alimentos.component';
import { AppComponent } from './app.component';

import { PopupCourseComponent } from './components/popup-course/popup-course.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AlimentosComponent,
    PopupCourseComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,  
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
