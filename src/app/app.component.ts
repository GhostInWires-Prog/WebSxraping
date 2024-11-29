import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ScrapeComponent} from '../scrape/scrape.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScrapeComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment3';
}
