import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToSection(fragment: string) {
    this.scrollService.scrollToFragment(fragment);
  }
}