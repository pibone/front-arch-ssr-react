import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import cn from 'classnames'
import { buttonVariants } from '../button'
import styles from './calendar.module.css'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            data-testid="calendar"
            showOutsideDays={showOutsideDays}
            className={cn(styles.container, className)}
            classNames={{
                ...styles,
                nav_button: cn(
                    buttonVariants({ variant: 'outline' }),
                    styles.nav_button
                ),
                day: cn(buttonVariants({ variant: 'ghost' }), styles.day),
                ...classNames,
            }}
            components={{
                IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
                IconRight: ({ ...props }) => (
                    <ChevronRight className="h-4 w-4" />
                ),
            }}
            {...props}
        />
    )
}
Calendar.displayName = 'Calendar'

export { Calendar }
