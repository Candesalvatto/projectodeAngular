import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-socios',
  templateUrl: './data-socios.component.html',
  styleUrls: ['./data-socios.component.css']
})
export class DataSociosComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((parametros) => {

    })
  }
}
