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
enum PaymentStatus {
    FAILED = 'failed',
    SUCCESS = 'success'
};

interface IPayment {
    sum: number;
    from: number;
    to: number;
};

interface IPaymentRequest extends IPayment {};

interface IDataSuccess extends IPayment{
    databaseId: number;
};

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
};

interface IResponseSuccess {
    status: PaymentStatus.SUCCESS;
    data: IDataSuccess;
};

interface IResponseFailed {
    status: PaymentStatus.FAILED;
    data: IDataFailed;
};

type f = (res: IResponseSuccess | IResponseFailed) => number;

type Res = IResponseSuccess | IResponseFailed;

function getResponse(response: Res): response is IResponseSuccess {
    return response.status === PaymentStatus.SUCCESS; 
};

function getIdFromData(res: Res): number {
    if (getResponse(res)) {
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage);
    }
};
