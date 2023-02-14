import { Component, OnInit } from '@angular/core';
import { Address } from '../model/address';
import { AddressInformation } from '../model/addressinformation';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {


  addressInfo : AddressInformation;

  constructor(public addressService: AddressService) { 
    this.addressInfo = {} as AddressInformation;
  }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe((response:AddressInformation) => {
     // debugger;
      this.addressInfo = response;
     // return;
 
      });
    };
  }

