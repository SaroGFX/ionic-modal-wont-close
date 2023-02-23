import { forwardRef } from 'react';
import { IonInput, IonIcon } from '@ionic/react';

import loginFormCSS from './LoginForm.module.scss';

export interface LoginItemProps {
    register: any;
    icon: string;
    type: string;
    label: string;
    required?: boolean;
    error?: string;
    onChange?: Function;
}

const LoginItem = forwardRef<HTMLIonInputElement, LoginItemProps>((props, ref) => {
    const { register, error, label, icon, type, required, onChange } = props;

    return (
        <div className={[loginFormCSS.Input, error && loginFormCSS.Error].join(' ')}>
            <IonInput
                {...register}
                ref={ref}
                type={type}
                inputMode={type === 'number' && 'numeric'}
                required={required}
                placeholder={!error ? label : error}
                onIonChange={onChange}
                autocomplete={register.name === 'TwoFactorCode' && 'one-time-code'}
            >
                <IonIcon slot="start" icon={icon} />
            </IonInput>
        </div>
    );
});

export default LoginItem;
