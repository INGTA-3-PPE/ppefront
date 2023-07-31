import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TokenStorageService } from 'src/app/helpers/token-storage.service';
import { EmployeeService } from 'src/app/service/employee.service';





@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.scss']
})
export class InscritComponent implements OnInit {
  demandes:any []=[];
  constructor(
    private serv:EmployeeService,
    private  TokenStorageService:TokenStorageService

    ){}
  ngOnInit(): void {
    this.getalluser()
    
  }
  getalluser() {
    this.serv.getall().subscribe(
      (data: any) => {
        this.demandes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  valider( id:any) {
    console.log("Demande validée.",id);
    const Demande ={

    }
      this.serv.updateDemandeAccepter(id,Demande).subscribe();

}
  annuler( id:any) {
    const Demande ={
      texte_Reponse:"Réfuser"

    }
      this.serv.updateDemandeRéffuser(id,Demande).subscribe();
}
admin() {
  // Vérifiez si l'acteur a le rôle "admin"
  // Utilisez votre logique d'authentification appropriée ici
  return this.TokenStorageService.role==='admin'
}
}
