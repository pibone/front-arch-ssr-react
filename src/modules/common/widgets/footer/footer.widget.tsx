import React from 'react'
import styles from './footer.module.css'
import { usePokemons } from '@/common/api/pokemon'
import { Icons } from '@/common/components/icons'
import { Button } from '@/common/components/ui/button'
export type FooterWidgetProps = {}

export function FooterWidget(props: FooterWidgetProps) {
    const { pagination, isLoading } = usePokemons({ size: 20 })

    if (isLoading) {
        return <Icons.spinner className="animate-spin h-8 w-8" />
    }
    return (
        <div data-testid="footer-widget" className={styles.container}>
            {pagination.pageData?.map((item, idx) => (
                <div key={idx}>{JSON.stringify(item)}</div>
            ))}
            <Button onClick={pagination.goToFirstPage}>First</Button>
            <Button onClick={pagination.goToPrevPage}>Prev</Button>
            {pagination.currentPage}
            <Button onClick={pagination.goToNextPage}>Next</Button>
            <Button onClick={pagination.goToLastPage}>Last</Button>
            Total de páginas: {pagination.totalPages}
        </div>
    )
}
