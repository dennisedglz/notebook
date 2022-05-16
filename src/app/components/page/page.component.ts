import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  /*
    * ID for current page
  */
   @Input() pageID: number = 0;

  /*
    * ID for current page
  */
  @Input() focused: boolean = false;

  /*
    * Creates a new page when the current one is complete
  */
  @Output() newPageEvent = new EventEmitter<number>();

  /**
    * Page content
  */
  public content: string = "";

  /**
    * Max characters for the current page. This is calculated after the content is checked.
  */
  public maxChars: number = 500;

  public widthChars: number = 100;

  public heightChars: number = 50;



  constructor() {
  }

  ngOnInit(): void {
    // Load autosaved text
    if(sessionStorage.getItem(`text_page`+this.pageID)) 
      this.content = sessionStorage.getItem('text_page'+this.pageID) || '';
      if(this.focused) {
        document.getElementById('page-content-'+this.pageID)?.focus();
      }
      
  }

  ngAfterContentChecked(): void {
    //Average characters horizontally
    this.widthChars = Math.floor((document.getElementsByClassName("page-content")[0].clientWidth-45) / 8.58);
    // Average chars vertically
    this.heightChars = Math.floor((document.getElementsByClassName("page-content")[0].clientHeight-10) / 24);
    //Max chars per page
    this.maxChars = this.widthChars * this.heightChars;
  }

  contentChanged(event: any) {
    //Create new page when the content has arrived max chararcters.
    if(this.content.length >= this.maxChars) {
      this.createNewPage();
    }
    //Text autosaved
    sessionStorage.setItem(`text_page`+this.pageID, this.content);
    
    //Adjust max characters allowed when there's a line break
    if(this.content.substring(this.content.length - 1, this.content.length) == '\n') {
      this.maxChars = this.maxChars - this.widthChars;
    }
    
  }

  /**
   * It emits an event to create a new page
  */
   createNewPage() {
    this.newPageEvent.emit(this.pageID);
  }

}
