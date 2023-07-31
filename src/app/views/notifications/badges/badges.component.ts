import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import{ FormGroup,FormBuilder,FormControl }from '@angular/forms'
import { TokenStorageService } from 'src/app/helpers/token-storage.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit  {
  empDetail !: FormGroup ;
  user:any ;
  visible = true;


  
  
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

 
 
  


}
