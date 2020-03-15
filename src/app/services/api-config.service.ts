import { Injectable } from '@angular/core';
import { RuntimeConfigService } from './runtime-config.service';

@Injectable({
   providedIn: 'root'
})
export class ApiConfigService {

   constructor(private environment: RuntimeConfigService) {
      // environment.loadRuntimeConfig()
   }

   // login Url
   loginUrl = `${this.environment.runtimeConfig.serverUrl}Auth/login`;


   companiesUrl = `${this.environment.runtimeConfig.serverUrl}Company/masters/companies`;
   branchesUrl = `${this.environment.runtimeConfig.serverUrl}Branches/masters/branches`;
   getMenuUrl = `${this.environment.runtimeConfig.serverUrl}Auth/getMenu/admin`;
   companiesAddUrl = `${this.environment.runtimeConfig.serverUrl}Company/masters/companies/register`;


   // master -------------------------------------------------------

   // --- company
   getCompanysList = `${this.environment.runtimeConfig.serverUrl}masters/Company/GetCompanysList`;
   registerCompany = `${this.environment.runtimeConfig.serverUrl}masters/Company/RegisterCompany`;
   updateCompany = `${this.environment.runtimeConfig.serverUrl}masters/Company/UpdateCompany`;
   deleteCompany = `${this.environment.runtimeConfig.serverUrl}masters/Company/DeleteCompany`;


   // --- Branches
   getBranchesList = `${this.environment.runtimeConfig.serverUrl}masters/Branches/GetBranchesList`;
   registerBranch = `${this.environment.runtimeConfig.serverUrl}masters/Branches/RegisterBranch`;
   updateBranch = `${this.environment.runtimeConfig.serverUrl}masters/Branches/UpdateBranch`;
   deleteBranches = `${this.environment.runtimeConfig.serverUrl}masters/Branches/DeleteBranches`;













   // --- division
   getDivisionsList = `${this.environment.runtimeConfig.serverUrl}masters/Division/GetDivisionsList`;
   registerDivision = `${this.environment.runtimeConfig.serverUrl}masters/Division/RegisterDivision`;
   updateDivision = `${this.environment.runtimeConfig.serverUrl}masters/Division/UpdateDivision`;
   deleteDivision = `${this.environment.runtimeConfig.serverUrl}masters/Division/DeleteDivision`;

   // --- Tax Master
   getTaxmastersList = `${this.environment.runtimeConfig.serverUrl}masters/TaxMaster/GetTaxmastersList`;
   registerTaxMasters = `${this.environment.runtimeConfig.serverUrl}masters/TaxMaster/RegisterTaxMasters`;
   updateTaxMaster = `${this.environment.runtimeConfig.serverUrl}masters/TaxMaster/UpdateTaxMaster`;
   deleteTaxMaster = `${this.environment.runtimeConfig.serverUrl}masters/TaxMaster/DeleteTaxMaster`;

   // --- Employee
   getEmployeeList = `${this.environment.runtimeConfig.serverUrl}masters/Employee/GetEmployeeList`;
   registerEmployee = `${this.environment.runtimeConfig.serverUrl}masters/Employee/RegisterEmployee`;
   updateEmployee = `${this.environment.runtimeConfig.serverUrl}masters/Employee/UpdateEmployee`;
   deleteEmployee = `${this.environment.runtimeConfig.serverUrl}masters/Employee/DeleteEmployee`;

   // --- EmployeeInBranch
   getAllEmployeesInBranch = `${this.environment.runtimeConfig.serverUrl}masters/EmployeeInBranch/GetAllEmployeesInBranch`;
   getEmployeeInBranchList = `${this.environment.runtimeConfig.serverUrl}masters/EmployeeInBranch/GetEmployeeList`;
   getBranchesBranchList = `${this.environment.runtimeConfig.serverUrl}masters/EmployeeInBranch/GetBranchesList`;
   registerEmployeeInBranch = `${this.environment.runtimeConfig.serverUrl}masters/EmployeeInBranch/RegisterEmployeeInBranch`;
   updateEmployeeInBranch = `${this.environment.runtimeConfig.serverUrl}masters/EmployeeInBranch/UpdateEmployeeInBranch`;
   deleteEmployeeInBranch = `${this.environment.runtimeConfig.serverUrl}masters/EmployeeInBranch/DeleteEmployeeInBranch`;

