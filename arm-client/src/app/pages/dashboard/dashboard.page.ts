import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceiptService } from 'src/app/shared/services/receipt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  Receipts: any = [];
  constructor(private receiptService: ReceiptService, private router: Router) { }

  ngOnInit() {
  }
  addReceipt() {
    this.router.navigateByUrl('/add-receipt');
  }
  ionViewDidEnter() {
    this.receiptService.getReceiptList().subscribe((res) => {
      this.Receipts = res;
      console.log(res);
    })
  }
}
