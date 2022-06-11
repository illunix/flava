import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AuthService } from '@flava/web/shared/data-access/flava-api';
import { SignUpModel } from "@flava/web/shared/data-access/models";
import { AuthDialogComponent } from "../auth-dialog.component";

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
            email: this.formControls['email'].value,
            username: this.formControls['username'].value,
            password: this.formControls['password'].value
        }

        this.authService.signUp(signUp).subscribe({
            next: () => {
                this.dialogRef.close();
            }
        })
    }

    public get formControls(): { [key: string]: AbstractControl } {
        return this.form.controls;
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