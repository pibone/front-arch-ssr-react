import {
    AlertTriangle,
    ArrowRight,
    Check,
    ChevronLeft,
    ChevronRight,
    ClipboardCheck,
    Copy,
    File,
    HelpCircle,
    Image,
    Loader2,
    Moon,
    MoreVertical,
    Plus,
    Settings,
    SunMedium,
    Trash,
    Twitter,
    User,
    X,
    Minus,
    Linkedin,
    Facebook,
    Instagram,
    Youtube,
} from 'lucide-react'

export const Icons = {
    logo: (props) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <circle cx="12" cy="12" r="10" />
        </svg>
    ),
    // informative icons
    spinner: Loader2,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    trash: Trash,
    file: File,
    media: Image,
    warning: AlertTriangle,
    user: User,
    arrowRight: ArrowRight,
    check: Check,
    // action icons
    darkTheme: Moon,
    lightTheme: SunMedium,
    close: X,
    settings: Settings,
    options: MoreVertical,
    add: Plus,
    remove: Minus,
    help: HelpCircle,
    copy: Copy,
    copyDone: ClipboardCheck,
    // social icons
    twitter: Twitter,
    linkedin: Linkedin,
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
}
