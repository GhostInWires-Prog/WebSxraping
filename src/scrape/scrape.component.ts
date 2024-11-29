import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-scrape',
  imports: [],
  standalone:true,
  templateUrl: './scrape.component.html',
  styleUrl: './scrape.component.css'
})
export class ScrapeComponent {
  headers :string[]=[];
  paragraphs :string[]=[];
  constructor(private http:HttpClient) {
    // We Also Can Use Inonit But Will Go With Consturctor

  }

  fetchdata()
  {
    this.http.get<{headers: string[],paragrpahs:string[]}>(" http://localhost:3000/api/scape")
    .subscribe(data=>{
      this.headers=data.headers;
      this.paragraphs=data.paragrpahs;
    },
    error=>{
      console.log(error);
    }
    )

  }



}
