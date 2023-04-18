import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];
  constructor(private wiki: WikipediaService) {}

  public onTerm(term: string) {
    this.wiki.search(term).subscribe((response: any) => {
      console.log(response);
      this.pages = response.query.search;
    });
  }
}
