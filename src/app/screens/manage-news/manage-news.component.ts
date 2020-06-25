import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-manage-news',
  templateUrl: './manage-news.component.html',
  styleUrls: ['./manage-news.component.css']
})
export class ManageNewsComponent implements OnInit {
  screenTitle:string = "Manage News || News Portal";

  newsList = [
    {
      title: "News-Portal",
      description: 'This is my 1st project in Angular. This is a News-Portal. Stay updated with the latest. What happen in the world.',
      img: 'assets/img/logo.png',
      content: ''
    },
    {
      title: "News-Portal",
      description: 'This is my 1st project in Angular. This is a News-Portal. Stay updated with the latest. What happen in the world.',
      img: 'assets/img/logo.png',
      content: ''
    },
    {
      title: "News-Portal",
      description: 'This is my 1st project in Angular. This is a News-Portal. Stay updated with the latest. What happen in the world.',
      img: 'assets/img/logo.png',
      content: ''
    },
    {
      title: "News-Portal",
      description: 'This is my 1st project in Angular. This is a News-Portal. Stay updated with the latest. What happen in the world.',
      img: 'assets/img/logo.png',
      content: ''
    },
    {
      title: "News-Portal",
      description: 'This is my 1st project in Angular. This is a News-Portal. Stay updated with the latest. What happen in the world.',
      img: 'assets/img/logo.png',
      content: ''
    },
  ];
  
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
