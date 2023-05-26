import React, { ComponentPropsWithRef } from 'react'
import { Button } from '../ui/button'
import { Icons } from '../icons'

export function LoadingButton({
    loading,
    children,
    ...props
}: ComponentPropsWithRef<typeof Button> & { loading?: boolean }) {
    return (
        <Button {...props} data-testid="loading-button">
            {loading && <Icons.spinner className="animate-spin w-8 h-8 mr-2" />}
            {children}
        </Button>
    )
}
