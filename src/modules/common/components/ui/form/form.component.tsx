import React, { ComponentPropsWithoutRef, ReactElement, useMemo } from 'react'
import { Slot } from '@radix-ui/react-slot'
import {
    useForm as useHookForm,
    Controller,
    ControllerProps,
    FieldPath,
    FieldValues,
    FormProvider,
    UseFormProps,
    SubmitErrorHandler,
    useFormContext,
    DeepPartial,
} from 'react-hook-form'
import cn from 'classnames'
import { Label as UILabel } from '../label'
import styles from './form.module.css'
import { ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input as UIInput } from '../input'

export type FormProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any
> = ComponentPropsWithoutRef<typeof FormProvider<TFieldValues, TContext>> &
    ComponentPropsWithoutRef<'form'>

export const Root = React.forwardRef<HTMLFormElement, FormProps>(
    (
        {
            children,
            className,
            watch,
            getValues,
            getFieldState,
            setError,
            clearErrors,
            setValue,
            trigger,
            formState,
            resetField,
            reset,
            handleSubmit,
            unregister,
            control,
            register,
            setFocus,
            ...props
        }: FormProps,
        ref
    ) => {
        const providerProps = {
            watch,
            getValues,
            getFieldState,
            setError,
            clearErrors,
            setValue,
            trigger,
            formState,
            resetField,
            reset,
            handleSubmit,
            unregister,
            control,
            register,
            setFocus,
        }
        return (
            <FormProvider {...providerProps}>
                <form
                    data-testid="form"
                    ref={ref}
                    className={cn(className, styles.container)}
                    {...props}
                >
                    {children}
                </form>
            </FormProvider>
        )
    }
) as (<TFieldValues extends FieldValues = FieldValues, TContext = any>(
    props: FormProps<TFieldValues, TContext>
) => ReactElement) & { displayName: string }
Root.displayName = 'FormRoot'
export const FormRoot = Root

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue
)

export function Field<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ ...props }: ControllerProps<TFieldValues, TName>) {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    )
}
export const FormField = Field

export type UseZodFormSubmitHandler<TFormSchema> = (
    data: TFormSchema,
    event: React.BaseSyntheticEvent | undefined,
    setSubmitError: (message: string) => void
) => unknown | Promise<unknown>

export const useForm = useHookForm
export function useZodForm<
    TFormSchema extends FieldValues = FieldValues,
    TContext = any
>({
    defaultValues,
    schema,
    onSubmit,
    onFormError: onError = () => {},
    ...props
}: Omit<UseFormProps<TFormSchema, TContext>, 'resolver' | 'defaultValues'> & {
    defaultValues: TFormSchema
    schema: ZodType<TFormSchema>
    onSubmit: UseZodFormSubmitHandler<TFormSchema>
    onFormError?: SubmitErrorHandler<TFormSchema>
}) {
    const form = useForm<TFormSchema, TContext>({
        defaultValues: defaultValues as DeepPartial<TFormSchema>,
        ...props,
        resolver: zodResolver(schema),
    })

    return useMemo(
        () => ({
            ...form,
            onSubmit: form.handleSubmit(async (data, event) => {
                await onSubmit(data, event, (message) =>
                    form.setError('root', { type: 'server', message })
                )
            }, onError),
        }),
        [onSubmit, onError, form]
    )
}

export const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext)
    const itemContext = React.useContext(FormItemContext)
    const formContext = useFormContext()
    const { getFieldState, formState } = formContext

    const fieldState = getFieldState(fieldContext.name, formState)

    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>')
    }

    const { id } = itemContext

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    }
}

type FormItemContextValue = {
    id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({
    idValue: undefined,
    get id() {
        if (this.idValue) return this.idValue
        throw new Error('Context id is not defined')
    },
    set id(value: string) {
        this.idValue = value
    },
} as FormItemContextValue & { idValue?: string })

export const Item = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const id = React.useId()

    return (
        <FormItemContext.Provider value={{ id }}>
            <div ref={ref} className={cn(styles.item, className)} {...props} />
        </FormItemContext.Provider>
    )
})
Item.displayName = 'FormItem'
export const FormItem = Item

export const Label = React.forwardRef<
    React.ElementRef<typeof UILabel>,
    React.ComponentPropsWithoutRef<typeof UILabel>
>(({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField()

    return (
        <UILabel
            ref={ref}
            className={cn(error && styles.error, className)}
            htmlFor={formItemId}
            {...props}
        />
    )
})
Label.displayName = 'FormLabel'
export const FormLabel = Label

export const Control = React.forwardRef<
    HTMLInputElement,
    React.ComponentPropsWithoutRef<'input'>
>(({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } =
        useFormField()

    const Comp = props.children ? Slot : UIInput

    return (
        <Comp
            ref={ref}
            id={formItemId}
            aria-describedby={
                !error
                    ? `${formDescriptionId}`
                    : `${formDescriptionId} ${formMessageId}`
            }
            aria-invalid={!!error}
            {...props}
        />
    )
})
Control.displayName = 'FormControl'
export const FormControl = Control
export const Input = Control
export const FormInput = Control

export const Description = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField()

    return (
        <p
            ref={ref}
            id={formDescriptionId}
            className={cn(styles.description, className)}
            {...props}
        />
    )
})
Description.displayName = 'FormDescription'
export const FormDescription = Description

export const CustomMessage = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement> & { isError?: boolean }
>(({ className, children, isError, ...props }, ref) => {
    return children ? (
        <p
            ref={ref}
            className={cn(isError && styles.error, styles.message, className)}
            {...props}
        >
            {children}
        </p>
    ) : (
        <p style={{ display: 'none' }} />
    )
})
CustomMessage.displayName = 'FormCustomMessage'
export const FormCustomMessage = CustomMessage

export const Message = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement> & { showAlways?: boolean }
>(({ className, children, showAlways, ...props }, ref) => {
    const { error, formMessageId } = useFormField()
    const body = children ?? String(error?.message)

    if (!showAlways && !error) {
        return null
    }

    return (
        <p
            ref={ref}
            id={formMessageId}
            className={cn(error && styles.error, styles.message, className)}
            {...props}
        >
            {body}
        </p>
    )
})
Message.displayName = 'FormMessage'
export const FormMessage = Message
