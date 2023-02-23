import * as yup from "yup";

import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useRef } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { personOutline, keyOutline } from "ionicons/icons";

import { LoginItem } from "../components";

// CSS
import loginFormCSS from "./LoginForm.module.scss";

type loginFormType = {
    email: string;
    password: string;
    twoFactorToken?: string;
};

const LoginForm: React.FC = () => {
    const { t } = useTranslation();

    const loginFormSchema: yup.ObjectSchema<any> = yup.object().shape({
        email: yup
            .string()
            .required(t("security:Required", { input: t("security:Email") })),
        password: yup
            .string()
            .required(
                t("security:Required", { input: t("security:Password") })
            ),
        twoFactorToken: yup.string().optional(),
    });

    const {
        register,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {} as loginFormType,
        resolver: yupResolver(loginFormSchema),
    });

    // Get ref and share with form-hook
    const emailInputRegister: UseFormRegisterReturn<"email"> =
        register("email");
    const emailInputRef: React.MutableRefObject<HTMLIonInputElement | null> =
        useRef<HTMLIonInputElement | null>(null);

    const passwordInputRegister: UseFormRegisterReturn<"password"> =
        register("password");
    const passwordInputRef: React.MutableRefObject<HTMLIonInputElement | null> =
        useRef<HTMLIonInputElement | null>(null);

    // Manually firing input for iOS webkit autocomplete bug
    // https://bugs.webkit.org/show_bug.cgi?id=226023

    const handleInputChange = (e: any): void => {
        setValue(e.target.name, e.target.value);
    };

    const addListener = (
        ref: React.MutableRefObject<HTMLIonInputElement | null>
    ): void => {
        const input = retrieveInputFromReference(ref);

        input?.addEventListener("change", handleInputChange);
    };

    const removeListener = (
        ref: React.MutableRefObject<HTMLIonInputElement | null>
    ): void => {
        const input = retrieveInputFromReference(ref);

        input?.removeEventListener("change", handleInputChange);
    };

    const retrieveInputFromReference = (
        reference: React.MutableRefObject<HTMLIonInputElement | null>
    ): Element | undefined => {
        if (reference.current !== null) {
            return reference.current.children[1];
        }
    };

    useEffect(() => {
        addListener(emailInputRef);
        addListener(passwordInputRef);

        return function cleanup() {
            removeListener(emailInputRef);
            removeListener(passwordInputRef);
        };
    });

    return (
        <div className={loginFormCSS.LoginForm}>
            <form noValidate>
                <LoginItem
                    register={emailInputRegister}
                    ref={(e: HTMLIonInputElement): void => {
                        emailInputRegister.ref(e);
                        emailInputRef.current = e;
                    }}
                    error={errors.email?.message}
                    label={t("security:Email")}
                    type="email"
                    required
                    icon={personOutline}
                />

                <LoginItem
                    register={passwordInputRegister}
                    ref={(e: HTMLIonInputElement): void => {
                        passwordInputRegister.ref(e);
                        passwordInputRef.current = e;
                    }}
                    error={errors.password?.message}
                    type="password"
                    label={t("security:Password")}
                    required
                    icon={keyOutline}
                />

                <div className={loginFormCSS.NoAccount}>
                    <span>'No Account?</span>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
