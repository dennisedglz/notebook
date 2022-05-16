import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesCounterService {

  /**
   * Service to share pages variable between components
   */

  private routerInfo: BehaviorSubject<number>;

  constructor() {
    /**
     * Initialize pages
     */
    this.routerInfo = new BehaviorSubject<number>(1);
    /**
     * Check if there's information autosaved
     */
    if(sessionStorage.getItem('total_pages')) {
      let savedPages = parseInt(sessionStorage.getItem('total_pages') || '1');
      if(savedPages<6)   
        this.routerInfo.next(savedPages);
    } 
  }

  getPage(): Observable<number> {
    return this.routerInfo.asObservable();
  }

  setPage(newValue: number): void {
    /**
     * Updates page info locally and for the autosave
     */
    this.routerInfo.next(newValue);
    sessionStorage.setItem(`total_pages`, newValue.toString());
  }
}
