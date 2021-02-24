import { Component, OnInit } from '@angular/core';
import { ReceiptService } from 'src/app/shared/services/receipt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  Receipts: any = [];
  constructor(private receiptService: ReceiptService) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.receiptService.getReceiptList().subscribe((res) => {
      this.Receipts = res;
      console.log(res);
    })
  }
}
