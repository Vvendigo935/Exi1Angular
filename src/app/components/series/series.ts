import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-series',
  imports: [RouterLink],
  templateUrl: './series.html',
  styleUrl: './series.css'
})
export class Series {
  seriesList: string[] = ['Breaking Bad', 'Stranger Things', 'Game of Thrones'];

  deleteSerie(serie: string) {
    this.seriesList = this.seriesList.filter(s => s !== serie);
  }
}