   // --- PartnerType
   getPartnerTypesList = `${this.environment.runtimeConfig.serverUrl}masters/PartnerType/GetPartnerTypeList`;
   registerPartnerType = `${this.environment.runtimeConfig.serverUrl}masters/PartnerType/RegisterPartnerType`;
   updatePartnerType = `${this.environment.runtimeConfig.serverUrl}masters/PartnerType/UpdatePartnerType`;
   deletePartnerType = `${this.environment.runtimeConfig.serverUrl}masters/PartnerType/DeletePartnerType`;

   // --- NoSeries
   getNoSeriesList = `${this.environment.runtimeConfig.serverUrl}masters/NoSeries/GetNoSeriesList`;
   registerNoSeries = `${this.environment.runtimeConfig.serverUrl}masters/NoSeries/RegisterNoSeries`;
   updateNoSeries = `${this.environment.runtimeConfig.serverUrl}masters/NoSeries/UpdateNoSeries`;
   deleteNoSeries = `${this.environment.runtimeConfig.serverUrl}masters/NoSeries/DeleteNoSeries`;


   // --- NoSeries - company
   getCompanyNoSeriesList = `${this.environment.runtimeConfig.serverUrl}masters/NoSeries/GetCompanyList`;
   getBranchesNoSeriesList = `${this.environment.runtimeConfig.serverUrl}masters/NoSeries/GetBranchesList`;
   getPartnerTypeNoSeriesList = `${this.environment.runtimeConfig.serverUrl}masters/NoSeries/GetPartnerTypeList`;


   // --- CostCenter
   GetCostCenterList = `${this.environment.runtimeConfig.serverUrl}masters/CostCenter/GetCostCenterList`;
   registerCostCenter = `${this.environment.runtimeConfig.serverUrl}masters/CostCenter/RegisterCostCenter`;
   updateCostCenter = `${this.environment.runtimeConfig.serverUrl}masters/CostCenter/UpdateCostCenter`;
   deleteCostCenter = `${this.environment.runtimeConfig.serverUrl}masters/CostCenter/DeleteCostCenter`;


   // --- PartnerCreation
   getCompaniesPartnerCreationList = `${this.environment.runtimeConfig.serverUrl}masters/PartnerCreation/GetCompaniesList`;
   getBranchesPartnerCreationList = `${this.environment.runtimeConfig.serverUrl}masters/PartnerCreation/GetBranchesList`;
   getPartnerPartnerCreationTypes = `${this.environment.runtimeConfig.serverUrl}masters/PartnerCreation/GetPartnerTypes`;
   getGlAccounts = `${this.environment.runtimeConfig.serverUrl}masters/PartnerCreation/GetGlAccounts`;
   getNatureList = `${this.environment.runtimeConfig.serverUrl}masters/PartnerCreation/GetNatureList`;
   getBalanceTypes = `${this.environment.runtimeConfig.serverUrl}masters/PartnerCreation/GetBalanceTypes`;
   getPartnerCreationList = `${this.environment.runtimeConfig.serverUrl}masters/PartnerCreation/GetPartnerCreationList`;


   registerPartnerCreation = `${this.environment.runtimeConfig.serverUrl}masters/PartnerCreation/RegisterCreation`;
   updatePartnerCreation = `${this.environment.runtimeConfig.serverUrl}masters/PartnerCreation/UpdatePartnerCreation`;
   deletePartnerCreation = `${this.environment.runtimeConfig.serverUrl}masters/PartnerCreation/DeletePartnerCreation`;

   // --- ProfitCenter
   getProfitCenterList = `${this.environment.runtimeConfig.serverUrl}masters/ProfitCenter/GetProfitCenterList`;
   registerProfitCenters = `${this.environment.runtimeConfig.serverUrl}masters/ProfitCenter/RegisterProfitCenters`;
   updateProfitCenters = `${this.environment.runtimeConfig.serverUrl}masters/ProfitCenter/UpdateProfitCenters`;
   deleteProfitCenters = `${this.environment.runtimeConfig.serverUrl}masters/ProfitCenter/DeleteProfitCenters`;


