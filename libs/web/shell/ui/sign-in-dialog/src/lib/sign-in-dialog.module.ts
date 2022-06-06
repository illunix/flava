import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { SignInDialogComponent } from './sign-in-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  declarations: [SignInDialogComponent],
  exports: [SignInDialogComponent]
})
export class SignInDialogModule {}
