import { Component, OnInit } from '@angular/core';
import { PagesCounterService } from 'src/app/services/pages-counter.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent {

  /**
   * Variable to control notebook pages locally
   */
  public pages: number = 0;

  constructor(private pagesCounter: PagesCounterService) { 
    this.pagesCounter.getPage().subscribe(value => {
      this.pages = value;
    });
  }

  //Scroll to new page when is created
  public ngAfterViewChecked(): void {
    window.scrollTo(0,document.body.scrollHeight);     
  } 

  //Creates new page up to 5
  nextPage(event: any): void {
    //Creates a new page up to five pages
    if(this.pages < 5) 
      this.pages++;
      this.pagesCounter.setPage(this.pages);
  }


  /*ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }*/
  
}
