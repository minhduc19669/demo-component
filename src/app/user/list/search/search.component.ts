import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() searchoutput = new EventEmitter<string>();
  @Input() list;
  constructor() {}

  ngOnInit(): void {}
  sent(event: any) {
    let keyword = event.target.value;
    this.searchoutput.emit(keyword);
  }
}
