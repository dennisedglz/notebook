import { Component, OnInit } from '@angular/core';
import { PagesCounterService } from 'src/app/services/pages-counter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  /*
    Variable to print how many pages have been created
  */
  public pages: number = 0;
  
  constructor(private pagesCounter: PagesCounterService) { 
    this.pagesCounter.getPage().subscribe(value => {
      this.pages = value;
    });
  }

}
