import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IdentityService } from '@flava/web/shared/data-access/flava-api';
@Component({
    selector: 'flava-sign-in-dialog',
    templateUrl: './sign-in-dialog.component.html',
    styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit {
    public signInWithEmail: boolean;

    constructor(
        private identityService: IdentityService,
        private dialogRef: MatDialogRef<SignInDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { signUp: boolean }
    ) { }

    public ngOnInit(): void {
        if (this.data.signUp) {
            this.dialogRef.updateSize(
                '400px',
                '700px'
            );
        }
    }

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

    public onShowSignUpDialogContent(): void {
        this.data.signUp = true;
        this.dialogRef.updateSize(
            '400px',
            '700px'
        );
    }

    public onSignUpWithEmail(): void {
        this.identityService.SignUpWithEmail().subscribe();
    }
}