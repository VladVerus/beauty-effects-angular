import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  selected: string = '';

  result: Observable<number> | undefined;
  constructor(private converterService: ConverterService) {}
  onChange() {
    //this.converterService.log();
  }
  ngOnInit(): void {
    //this.converterService.convert('')
  }
}
