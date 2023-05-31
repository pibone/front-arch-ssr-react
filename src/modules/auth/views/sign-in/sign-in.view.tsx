import React from 'react'

import { LoginWidget } from '../../widgets/login'

type SignInViewProps = {
    // query parameters
    searchParams: { [key: string]: string | string[] | undefined }
    // url parameters
    params: { [key: string]: string | undefined }
}

export function SignInView(props: SignInViewProps) {
    return (
        <>
            <div className="container relative md:h-[800px] grid items-center justify-stretch md:justify-center lg:max-w-none p-0">
                <div
                    className="absolute hidden md:block inset-0 bg-cover -z-10"
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80)',
                    }}
                />
                <div className="relative flex items-center justify-center px-4 lg:px-6 pt-4 pb-6">
                    <div className="absolute w-full h-full md:rounded-md bg-white p-2 -z-10" />
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold">
                                Account Sign In
                            </h1>
                            <p className="text-sm text-primary">
                                Enter your username below to create your account
                            </p>
                        </div>
                        <LoginWidget />
                    </div>
                </div>
            </div>
        </>
    )
}
