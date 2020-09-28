import { PaypalCommerceSDK } from './paypal-commerce-sdk';

export function getPaypalCommerceMock(): PaypalCommerceSDK {
    return {
        FUNDING: {
            PAYPAL: 'paypal',
            CREDIT: 'credit',
            BANCONTACT: 'Bancontact',
            GIROPAY: 'giropay',
            PRZLEWY24: 'p24',
        },
        Buttons: () => ({
            render: jest.fn(),
            close: jest.fn(),
            isEligible: jest.fn(() => true),
        }),
        HostedFields: {
            isEligible: () => true,
            render: jest.fn(),
        },
    };
}
