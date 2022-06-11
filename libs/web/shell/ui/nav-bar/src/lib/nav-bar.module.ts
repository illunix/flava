import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { AuthDialogModule } from '@flava/web/shell/ui/auth-dialog';

@NgModule({
  imports: [
    CommonModule,
    AuthDialogModule
  ],
  declarations: [NavBarComponent],
  exports: [NavBarComponent]
})
export class NavBarModule {}
