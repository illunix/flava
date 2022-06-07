import { Component } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'flava-sign-in-dialog',
    templateUrl: './sign-in-dialog.component.html',
    styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent  {
    public signInWithEmail: boolean;

    constructor(private dialogRef: MatDialogRef<SignInDialogComponent>) { }

    public onClose(): void {
        this.dialogRef.close();
    }

    public onSignInWithFacebook(): void {
    }

    public onSignInWithGoogle(): void {
    }

    public onSignInWithApple(): void {
        
    }

    public onSignInWithWalletConnect(): void {

    }

    public onSignInWithEmail(): void {
    }
}