import i18next from 'i18next';
import { yup } from '../../../yup';

export const PinFormSchema = (pincodeLength: number): any => {
    return yup.object().shape({
        isNewPinCode: yup.boolean().required(),
        pinCode: yup
            .string()
            .requiredField('security:PinCode')
            .matches(/^[0-9]+$/, i18next.t('common:MustBeOnlyDigits'))
            .min(pincodeLength, i18next.t('common:ExactlyXDigits', { digits: pincodeLength }))
            .max(pincodeLength, i18next.t('common:ExactlyXDigits', { digits: pincodeLength })),
        verifyPinCode: yup.string().when('isNewPinCode', {
            is: true,
            then: yup
                .string()
                .requiredField('security:PinCode')
                .oneOf([yup.ref('pinCode'), null], i18next.t('security:PinCodesMustMatch')),
        }),
    });
};
