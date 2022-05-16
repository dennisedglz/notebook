import { Component, OnInit } from '@angular/core';
import { PagesCounterService } from 'src/app/services/pages-counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * Variable to open new notebook
   */
  public url: string = window.location.href;

  /*
    Variable to control new page creation
  */
  public page: number = 0;
  
  constructor(private pagesCounter: PagesCounterService) { 
    this.pagesCounter.getPage().subscribe(value => {
      this.page = value;
    });
  }

  ngOnInit(): void {
  }

  //Creates new page up to 5
  createPage(e: any): void {
    e.preventDefault();
    if(this.page < 5) {
      this.page++;
      this.pagesCounter.setPage(this.page);
    }
  }

}
