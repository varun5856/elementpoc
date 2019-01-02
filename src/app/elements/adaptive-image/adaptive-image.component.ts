import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-adaptive-image',
  templateUrl: './adaptive-image.component.html',
  styleUrls: ['./adaptive-image.component.css']
})
export class AdaptiveImageComponent implements OnInit, OnChanges {

  @Input('data') data: any;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() { }

  ngOnChanges(){
    this.data = JSON.parse(this.data);
    this.changeDetector.detectChanges();
  }

}
