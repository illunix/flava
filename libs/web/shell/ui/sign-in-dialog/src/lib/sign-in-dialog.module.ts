import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignInDialogComponent } from './sign-in-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [SignInDialogComponent],
  exports: [SignInDialogComponent]
})
export class SignInDialogModule {}
