import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentousService {
private urlbackend ='https://localhost:7163/api/';
//private urlbackend ='https://github.com/H1ldeberto/AlimentosAPI';

  constructor(private http:HttpClient) { }

 
  GetListAlimentos(): Observable<any> { 
   return this.http.get(this.urlbackend + 'comida')
  }

eliminaAlimento(id: number): Observable<any>  {
return this.http.delete(this.urlbackend + 'comida/' + id)
}

guardaAlimento(Alimento: any)
{
  return this.http.post(this.urlbackend + 'comida', Alimento);
}


GetListIngredientes(id: number): Observable<any>{
  return this.http.get(this.urlbackend + 'comida/ingredientes/' + 1)
}

}
