import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentMethod, UserService } from 'src/app/services/user.service';

export interface DialogData {
  username: string;
  companyId: number;
  paymentMethod: PaymentMethod;
}

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.css'],
})
export class UsernameInputComponent implements OnInit {
  username: string;
  companyId: number;
  payment: PaymentMethod;

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<UsernameInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  confirm(): void {
    console.log(this.username, this.companyId, this.payment);

    const verified =
      this.username &&
      this.username.length > 0 &&
      this.companyId &&
      this.companyId > 0 &&
      this.payment
        ? true
        : false;
    console.log(verified);

    if (verified) {
      this.dialogRef.close({
        username: this.username,
        companyId: this.companyId,
        payment: this.payment,
      });
    } else {
      alert('Enter you information');
    }
  }
}
