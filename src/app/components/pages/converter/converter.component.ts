import { CurrencySymbol } from './../../../models/result';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from, map, Observable, startWith } from 'rxjs';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  fromSelected: string = '';
  toSelected: string = '';

  symbols: CurrencySymbol[] = [];
  value: string = '';
  result: string = '';
  constructor(private converterService: ConverterService) {}

  convert() {
    this.converterService
      .convert(this.fromSelected, this.toSelected, +this.value)
      .subscribe(
        (res) => (this.result = res.result.toString()),
        (err) => console.log(err)
      );
  }

  ngOnInit(): void {
    this.converterService.getSymbols().subscribe((res) => {
      this.symbols = res;
    });
  }
}
