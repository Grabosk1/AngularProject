import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  currentDateTime?: string ;

  constructor() { }

  ngOnInit(): void {
    this.currentDateTime = new Date().toLocaleString();
  }

}
