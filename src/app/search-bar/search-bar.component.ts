import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output()
  submitted = new EventEmitter<string>();

  term: string = '';

  constructor() {}

  ngOnInit(): void {}

  // public onInput(value: string) {
  //   this.term = value;
  // }

  public onFormSubmit(event: any) {
    // avoid removing the input value on enter
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
