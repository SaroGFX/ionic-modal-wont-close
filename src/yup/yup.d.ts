import * as yup from 'yup';
import { AnyObject, Maybe } from 'yup/lib/types';

declare module 'yup' {
    // Since official types for yup don't support originalValue (even tho is there) we overrided it.
    // Link: https://github.com/jquense/yup/pull/1527#issue-1075137110
    export interface TestContext<C = object> {
        path: string;
        options: ValidateOptions<C>;
        parent: any;
        schema: Schema<any, C>;
        originalValue: any;
        resolve: (value: any) => any;
        createError: (params?: { path?: string; message?: string; params?: object }) => ValidationError;
    }

    interface StringSchema<
        TType extends Maybe<string> = string | undefined,
        TContext extends AnyObject = AnyObject,
        TOut extends TType = TType
    > extends yup.BaseSchema<TType, TContext, TOut> {
        emptyAsUndefined(): StringSchema<TType, TContext>;
        quantityWithUnit(field?: string): StringSchema<TType, TContext>;
        requiredField(field?: string, overrideMessage?: boolean = false): StringSchema<TType, TContext>;
        multipleEmails(field?: string, overrideMessage?: boolean = false): StringSchema<TType, TContext>;
    }

    interface NumberSchema<
        TType extends Maybe<number> = number | undefined,
        TContext extends AnyObject = AnyObject,
        TOut extends TType = TType
    > extends yup.BaseSchema<TType, TContext, TOut> {
        emptyAsUndefined(): NumberSchema<TType, TContext>;
        noNotation(field?: string): StringSchema<TType, TContext>;
        requiredField(field?: string, overrideMessage?: boolean = false): NumberSchema<TType, TContext>;
    }
}
