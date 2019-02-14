import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Style} from '../model/style.model';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  private availableStyles: Style[] = [];
  availableStyles$: BehaviorSubject<Style[]> = new BehaviorSubject(this.availableStyles);

  constructor(private httpClient: HttpClient) {
  }

  private getStyles(): Observable<Style[]> {
    return this.httpClient.get<Style[]>('http://localhost:8080/style/getall');
  }

  public publishStyles() {
    this.getStyles().subscribe(
      styleList => {
        this.availableStyles = styleList;
        this.availableStyles$.next(this.availableStyles);
      });
  }
}

