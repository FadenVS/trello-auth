import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { UsersRoutingModule } from './users-routing.module';
import { UsersTableComponent } from './pages/users-table/users-table.component';
import { ActionButtonsComponent } from 'src/app/shared/action-buttons/action-buttons.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersTableComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CdkTableModule,
    FormsModule
   
    
  ]
})
export class UsersModule { }
