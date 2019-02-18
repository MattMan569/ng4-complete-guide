import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private projectForm: FormGroup;
    private statuses = ['stable', 'critical', 'finished'];

    getStatuses(): string[] {
        return this.statuses;
    }

    getForm(): FormGroup {
        return this.projectForm;
    }

    ngOnInit() {
        this.projectForm = new FormGroup({
            projectName: new FormControl(
                null,
                [
                    Validators.required
                    // this.forbiddenProjectNames.bind(this)
                ],
                this.forbiddenProjectNamesAsync.bind(this)
            ),
            email: new FormControl(null, [Validators.required, Validators.email]),
            projectStatus: new FormControl(null)
        });

        this.projectForm.statusChanges.subscribe(status => {
            console.log(status);
        });
    }

    onSubmit() {
        console.log(this.projectForm.value);
    }

    capitalize(s: string, restToLower?: boolean): string {
        if (restToLower) {
            return s[0].toUpperCase() + s.substr(1).toLowerCase();
        } else {
            return s[0].toUpperCase() + s.substr(1);
        }
    }

    forbiddenProjectNames(control: FormControl): { [key: string]: boolean } {
        if (control.value === 'Test') {
            return { projectNameIsForbidden: true };
        } else {
            return null;
        }
    }

    forbiddenProjectNamesAsync(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Test') {
                    resolve({ projectNameIsForbidden: true });
                } else {
                    resolve(null);
                }
            }, 1000);
        });

        return promise;
    }
}
