import React, { ComponentProps, HTMLAttributes, useMemo } from 'react'
import { Slot } from '@radix-ui/react-slot'
import {
    useForm as useHookForm,
    Controller,
    ControllerProps,
    FieldPath,
    FieldValues,
    FormProvider,
    useFormContext,
    UseFormProps,
} from 'react-hook-form'
import cn from 'classnames'
import { Label as UILabel } from '../label'
import styles from './form.module.css'
import { infer as zinfer, Schema as ZodSchema } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input as UIInput } from '../input'

export type FormProps = ComponentProps<typeof FormProvider> &
    HTMLAttributes<'form'>

export const Root = React.forwardRef(
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
                    className={className}
                    {...props}
                >
                    {children}
                </form>
            </FormProvider>
        )
    }
)
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

export const useForm = useHookForm
export function useZodForm<TFormSchema extends ZodSchema, TContext>({
    schema,
    onSubmit,
    ...props
}: Omit<UseFormProps<{ hola: string }, TContext>, 'resolver'> & {
    schema: TFormSchema
    onSubmit: (values: zinfer<TFormSchema>) => void
}) {
    const form = useForm<zinfer<TFormSchema>, TContext>({
        ...props,
        resolver: zodResolver(schema),
    })

    return useMemo(
        () => ({
            ...form,
            onSubmit: form.handleSubmit(onSubmit),
        }),
        [onSubmit, form]
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
    idValue: null,
    get id() {
        if (this.idValue) return this.idValue
        throw new Error('Context id is not defined')
    },
    set id(value: string) {
        this.idValue = value
    },
} as FormItemContextValue & { idValue: string })

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

export const Control = React.forwardRef<'input', HTMLAttributes<'input'>>(
    ({ ...props }, ref) => {
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
    }
)
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
