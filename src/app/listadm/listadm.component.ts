import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../demande.service';
import { EmployeeService } from '../service/employee.service';
import { NgIf } from '@angular/common';
import { TokenStorageService } from '../helpers/token-storage.service';

@Component({
  selector: 'app-listadm',
  templateUrl: './listadm.component.html',
  styleUrls: ['./listadm.component.scss']
})
export class ListadmComponent implements OnInit {
  

  user:any 
  us:any
  //role: any;
  demandes:any []=[];
  ded :any;
  constructor(
    private serv:EmployeeService,
    private  TokenStorageService:TokenStorageService
    

    ){}
  ngOnInit(): void {
    this.getDemandes
    var matricule :number;
    matricule = this.TokenStorageService.getUser().matricule;
    this.getalluser()
    // this.getMyContact(matricule);
   

    
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
public showDetails: boolean = false;
toggleDetails() {
  this.showDetails = !this.showDetails;
}
getDemandes() {
  this.serv.getDemandeBymatricule(this.TokenStorageService.getUser().matricule).subscribe(
    (data: any) => {
      this.demandes = data;
    },
    (error) => {
      console.log(error);
    }
  );
}
getDemandeById(ded:any){
  this.ded=ded;
  this.serv.getuserByMatricule(ded.matricule).subscribe(
    (data: any) => {
      this.us = data;
    },
    (error) => {
      console.log(error);
    }
  );
  console.log(JSON.stringify(this.us),JSON.stringify(this.ded));



  // this.serv.getDemandeBymatricule(ded.matricule).subscribe(
  //   (data: any) => {
  //     this.ded = data;
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
}
// getMyContact(matricule : number) {
//   console.log("ich",matricule)
//   this.serv.getMyContact(matricule).subscribe(
//     (data: any) => {
//       this.user = data;
//       console.log(this.user);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }


}
