import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

 funcionarios =[
   {
   id: 1,
   nome:'allan',
   email:'allan@allan',
  
 },
 {
  id: 2,
  nome:'tavares',
  email:'tavares@allan',
 
},
{
  id: 3,
  nome:'Jose',
  email:'Tavares@allan',

}
]
  
  columns: string [] = ['id', 'nome', 'email']
  
  constructor() { }

  ngOnInit(): void {
  }

}
