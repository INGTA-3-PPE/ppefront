import { Component, OnInit } from '@angular/core';

import { navItemsChef } from './_nav';
import { navItemsUser } from './_nav';
import { navItemsAdmin } from './_nav';

import { TokenStorageService } from 'src/app/helpers/token-storage.service';
import { isJsxFragment } from 'typescript/lib/tsserverlibrary';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {

   navItems :any;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private token :TokenStorageService) {}
  ngOnInit(): void {
    this.sidRole()
  }  

sidRole(){
  console.log("aaaaaaa",this.token.getUser().role)
  if(this.token.getUser().role=="Personnel"){
    this.navItems=navItemsUser;
    console.log(this.navItems)
  }
  else if(this.token.getUser().role=="admin"){
    this.navItems=navItemsAdmin
  }
  else{
    this.navItems=navItemsChef

  }
}
}