   // --- Segment
   getSegmentList = `${this.environment.runtimeConfig.serverUrl}masters/Segment/GetSegmentList`;
   registerSegment = `${this.environment.runtimeConfig.serverUrl}masters/Segment/RegisterSegment`;
   updateSegment = `${this.environment.runtimeConfig.serverUrl}masters/Segment/UpdateSegment`;
   deleteSegment = `${this.environment.runtimeConfig.serverUrl}masters/Segment/DeleteSegment`;



   // -----------------------------------------------------------------------------------------------
   // sales --------------------------------------------------------------------------------------

   // AsnBillsRcvBranch
   getAsnBillsRcvBranchList = `${this.environment.runtimeConfig.serverUrl}sales/AsnBillsRcvBranch/GetAsnBillsRcvBranchList`;
   getGLBillReceivableAccountsList = `${this.environment.runtimeConfig.serverUrl}sales/AsnBillsRcvBranch/GetGLBillReceivableAccountsList`;
   getBranchesAsnBillsRcvBranchList = `${this.environment.runtimeConfig.serverUrl}sales/AsnBillsRcvBranch/GetBranchesList`;
   registerAsnBillsRcvBranch = `${this.environment.runtimeConfig.serverUrl}sales/AsnBillsRcvBranch/RegisterAsnBillsRcvBranch`;
   updateAsnBillsRcvBranch = `${this.environment.runtimeConfig.serverUrl}sales/AsnBillsRcvBranch/UpdateAsnBillsRcvBranch`;
   deleteAsnBillsRcvBranch = `${this.environment.runtimeConfig.serverUrl}sales/AsnBillsRcvBranch/DeleteAsnBillsRcvBranch`;


   // CardType
   getcardtypeList = `${this.environment.runtimeConfig.serverUrl}sales/CardType/GetcardtypeList`;

   registerCardType = `${this.environment.runtimeConfig.serverUrl}sales/CardType/RegisterCardType`;
   updateCardType = `${this.environment.runtimeConfig.serverUrl}sales/CardType/UpdateCardType`;
   deleteCardType = `${this.environment.runtimeConfig.serverUrl}sales/CardType/DeleteCardType`;
   getTypeList = `${this.environment.runtimeConfig.serverUrl}sales/CardType/getTypeList`;
   getGLAccountsList = `${this.environment.runtimeConfig.serverUrl}sales/CardType/GetGLAccountsList`;


   // GeneralLedger --------------------------------------------------------------------------------------

   // AccountsGroup
   getAccountsGroupList = `${this.environment.runtimeConfig.serverUrl}gl/AccGroup/GetAccountGroupList`;
   registerGlaccGroup = `${this.environment.runtimeConfig.serverUrl}gl/AccGroup/RegisterGlaccGroup`;
   updateAccountGroup = `${this.environment.runtimeConfig.serverUrl}gl/AccGroup/UpdateAccountGroup`;
   deleteAccountGroup = `${this.environment.runtimeConfig.serverUrl}gl/AccGroup/DeleteAccountGroup`;

   // SubGroup
   getGLAccountSubGroupList = `${this.environment.runtimeConfig.serverUrl}gl/GLAccSubGroup/GetGLAccountSubGroupList`;
   registerGlaccSubGroup = `${this.environment.runtimeConfig.serverUrl}gl/GLAccSubGroup/RegisterGlaccSubGroup`;
   updateGLAccSubGroup = `${this.environment.runtimeConfig.serverUrl}gl/GLAccSubGroup/UpdateGLAccSubGroup`;
   deleteAccountSubGroup = `${this.environment.runtimeConfig.serverUrl}gl/GLAccSubGroup/DeleteAccountSubGroup`;
   getAccgrpList = `${this.environment.runtimeConfig.serverUrl}gl/GLAccSubGroup/GetGLAccountGroupList`;

   // UnderSubGroup
   getGLUnderSubGroupList = `${this.environment.runtimeConfig.serverUrl}gl/GLAccUnderSubGroup/GetGLUnderSubGroupList`;
   registerGLUnderSubGroup = `${this.environment.runtimeConfig.serverUrl}gl/GLAccUnderSubGroup/RegisterGlaccUnderSubGroup`;
   updateGLAccUnderSubGroup = `${this.environment.runtimeConfig.serverUrl}gl/GLAccUnderSubGroup/UpdateGLAccUnderSubGroup`;
   deleteGLAccUnderSubGroup = `${this.environment.runtimeConfig.serverUrl}gl/GLAccUnderSubGroup/DeleteGLAccUnderSubGroup`;
   getglAccgrpList = `${this.environment.runtimeConfig.serverUrl}gl/GLAccUnderSubGroup/GetGLAccountGrouplist`;
   getAccountSubGrouplist = `${this.environment.runtimeConfig.serverUrl}gl/GLAccUnderSubGroup/GetAccountSubGrouplist`;

