import { Injectable } from '@angular/core';
import { ApiConfigService } from '../../../services/api-config.service';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  dynamicData = { url: '', component: null, registerUrl: '', listName: '', updateUrl: '' , primaryKey: '', deleteUrl: '', coustom: true};

  constructor(
    private apiConfigService: ApiConfigService

  ) { }

  getRouteUrls(data) {
    switch (data) {
      case 'cashpayment':
        this.dynamicData.coustom = false;
        return this.dynamicData;
        break;
        case 'cashreceipt':
          this.dynamicData.coustom = false;
          return this.dynamicData;
          break;
          case 'bankpayment':
            this.dynamicData.coustom = false;
            return this.dynamicData;
            break;
     default:
    }
   }
}