import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  screenTitle:string = "404 - Resource Not Found || News Portal";
  
  constructor(private spinner : SpinnerService, private titleService: Title) { 
    this.titleService.setTitle( this.screenTitle );
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(()=>{
      this.spinner.hide();
    }, 700);
  }

}
