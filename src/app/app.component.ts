import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ele-poc';
  public html: any = '';
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.html = this.appService.getHTMLWithElements();
  }
}
