import { Component, OnInit } from '@angular/core';

import { Osoite } from '../model/osoite'
import { OsoiteService } from '../osoite.service';

@Component({
  selector: 'app-osoite',
  templateUrl: './osoite.component.html',
  styleUrls: ['./osoite.component.scss']
})
export class OsoiteComponent implements OnInit {

  mydatasosoite: Osoite [] = [];

  constructor(private hpservice : OsoiteService) { }

  getOsoite(): void {
    this.hpservice.getOsoite().subscribe(mydatasosoite => this.mydatasosoite = mydatasosoite);
  }

  ngOnInit(): void {
    this.getOsoite();
  }

}