   // GL Accounts
   getGLAccountList = `${this.environment.runtimeConfig.serverUrl}gl/GLAccounts/GetGLAccountsList`;
   registerGlaccounts = `${this.environment.runtimeConfig.serverUrl}gl/GLAccounts/RegisterGlaccounts`;
   updateGLAccounts = `${this.environment.runtimeConfig.serverUrl}gl/GLAccounts/UpdateGLAccounts`;
   deleteGlAccount = `${this.environment.runtimeConfig.serverUrl}gl/GLAccounts/DeleteGlAccount`;
   getStatementTypes = `${this.environment.runtimeConfig.serverUrl}gl/GLAccounts/GetStatementTypes`;
   getNaturesOfAcountsList = `${this.environment.runtimeConfig.serverUrl}gl/GLAccounts/GetNaturesOfAcountsList`;
   getGLAccBalanceTypes = `${this.environment.runtimeConfig.serverUrl}gl/GLAccounts/GetBalanceTypes`;
   getAccountGroupList = `${this.environment.runtimeConfig.serverUrl}gl/GLAccounts/GetAccountGroupList`;

   // GL Subcode
   getGLSubCodeList = `${this.environment.runtimeConfig.serverUrl}gl/GLSubCode/GetGLSubCodeList`;
   registerGlsubCode = `${this.environment.runtimeConfig.serverUrl}gl/GLSubCode/RegisterGlsubCode`;
   updateGLSubCode = `${this.environment.runtimeConfig.serverUrl}gl/GLSubCode/UpdateGLSubCode`;
   deleteGLSubCode = `${this.environment.runtimeConfig.serverUrl}gl/GLSubCode/DeleteGLSubCode`;
   getGLSubCodeAccountsList = `${this.environment.runtimeConfig.serverUrl}gl/GLSubCode/GetGLAccountsList`;

   // Tax Integration
   getTaxintigrationList = `${this.environment.runtimeConfig.serverUrl}gl/TaxIntegration/GetTaxintigrationList`;
   registerTaxIntegration = `${this.environment.runtimeConfig.serverUrl}gl/TaxIntegration/RegisterTaxIntegration`;
   updateTaxIntegration = `${this.environment.runtimeConfig.serverUrl}gl/TaxIntegration/UpdateTaxIntegration`;
   deleteTaxIntegration = `${this.environment.runtimeConfig.serverUrl}gl/TaxIntegration/DeleteTaxIntegration`;
   getTaxCodesList = `${this.environment.runtimeConfig.serverUrl}gl/TaxIntegration/GetTaxCodesList`;
   getGLTaxAccountList = `${this.environment.runtimeConfig.serverUrl}gl/TaxIntegration/GetGLTaxAccountList`;


   // Cash Acc To Branches
   getAsignCashAccBranchList = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentCashAccBranch/GetAsignCashAccBranchList`;
   registerAsigCashAccBranch = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentCashAccBranch/RegisterAsigCashAccBranch`;
   updateaAignmentCashAccBranch = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentCashAccBranch/UpdateaAignmentCashAccBranch`;
   //  deleteGlAccount = `${this.environment.runtimeConfig.serverUrl}gl/GLAccounts/DeleteGlAccount`;
   getCashAccBranchesList = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentCashAccBranch/GetBranchesList`;
   getBankAccounts = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentCashAccBranch/GetBankAccounts`;
   getCashAccounts = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentCashAccBranch/GetCashAccounts`;

