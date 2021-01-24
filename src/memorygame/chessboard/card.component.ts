import { Component, Input, Output, EventEmitter } from '@angular/core'

import { CARDS } from '../../store/model/card'
import { ICard } from '../../store/interface'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() info: ICard

  @Output() flipped = new EventEmitter()

  backCard: ICard

  constructor() {
      this.backCard = CARDS.find(c => c.name === 'Jewelex%20FS2020/back.jpg')
  }

  flip(info: ICard) {
    if (info.flipped) {
      return
    }
    this.flipped.emit(info)
  }
}
