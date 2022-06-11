import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'flava-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    form: FormGroup;
    
    constructor(private fb: FormBuilder) { }

    public ngOnInit(): void {
        this.createForm();    
    }

    public onSignIn(): void {
        
    }

    public get formControls() {
        return this.form.controls;
    }

    private createForm(): void {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
}