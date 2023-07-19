import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.scrollService.scrollToFragment('banner');
  }
}

