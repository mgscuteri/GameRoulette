import { Component, Input, OnInit } from '@angular/core';
import { Game } from '@core/models/game';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss'],
})
export class WheelComponent implements OnInit {
  // @Input()
  // games!: Game[];

  constructor() {}

  ngOnInit(): void {}
}
