import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../../../services/common.service';
import { ApiConfigService } from '../../../../../services/api-config.service';
import { String } from 'typescript-string-operations';
import { ApiService } from '../../../../../services/api.service';
import { isNullOrUndefined } from 'util';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SnackBar, StatusCodes } from '../../../../../enums/common/common';
import { AlertService } from '../../../../../services/alert.service';
import { Static } from '../../../../../enums/common/static';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-cashreceipt',
  templateUrl: './create-cashreceipt.component.html',
  styleUrls: ['./create-cashreceipt.component.scss']
})
export class CreateCashreceiptComponent implements OnInit {

  branchFormData: FormGroup;
  GetBranchesListArray = [];
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;
  getAccountLedgerListArray = [];
  getAccountLedgerListNameArray = [];
  getSalesBranchListArray = [];
  branchesList = [];
  getmemberNamesArray=[];

  displayedColumns: string[] = ['accountCode', 'accountName', 'amount', 'delete'
  ];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  date = new Date((new Date().getTime() - 3888000000));
  modelFormData: FormGroup;
  tableFormData: FormGroup;
  printBill: any;
  tableFormObj = false;
  routeUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private apiConfigService: ApiConfigService,
    private apiService: ApiService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,

  ) {
    this.branchFormData = this.formBuilder.group({
      voucherNo: [null],
      voucherTypeId: [null],
      cashPaymentDate: [(new Date()).toISOString()],
      branchCode: [null],
      branchName: [null],
      shiftId: [null],
      userId: [null],
      userName: [null],
      employeeId: [null],
      totalAmount: [null],
      amountInWords: [null],
      printBill: [false],
    });
    

  }

  ngOnInit() {
    this.formGroup();
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id1);
      if (!isNullOrUndefined(params.id1)) {
        this.routeUrl = params.id1;
        this.disableForm(params.id1);
        this.getInvoiceDeatilList(params.id1);
        let billHeader = JSON.parse(localStorage.getItem('selectedBill'));
        this.branchFormData.setValue(billHeader);
        console.log(billHeader);
      } else {
        this.disableForm();
        const user = JSON.parse(localStorage.getItem('user'));
        if (!isNullOrUndefined(user.branchCode)) {
          this.branchFormData.patchValue({
            voucherNo: user.branchCode,
          });
          this.genarateVoucherNo(user.branchCode);
        }
        this.getCashReceiptBranchesList();
        this.addTableRow();
      }
    });
  }

  getInvoiceDeatilList(id) {
    const getInvoiceDeatilListUrl = String.Join('/', this.apiConfigService.getInvoiceDeatilList, id);
    this.apiService.apiGetRequest(getInvoiceDeatilListUrl).subscribe(
      response => {
        const res = response.body;
        if (!isNullOrUndefined(res) && res.status === StatusCodes.pass) {
          if (!isNullOrUndefined(res.response['InvoiceDetailList']) && res.response['InvoiceDetailList'].length) {
            this.dataSource = new MatTableDataSource(res.response['InvoiceDetailList']);
            this.dataSource.paginator = this.paginator;
            this.spinner.hide();
          }
        }
      });
  }

  disableForm(route?) {
    if (!isNullOrUndefined(route)) {
      this.branchFormData.controls['ledgerCode'].disable();
      this.branchFormData.controls['branchCode'].disable();
      this.branchFormData.controls['cashPaymentDate'].disable();
      this.branchFormData.controls['vehicleRegNo'].disable();
      this.branchFormData.controls['ledgerName'].disable();
      this.branchFormData.controls['stateCode'].disable();
      this.branchFormData.controls['paymentMode'].disable();
      this.branchFormData.controls['memberName'].disable();
      this.branchFormData.controls['customerGstin'].disable();
      this.branchFormData.controls['generalNo'].disable();
      this.branchFormData.controls['amountInWords'].disable();
      this.branchFormData.controls['suppliedTo'].disable();
    }

    this.branchFormData.controls['voucherNo'].disable();
    this.branchFormData.controls['totalAmount'].disable();
  }


  getCashReceiptBranchesList() {
    const getCashReceiptBranchesListUrl = String.Join('/', this.apiConfigService.getCashReceiptBranchesList);
    this.apiService.apiGetRequest(getCashReceiptBranchesListUrl).subscribe(
      response => {
        const res = response.body;
        if (!isNullOrUndefined(res) && res.status === StatusCodes.pass) {
          if (!isNullOrUndefined(res.response)) {
            if (!isNullOrUndefined(res.response['BranchesList']) && res.response['BranchesList'].length) {
              this.GetBranchesListArray = res.response['BranchesList'];
              this.spinner.hide();
            }
          }
        }
      });
  }

  genarateVoucherNo(branch?) {
    let genarateVoucherNoUrl;
    if (!isNullOrUndefined(branch)) {
      genarateVoucherNoUrl = String.Join('/', this.apiConfigService.getCashReceiptVoucherNo, branch);
    } else {
      genarateVoucherNoUrl = String.Join('/', this.apiConfigService.getCashReceiptVoucherNo, this.branchFormData.get('branchCode').value);
    }
    this.apiService.apiGetRequest(genarateVoucherNoUrl).subscribe(
      response => {
        const res = response.body;
        if (!isNullOrUndefined(res) && res.status === StatusCodes.pass) {
          if (!isNullOrUndefined(res.response)) {
            if (!isNullOrUndefined(res.response['BranchesList'])) {
              this.branchFormData.patchValue({
                voucherNo: res.response['BranchesList']
              });
              this.spinner.hide();
            }
          }
        }
      });
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.getmemberNamesArray.filter(option => option.text.toLowerCase().includes(filterValue));
  }
  
  addTableRow() {
    const tableObj = {
      accountCode: '', accountName: '', amount: '', delete: '', text: 'obj'
    };
    if (!isNullOrUndefined(this.dataSource)) {
      this.dataSource.data.push(tableObj);
      this.dataSource = new MatTableDataSource(this.dataSource.data);
    } else {
      this.dataSource = new MatTableDataSource([tableObj]);
    }
    this.dataSource.paginator = this.paginator;
  }

  formGroup() {
    this.tableFormData = this.formBuilder.group({
      voucherNo: [null],
      cashPaymentDate: [null],
      stateCode: [null],
      shiftId: [null],
      userId: [null],
      employeeId: [null],
      productId: [null],
      hsnNo: [null],
      accountCode: [null, [Validators.required]],
      accountName: [null, [Validators.required]],
      rate: [null],
      productGroupId: [null],
      productGroupCode: [null],
      pumpID: [null],
      pumpNo: [null],
      qty: [null],
      fQty: [null],
      slipNo: [null],
      unitId: [null],
      unitName: [null],
      discount: [null],
      taxGroupId: [null],
      taxGroupCode: [null],
      taxGroupName: [null],
      taxStructureId: [null],
      taxStructureCode: [null],
      cgst: [null],
      sgst: [null],
      igst: [null],
      grossAmount: [null],
      totalGST: [null],
      availStock: [null],
    });
  }

  setToFormModel(text, column, value) {
    this.tableFormObj = true;
    if (text == 'obj') {
      this.tableFormData.patchValue({
        [column]: value
      });
    }
    if (this.tableFormData.valid) {
      this.addTableRow();
      this.formGroup();
      this.tableFormObj = false;
    }
  }

  clearQty(index, value, column) {
    this.dataSource.data[index].qty = null;
    this.dataSource.data[index].fQty = null;
    this.dataSource.data[index][column] = value;
    this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
  }

  deleteRow(i) {
    this.dataSource.data = this.dataSource.data.filter((value, index, array) => {
      return index !== i;
    });
    this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }

  getAccountByAccountCode(value) {
    if (!isNullOrUndefined(value) && value != '') {
      const getAccountLedgerListUrl = String.Join('/', this.apiConfigService.getCashRAccountLedgerList, value);
      this.apiService.apiGetRequest(getAccountLedgerListUrl).subscribe(
        response => {
          const res = response.body;
          if (!isNullOrUndefined(res) && res.status === StatusCodes.pass) {
            if (!isNullOrUndefined(res.response)) {
              if (!isNullOrUndefined(res.response['AccountLedgerList'])) {
                this.getAccountLedgerListArray = res.response['AccountLedgerList'];
                this.spinner.hide();
              }
            }
          }
        });
    } else {
      this.getAccountLedgerListArray = [];
    }
  }

  calculateAmount(row, index) {
    let amount = 0;
    for (let a = 0; a < this.dataSource.data.length; a++) {
      if (this.dataSource.data[a].amount) {
        amount = amount + this.dataSource.data[a].amount;
      }
    }
    this.branchFormData.patchValue({
      totalAmount : amount
    });
  }

  setAccountName(value) {
    let flag = true;
    for (let t = 0; t < this.getAccountLedgerListArray.length; t++) {
      if (this.getAccountLedgerListArray[t]['id'] == value.value) {
        for (let d = 0; d < this.dataSource.data.length; d++) {
          if (this.dataSource.data[d]['accountCode'] == this.getAccountLedgerListArray[t]['id']) {
            this.dataSource.data[d]['accountName'] = this.getAccountLedgerListArray[t]['text'];
            this.tableFormData.patchValue({
              accountCode : this.getAccountLedgerListArray[t].id,
              accountName : this.getAccountLedgerListArray[t].text
            });
            flag = false;
            break;
          }
        }
      }
    }
    if(flag) {
        this.dataSource.data[this.dataSource.data.length - 1].accountCode = value.value;
        for (let t = 0; t < this.getAccountLedgerListArray.length; t++) {
          if (this.getAccountLedgerListArray[t]['id'] == value.value) {
            for (let d = 0; d < this.dataSource.data.length; d++) {
              if (this.dataSource.data[d]['accountCode'] == this.getAccountLedgerListArray[t]['id']) {
                this.dataSource.data[d]['accountName'] = this.getAccountLedgerListArray[t]['text'];
                this.tableFormData.patchValue({
                  accountCode : this.getAccountLedgerListArray[t].id,
                          accountName : this.getAccountLedgerListArray[t].text
                        });
                break;
              }
            }
          }
        }
    }
    this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.data,this.tableFormData);
    //this.setToFormModel();

  }

  getAccountByAccountName(value) {
    if (!isNullOrUndefined(value) && value != '') {
      const getAccountLedgerListUrl = String.Join('/', this.apiConfigService.getAccountLedgerList, value);
      this.apiService.apiGetRequest(getAccountLedgerListUrl).subscribe(
        response => {
          const res = response.body;
          if (!isNullOrUndefined(res) && res.status === StatusCodes.pass) {
            if (!isNullOrUndefined(res.response)) {
              if (!isNullOrUndefined(res.response['AccountLedgerList'])) {
                this.getAccountLedgerListNameArray = res.response['AccountLedgerList'];
                this.spinner.hide();
              }
            }
          }
        });
    } else {
      this.getAccountLedgerListNameArray = [];
    }
  }


  save() {
    if (!this.tableFormObj) {
      this.dataSource.data.pop();
      console.log(this.dataSource.data);
    }
    let totalGross = null;
    let totalInvoiceAmount = null;
    this.dataSource.data.forEach(element => {
      totalGross = element.grossAmount + totalGross;
      totalInvoiceAmount = element.totalInvoiceAmount + totalInvoiceAmount;
    });

    console.log(this.branchFormData, this.dataSource.data);

    this.registerInvoice();
  }

  reset() {
    console.log(this.branchFormData);
    this.branchFormData.reset();
    this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
  }

  registerInvoice() {
    const registerInvoiceUrl = String.Join('/', this.apiConfigService.registerInvoice);
    const requestObj = { InvoiceHdr: this.branchFormData, InvoiceDetail: this.dataSource.data };
    this.apiService.apiPostRequest(registerInvoiceUrl, requestObj).subscribe(
      response => {
        const res = response.body;
        if (!isNullOrUndefined(res) && res.status === StatusCodes.pass) {
          if (!isNullOrUndefined(res.response)) {
            this.alertService.openSnackBar(Static.LoginSussfull, Static.Close, SnackBar.success);
          }
        }
      });
  }

}