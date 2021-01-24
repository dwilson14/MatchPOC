import { Component, OnInit } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs'
import { GameActions } from '../store/action'
import { STATUS } from '../store/interface'
import { DataService } from '../memorygame/dataservice'

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
    @select() status$: Observable<number>
    status: any
    rules: boolean = false;

    constructor(private actions: GameActions, private editService: DataService) {
    this.status = STATUS }

    ngOnInit() {
        this.editService.getStripe().subscribe(success => { let s = 1 });
        this.editService.getProducts().subscribe(p => {
            this.actions.reset()
        });
        this.editService.showRule.subscribe(message => {
            this.rules = message;            
        });
    this.actions.updateStatus(STATUS.READY)
    this.actions.reset()
  }
}
