import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import{ FormGroup,FormBuilder,FormControl }from '@angular/forms'
import { TokenStorageService } from 'src/app/helpers/token-storage.service';




@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  visible = true;
  dismissible = true;
  empDetail !: FormGroup ;
  users:any []=[]
  user:any 


  constructor( 
    private service:EmployeeService,
    private tokenStorage: TokenStorageService,

    
  ) { }

  ngOnInit(): void {

    var matricule :number;
    matricule = this.tokenStorage.getUser().matricule;
    console.log("err", this.tokenStorage.getUser().matricule);

    this.getMyContact(matricule);
    setTimeout(() => {
      this.visible = !this.visible;
    }, 3000);   
   
  }

  

 

  onToggleDismiss() {
    this.dismissible = !this.dismissible;
  }
  getMyContact(matricule : number) {
    console.log("ich",matricule)
    this.service.getMyContact(matricule).subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getallpersonne() {
    this.service.getallpersonne().subscribe(
      (data: any) => {
        this.users   = data;
  
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getalluser() {
    this.service.getall().subscribe(
      (data: any) => {
        this.users   = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  






  }
  














