import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultConvert } from 'src/app/models/result';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  selectedFrom: string = '';
  selectedTo: string = '';

  result: number = 0;
  constructor(private converterService: ConverterService) {}
  onChange() {
    //this.converterService.log();
  }

  convert() {
    this.converterService.convert('eur', 'gbp', 50).subscribe(
      (res) => (this.result = res.result),
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {}
}
