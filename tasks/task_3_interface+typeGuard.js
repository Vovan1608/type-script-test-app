"use strict";
// 1-ый вариант
// enum PaymentStatus {
//     FAILED = 'failed',
//     SUCCESS = 'success'
// };
// interface IPayment {
//     sum: number;
//     from: number;
//     to: number;
// };
// interface IDataFailed {
//     errorMessage: string;
//     errorCode: number;
// };
// interface IDataSuccess {
//     databaseId: number;
//     sum: number;
//     from: number;
//     to: number;
// };
// interface IResponse {
//     status: PaymentStatus;
//     data: IDataFailed | IDataSuccess;
// };
// Этот вариант плох тем, что в IResponse если status='failed' может в data прийти IDataSuccess
// 2-й вариант
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["FAILED"] = "failed";
    PaymentStatus["SUCCESS"] = "success";
})(PaymentStatus || (PaymentStatus = {}));
;
;
;
;
;
;
;
function getResponse(response) {
    return response.status === PaymentStatus.SUCCESS;
}
;
function getIdFromData(res) {
    if (getResponse(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
;
