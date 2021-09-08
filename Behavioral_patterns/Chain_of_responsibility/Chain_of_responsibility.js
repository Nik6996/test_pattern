var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.setNext = function (account) {
        this.nextAccount = account;
        return account;
    };
    Account.prototype.pay = function (amountToPay) {
        if (this.canPay(amountToPay)) {
            console.log('Оплата прошла успешно');
            return true;
        }
        if (this.nextAccount) {
            console.log('Оплата не удалась');
            return this.nextAccount.pay(amountToPay);
        }
        console.log('Недостаточно средств');
        return false;
    };
    Account.prototype.canPay = function (amount) {
        return this.balance >= amount;
    };
    return Account;
}());
var BankAccount = /** @class */ (function (_super) {
    __extends(BankAccount, _super);
    function BankAccount(balance) {
        var _this = _super.call(this) || this;
        _this.balance = balance;
        return _this;
    }
    return BankAccount;
}(Account));
var PaypalAccount = /** @class */ (function (_super) {
    __extends(PaypalAccount, _super);
    function PaypalAccount(balance) {
        var _this = _super.call(this) || this;
        _this.balance = balance;
        return _this;
    }
    return PaypalAccount;
}(Account));
var BitcoinAccount = /** @class */ (function (_super) {
    __extends(BitcoinAccount, _super);
    function BitcoinAccount(balance) {
        var _this = _super.call(this) || this;
        _this.balance = balance;
        return _this;
    }
    return BitcoinAccount;
}(Account));
var bank = new BankAccount(100);
var paypal = new PaypalAccount(200);
var bitcoin = new BitcoinAccount(400);
bank.setNext(paypal);
paypal.setNext(bitcoin);
bank.pay(500);
//# sourceMappingURL=Chain_of_responsibility.js.map