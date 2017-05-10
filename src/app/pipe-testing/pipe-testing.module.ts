import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from "./services/users.service";
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    CapitalizePipe,
    UsersListComponent ],
  exports:[UsersListComponent ],
  providers: [ UsersService ]
})
export class PipeTestingModule {
}
