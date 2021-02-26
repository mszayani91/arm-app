import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceiptService } from 'src/app/shared/services/receipt.service';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.page.html',
  styleUrls: ['./add-receipt.page.scss'],
})
export class AddReceiptPage implements OnInit {

  receiptForm: FormGroup;
  constructor(
    private receiptAPI: ReceiptService,
    private router: Router,
    private fb: FormBuilder, private zone: NgZone
  ) {
    this.receiptForm = this.fb.group({
      receipt_label: [''],
      receipt_amount: [],
      receipt_tags: [''],
      receipt_date: new Date()
    })
  }

  ngOnInit() {
  }
  backToDash() {
    this.router.navigate(['/dashboard']);
  }
  onFormSubmit() {
    if (!this.receiptForm.valid) {
      return false;
    } else {
      this.receiptAPI.addReceipt(this.receiptForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            this.receiptForm.reset();
            console.log(res);
            this.router.navigate(['/dashboard']);
          })
        });
    }
  }

}