   // Acc To Acc Class
   getAsigAcctoAccclassList = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentAcctoAccClass/GetAsigAcctoAccclassList`;
   registerAsigAcctoAccClass = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentAcctoAccClass/RegisterAsigAcctoAccClass`;
   //updateaAignmentCashAccBranch = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentCashAccBranch/UpdateaAignmentCashAccBranch`;
   //  deleteGlAccount = `${this.environment.runtimeConfig.serverUrl}gl/GLAccounts/DeleteGlAccount`;
   getAccountingClass = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentAcctoAccClass/GetAccountingClass`;
   getMatTranTypes = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentAcctoAccClass/GetMatTranTypes`;
   getSalesGlAccounts = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentAcctoAccClass/GetSalesGlAccounts`;
   getPurchaseGlAccounts = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentAcctoAccClass/GetPurchaseGlAccounts`;
   getInventoryGlAccounts = `${this.environment.runtimeConfig.serverUrl}gl/AsignmentAcctoAccClass/GetInventoryGlAccounts`;

   // Voucher Types
   getVoucherTypeList = `${this.environment.runtimeConfig.serverUrl}gl/VoucherType/GetVoucherTypeList`;
   registerVoucherTypes = `${this.environment.runtimeConfig.serverUrl}gl/VoucherType/RegisterVoucherTypes`;
   updateVoucherTypes = `${this.environment.runtimeConfig.serverUrl}gl/VoucherType/UpdateVoucherTypes`;
   deleteVoucherTypes = `${this.environment.runtimeConfig.serverUrl}gl/VoucherType/DeleteVoucherTypes`;
   getVoucherClassList = `${this.environment.runtimeConfig.serverUrl}gl/VoucherType/GetVoucherClassList`;
   getCompaniesList = `${this.environment.runtimeConfig.serverUrl}gl/VoucherType/GetCompaniesList`;
   getVoucherBranchesList = `${this.environment.runtimeConfig.serverUrl}gl/VoucherType/GetBranchesList`;

   //Reports
   getMemberMaster = `${this.environment.runtimeConfig.serverUrl}Reports/MemberMasterReport/GetMemberMasterReportData`;
   
   getEmployeeRegister = `${this.environment.runtimeConfig.serverUrl}Reports/EmployeeRegisterReport/GetEmployeeRegisterReportData`;
   
   getAccountLedger = `${this.environment.runtimeConfig.serverUrl}Reports/AccountLedgerReport/GetAccountLedgerReportData`;
   getAccountLedgersList=`${this.environment.runtimeConfig.serverUrl}Reports/AccountLedgerReport/GetAccountLedgersList`;
   
   getSaleValueReport = `${this.environment.runtimeConfig.serverUrl}Reports/SaleValueReport/GetSaleValueReportData`;
   getReportBranchList=`${this.environment.runtimeConfig.serverUrl}Reports/SaleValueReport/GetReportBranchList`;

   getDefaultShiftReport=`${this.environment.runtimeConfig.serverUrl}Reports/ShiftViewReport/GetDefaultShiftReportDataTableList`
   getShiftViewReport = `${this.environment.runtimeConfig.serverUrl}Reports/ShiftViewReport/GetShiftViewReportList`;

   getVehicalReport=`${this.environment.runtimeConfig.serverUrl}Reports/VehicalReport/GetVehicalReportData`;

   getIntimateSaleReport=`${this.environment.runtimeConfig.serverUrl}Reports/IntimateSaleReport/GetIntimateSaleReportData`;
  
   getSalesGSTReport=`${this.environment.runtimeConfig.serverUrl}Reports/SalesGSTReport/GetSalesGSTReportData`;

   getDailySalesReport=`${this.environment.runtimeConfig.serverUrl}Reports/DailySalesReport/GetDailySalesReportData`;

   getStockVerificationReport=`${this.environment.runtimeConfig.serverUrl}Reports/StockVerificationReport/GetStockVerificationReportData`;

   getStockLedgerForAllProducts=`${this.environment.runtimeConfig.serverUrl}Reports/StockLedgerReport/GetStockLedgerReportData`;
   getStockProducts=`${this.environment.runtimeConfig.serverUrl}Reports/StockLedgerReport/GetProductList`;

   getSalesAnalysisByBranch=`${this.environment.runtimeConfig.serverUrl}Reports/SalesAnalysisByBranch/GetSalesAnalysisByBranchrReportData`;
   
   getTwoFourehrsSalesStockReport=`${this.environment.runtimeConfig.serverUrl}Reports/TwoFourehrsSalesStockReport/Get24hrsSalesStockReportData`;

   getProductWiseMonthlyPurchaseReport=`${this.environment.runtimeConfig.serverUrl}Reports/ProductWiseMonthlyPurchaseReport/GetProductWiseMonthlyPurchaseReportData`;
}