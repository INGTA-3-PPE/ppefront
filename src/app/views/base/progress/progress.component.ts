import { Component, OnInit } from '@angular/core';
;
import { EmployeeService } from 'src/app/service/employee.service';
import { NgIf } from '@angular/common';
import { TokenStorageService } from 'src/app/helpers/token-storage.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  //role: any;
  demandes:any []=[];
  constructor(
    private serv:EmployeeService,
    private  TokenStorageService:TokenStorageService

    ){}
  ngOnInit(): void {
    this.getalluser()
    
  }
  getalluser() {
    this.serv.getallbyType().subscribe(
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
  annuler(id:any) {
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
