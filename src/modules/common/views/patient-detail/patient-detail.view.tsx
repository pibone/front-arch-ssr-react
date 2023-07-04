import React from 'react'

type PatientDetailViewProps = {
    // query parameters
    searchParams: { [key: string]: string | string[] | undefined }
    // url parameters
    params: { patientId?: string }
}

export function PatientDetailView({
    params,
    searchParams,
}: PatientDetailViewProps) {
    console.log(searchParams)

    if (!params.patientId) {
        return <div>No patient</div>
    }

    return <div>The patient is: {params.patientId}</div>
}
