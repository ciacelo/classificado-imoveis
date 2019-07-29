import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  inputValue: string;
  optionGroups: any[];

  onChange(value: any): void {
    console.log(value);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.optionGroups = [
        {
          title: 'Categorias',
          children: [
            {
              title: 'Aluguel',
              count: 112
            },
            {
              title: 'Venda',
              count: 89
            }
          ]
        },
        {
          title: 'Tipo de imóveis',
          children: [
            {
              title: 'Casa',
              count: 60
            },
            {
              title: 'Apartamento',
              count: 100
            },
            {
              title: 'Ponto comercial',
              count: 41
            }
          ]
        }
      ];
    }, 1000);
  }
}
