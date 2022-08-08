import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlimentousService } from 'src/app/Servicios/Alimentous.service';
import { ModalService } from 'src/app/Servicios/modal.service';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {

listAlimentos: any []= [
  //{NombreAlimento:"xxx", Costo:"$00.00",},
  
];
IdAlimentos = 14;

/*creamos una variable tipo forgroup*/
form: FormGroup;
id: number | undefined;

  constructor(private fb: FormBuilder, private modal$$:ModalService,
    private toastr: ToastrService,
    private _AlimentosServicios: AlimentousService) { 
    this.form=fb.group ({
      NombreAlimento:[''],
      Precio:[''],
      Ingredienteuno:[''],
      Ingredientedos:[''],
      Ingredientetres:[''],
      Ingredientecuatro:[''],
      Ingredientecinco:[''],
      
    })
     
    
  }


  ngOnInit(): void {
    this.obtenerAlimentos();
    //this.modal$$.$modal.subscribe((valor)=>{this.modal= valor})
    
  }
 

  agregarAlimento (){
    console.log(this.form);
    let Ingredienteuno=this.form.get('Ingredienteuno')?.value,
    Ingredientedos=this.form.get('Ingredientedos')?.value,
    Ingredientetres=this.form.get('Ingredientetres')?.value,
    Ingredientecuatro=this.form.get('Ingredientecuatro')?.value,
    Ingredientecinco=this.form.get('Ingredientecinco')?.value;
     let ingredientes=[]; 
      if (Ingredienteuno !='')
        ingredientes.push ({NombreIngrediente:Ingredienteuno}); 
      if (Ingredientedos !='')
        ingredientes.push ({NombreIngrediente:Ingredientedos}); 
      if (Ingredientetres !='')
        ingredientes.push ({NombreIngrediente:Ingredientetres});  
      if (Ingredientecuatro !='')
        ingredientes.push ({NombreIngrediente:Ingredientecuatro}); 
      if (Ingredientecinco !='')
        ingredientes.push ({NombreIngrediente:Ingredientecinco}); 


    const Alimento: any={
    NombreAlimentos:this.form.get('NombreAlimento')?.value,
    Precio:this.form.get('Precio')?.value,
    Ingrediente:ingredientes 
    } 


    console.log(Alimento);
    this._AlimentosServicios.guardaAlimento(Alimento).subscribe(data=>{
      
      this.obtenerAlimentos();
      this.form.get('NombreAlimento')?.reset();
      this.form.get('Precio')?.reset();
      this.form.get('Ingredienteuno')?.reset();
      this.form.get('Ingredientedos')?.reset();
      this.form.get('Ingredientetres')?.reset();
      this.form.get('Ingredientecuatro')?.reset();
      this.form.get('Ingredientecinco')?.reset();
    }, error => {
      console.log(error);
    })
    
  }


 

  obtenerAlimentos()
  {
    this._AlimentosServicios.GetListAlimentos().subscribe(data => 
    {
      console.log(data);
      this.listAlimentos=data;
    }, error => 
    {
      console.log(error);
    })
  }
   
   
  
    
 EliminaAlimento(id: number, name:string)
  {
    if(confirm(" Desea borrar el alimento: "+ name + "?")) {
      this._AlimentosServicios.eliminaAlimento(id).subscribe(data=>{
        this.toastr.error('El alimento fue eliminado con éxito', '');
        this.obtenerAlimentos();
      }, error => {
        console.log(error);
      })
    }
  
  }

  VerIngredientes(id: number)
  {
    this._AlimentosServicios.GetListIngredientes(id).subscribe(data => 
    {
      console.log(data);
      
    }, error => 
    {
      console.log(error);
    })
  }

  
}
