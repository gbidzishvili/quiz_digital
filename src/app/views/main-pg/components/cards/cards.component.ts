import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent implements OnChanges {
  @Input() movies: any 
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.movies.results);
  }
}
