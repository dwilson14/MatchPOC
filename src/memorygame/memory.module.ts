import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReduxConfigModule } from '../store'

import { MemoryComponent } from './memory.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LogoComponent } from './dashboard/logo.component'
import { InfoComponent } from './dashboard/info.component'
import { ChessboardComponent } from './chessboard/chessboard.component'
import { CardComponent } from './chessboard/card.component'
import { StatusComponent } from './status/status.component'

import { GameActions } from '../store/action';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { RulesComponent } from './rules/rules.component'

@NgModule({
    imports: [BrowserModule, ReduxConfigModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule],
  declarations: [
    MemoryComponent,
    DashboardComponent,
    LogoComponent,
    InfoComponent,
    ChessboardComponent,
    CardComponent,
    StatusComponent,
    EntryFormComponent,
    RulesComponent
  ],
  providers: [GameActions],
  bootstrap: [MemoryComponent]
})
export class MemoryModule {}
