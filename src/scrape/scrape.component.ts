import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-scrape',
  imports: [HttpClientModule],
  standalone:true,
  templateUrl:'./scrape.component.html',
  styleUrl: './scrape.component.css'
})
export class ScrapeComponent
{
  headers :string[]=[];
  paragraphs :string[]=[];
  constructor(private http:HttpClient) {
    // We Also Can Use Inonit But Will Go With Consturctor
    this.fetchdata()
  }

  fetchdata()
  {
    this.http.get<{headers: string[],paragraphs:string[]}>("http://localhost:3000/api/scape")
    .subscribe(data=>{
      console.log(data);
      this.headers=data.headers??[];
      this.paragraphs=data.paragraphs??[];
    },
    error=>{
      console.log(error);
    }
    )

  }
}
