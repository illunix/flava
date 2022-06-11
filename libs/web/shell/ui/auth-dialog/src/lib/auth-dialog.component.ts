import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'flava-auth-dialog',
    templateUrl: './auth-dialog.component.html',
    styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {
    public signInWithEmail: boolean;

    constructor(
        private dialogRef: MatDialogRef<AuthDialogComponent>,
        private fb: FormBuilder,
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

    public onShowSignUpDialogContent(): void {
        this.data.signUp = true;
        this.dialogRef.updateSize(
            '400px',
            '700px'
        );
    }
}