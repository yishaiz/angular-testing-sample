import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from "./services/users.service";
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ CapitalizePipe, UsersListComponent ],
  providers: [ UsersService ]
})
export class PipeTestingModule {
}
