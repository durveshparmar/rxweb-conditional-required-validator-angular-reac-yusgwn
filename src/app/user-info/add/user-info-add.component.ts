import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import {
  RxFormBuilder,
  RxwebValidators
} from "@rxweb/reactive-form-validators";

@Component({
  selector: "app-user-info-add",
  templateUrl: "./user-info-add.component.html"
})
export class UserInfoAddComponent implements OnInit {
  @Input() namesFormGroup: FormGroup;

  constructor() {}

  ngOnInit() {}
}
