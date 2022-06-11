import { Component, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AuthService } from '@flava/web/shared/data-access/flava-api';
import { SignUpModel } from "@flava/web/shared/data-access/models";
import { AuthDialogComponent } from "../auth-dialog.component";
import { ErrorCode } from '@flava/web/shared/data-access/models';
import { MatInput } from "@angular/material/input";

@Component({
    selector: 'flava-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
    public form: FormGroup;
    public isSubmitted: boolean;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<AuthDialogComponent>,
        private authService: AuthService
    ) { }

    public ngOnInit(): void {
        this.createForm();    
    }

    public onSignUp(): void {
        if (this.form.invalid) {
            return;
        }

        const signUp: SignUpModel = {
            email: this.form.controls['email'].value,
            username: this.form.controls['username'].value,
            password: this.form.controls['password'].value
        }

        this.authService.signUp(signUp).subscribe({
            next: () => {
                this.dialogRef.close();
            },
            error: err => {
                if (err.code == ErrorCode.UserWithThisEmailAlreadyExist) {
                    this.form.controls['email'].setValue('');
                }
            }
        })
    }

    private createForm(): void {
        this.form = this.fb.group({
            email: [
                '', 
                [
                    Validators.required, 
                    Validators.email
                ]
            ],
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
}