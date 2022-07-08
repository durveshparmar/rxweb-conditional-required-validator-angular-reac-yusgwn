import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormConfig,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  userInfoFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This field is required.',
      },
    });

    this.userInfoFormGroup = this.fb.group({
      names: this.fb.group({
        firstName: ['', [RxwebValidators.required()]],
        lastName: [
          '',
          [
            RxwebValidators.required({
              conditionalExpression: (x, y) => y.names.firstName == 'John',
            }),
          ],
        ],
      }),
    });
  }
}
