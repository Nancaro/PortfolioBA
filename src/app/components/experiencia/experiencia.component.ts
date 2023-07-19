import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit, AfterViewInit {
  selectedCompany: string | null = 'mate-web-tecnologia';

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.scrollService.scrollToFragment('experiencia');
  }

  selectCompany(company: string) {
    if (this.selectedCompany === company) {
      this.selectedCompany = 'mate-web-tecnologia';
    } else {
      this.selectedCompany = company;
    }
  }
}
