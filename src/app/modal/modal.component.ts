import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../Servicios/modal.service';
import { AlimentousService } from 'src/app/Servicios/Alimentous.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

 @Input() InputIdalimentos: any;
  
  listIngredientes: any []= [
    //{NombreIngrediente:"prueba",},
        
  ];
  listaliment: any []= [
    //{NombreIngrediente:"prueba",},
    
    
  ];
  form: FormGroup;

  constructor(private modal$$:ModalService,
    private _AlimentosServicios: AlimentousService, private fb: FormBuilder) 
  { 
    this.form=fb.group ({
      NombreIngrediente:[''],
      idalimentos:[''],
    
    })
    
    
  }


  ngOnInit(): void {
    this.VerIngredientes(this.InputIdalimentos);
  
    console.log(this.InputIdalimentos)
  }
  
  //closemodal(){
    //this.modal$$.$modal.emit(false)
  //}

  VerIngredientes(id: number)
  {
    this._AlimentosServicios.GetListIngredientes(1).subscribe(data => 
    {
      console.log(data);
      this.listIngredientes=data;
      
    }, error => 
    {
      console.log(error);
    })
  }


 

}
