import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthDialogComponent } from './auth-dialog.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInThirdPartyComponent } from './sign-in-third-party/sign-in-third-party.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
   imports: [
      CommonModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      FormsModule
   ],
   declarations: [
      AuthDialogComponent,
      SignInComponent,
      SignInThirdPartyComponent,
      SignUpComponent
   ],
   exports: [AuthDialogComponent]
})
export class AuthDialogModule {}
