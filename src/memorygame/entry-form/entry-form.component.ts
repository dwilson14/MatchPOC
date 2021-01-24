import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';

import { DataService } from '../dataservice';

@Component({
    selector: 'app-entry-form',
    templateUrl: './entry-form.component.html',
    styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

    public isLoading: boolean = false;
    public salutation: string = "Enter here for your chance to win!";
    public vendor: string;
    public notDone: boolean = true;

    constructor(private service: DataService,) { }

    ngOnInit(): void {
        this.vendor = this.service.getVendor();
    }

    public editForm: FormGroup = new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        email2: new FormControl(null, Validators.required),
        postalCode: new FormControl(null, Validators.required)
    }, this.emailMatchValidator);

    emailMatchValidator(frm: FormGroup) {
        return frm.get('email').value === frm.get('email2').value
            ? null : { 'mismatch': true };
    }

    public onSave(e): void {
        this.isLoading = true;
        e.preventDefault();
        var request = {
            firstName: this.editForm.value.firstName,
            lastName: this.editForm.value.lastName,
            email: this.editForm.value.email,
            postalCode: this.editForm.value.postalCode,
            retailer: this.vendor,
            surveyId: 14
        }
        this.service.entrySubmission(request)
            .subscribe(success => {
                this.isLoading = false;
                if (success) {
                    this.salutation = "Thank you for your entry.";
                } else {
                    this.salutation = this.service.error;
                }
                this.notDone = false;
            });
        this.editForm.reset();
    }

}
