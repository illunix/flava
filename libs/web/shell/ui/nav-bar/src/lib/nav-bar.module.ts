import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { SignInDialogModule } from '@flava/web/shell/ui/sign-in-dialog';

@NgModule({
  imports: [
    CommonModule,
    SignInDialogModule
  ],
  declarations: [NavBarComponent],
  exports: [NavBarComponent]
})
export class NavBarModule {}
