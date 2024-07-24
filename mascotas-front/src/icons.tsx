interface Props {
  className?: string
}

export const FilePenIcon = (props: Props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
  </svg>
)

export const TrashIcon = (props: Props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
)

export function HomeIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

export function Package2Icon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}

export function PawPrintIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  )
}

export function SettingsIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function UserIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export function UsersIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function MenuIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

export function MenuClosedIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

export function MenuOpenIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export function ChevronRightIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export function EyeIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function FilterIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

export function MoveVerticalIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="8 18 12 22 16 18" />
      <polyline points="8 6 12 2 16 6" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  )
}

export function PlusIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

export function SearchIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export function XIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export function ActivityIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}

export function ContactIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}

export function DicesIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
      <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
      <path d="M6 18h.01" />
      <path d="M10 14h.01" />
      <path d="M15 6h.01" />
      <path d="M18 9h.01" />
    </svg>
  )
}

export function MountainIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

export function TagsIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
      <path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="6.5" cy="9.5" r=".5" fill="currentColor" />
    </svg>
  )
}

export function FacebookIcon(props: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_171_347)">
        <path
          d="M23.5 12.0694C23.5 5.71811 18.3513 0.569391 12 0.569391C5.64872 0.569391 0.5 5.71811 0.5 12.0694C0.5 17.8094 4.70538 22.567 10.2031 23.4297V15.3936H7.2832V12.0694H10.2031V9.5358C10.2031 6.65361 11.92 5.06158 14.5468 5.06158C15.805 5.06158 17.1211 5.28619 17.1211 5.28619V8.11627H15.671C14.2424 8.11627 13.7969 9.00273 13.7969 9.91218V12.0694H16.9863L16.4765 15.3936H13.7969V23.4297C19.2946 22.567 23.5 17.8094 23.5 12.0694Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_171_347">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function InstagramIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function LinkedinIcon(props: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.44117 2C2.64548 2 2 2.62583 2 3.39684V20.1036C2 20.8747 2.64556 21.5 3.44117 21.5H20.0588C20.8548 21.5 21.5 20.8746 21.5 20.1034V3.39684C21.5 2.62583 20.8548 2 20.0588 2H3.44117ZM7.9257 9.54002V18.319H5.00771V9.54002H7.9257ZM8.11804 6.82502C8.11804 7.66748 7.48467 8.34161 6.46732 8.34161L6.4482 8.34153C5.46886 8.34153 4.83572 7.66741 4.83572 6.82495C4.83572 5.96337 5.48798 5.30806 6.48667 5.30806C7.48467 5.30806 8.099 5.96337 8.11804 6.82502ZM12.4586 18.319H9.54085C9.54085 18.319 9.57909 10.3639 9.54101 9.54032H12.4588V10.7829C12.8467 10.1849 13.5409 9.3342 15.0887 9.3342C17.0084 9.3342 18.4478 10.589 18.4478 13.2854V18.319H15.5301V13.623C15.5301 12.4427 15.1076 11.6377 14.052 11.6377C13.2457 11.6377 12.7656 12.1806 12.5547 12.705C12.4777 12.8922 12.4586 13.1549 12.4586 13.4169V18.319Z"
        fill="white"
      />
    </svg>
  )
}

export function TwitterIcon(props: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4133 5.93098C20.7825 6.20244 20.1194 6.39148 19.4402 6.4934C19.7577 6.43898 20.2249 5.86748 20.4109 5.63616C20.6934 5.28723 20.9087 4.88891 21.0459 4.46142C21.0459 4.42967 21.0776 4.38431 21.0459 4.36163C21.0299 4.3529 21.0119 4.34832 20.9937 4.34832C20.9755 4.34832 20.9576 4.3529 20.9416 4.36163C20.2041 4.76096 19.4193 5.06574 18.6057 5.26877C18.5773 5.27743 18.5471 5.27821 18.5184 5.27102C18.4896 5.26383 18.4633 5.24894 18.4424 5.22795C18.3791 5.15253 18.3109 5.08132 18.2383 5.01477C17.9064 4.71743 17.5299 4.47407 17.1225 4.2936C16.5726 4.06798 15.9786 3.97027 15.3853 4.00785C14.8097 4.0442 14.2478 4.19859 13.7344 4.46142C13.2288 4.73851 12.7845 5.11495 12.4281 5.56812C12.0532 6.03455 11.7825 6.57585 11.6343 7.15561C11.5121 7.70709 11.4983 8.27706 11.5935 8.83382C11.5935 8.92907 11.5935 8.94268 11.5119 8.92907C8.27792 8.45282 5.62455 7.30529 3.45649 4.84241C3.36124 4.73356 3.31135 4.73356 3.23424 4.84241C2.29082 6.27569 2.74892 8.54354 3.9282 9.66385C4.08695 9.81353 4.25023 9.95867 4.42259 10.0947C3.8819 10.0564 3.35441 9.90983 2.87138 9.66385C2.78067 9.60489 2.73078 9.63664 2.72624 9.74549C2.71338 9.89641 2.71338 10.0481 2.72624 10.1991C2.82088 10.9223 3.10591 11.6075 3.55219 12.1844C3.99847 12.7614 4.58998 13.2095 5.26623 13.4829C5.43108 13.5535 5.60286 13.6067 5.77876 13.6416C5.27821 13.7402 4.76484 13.7555 4.2593 13.687C4.15045 13.6643 4.10963 13.7233 4.15045 13.8276C4.81719 15.6419 6.26408 16.1952 7.32543 16.5037C7.47057 16.5263 7.61571 16.5263 7.779 16.5626C7.779 16.5626 7.779 16.5626 7.75178 16.5898C7.43882 17.1613 6.17336 17.5469 5.5928 17.7464C4.53311 18.1271 3.40329 18.2726 2.28175 18.1728C2.10485 18.1456 2.06403 18.1501 2.01868 18.1728C1.97332 18.1955 2.01868 18.2454 2.06857 18.2907C2.29535 18.4404 2.52214 18.5719 2.75799 18.6989C3.46014 19.0819 4.20245 19.3861 4.97141 19.6061C8.95374 20.7037 13.435 19.8964 16.424 16.9255C18.7735 14.5941 19.599 11.3783 19.599 8.158C19.599 8.03554 19.7487 7.96297 19.8349 7.89947C20.4293 7.43633 20.9533 6.88937 21.3906 6.27569C21.4663 6.18421 21.5052 6.06774 21.4995 5.94912C21.4995 5.88109 21.4995 5.89469 21.4133 5.93098Z"
        fill="white"
      />
    </svg>
  )
}
export function FacebookIconGreen(props: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_171_347)">
        <path
          d="M23.5 12.0694C23.5 5.71811 18.3513 0.569391 12 0.569391C5.64872 0.569391 0.5 5.71811 0.5 12.0694C0.5 17.8094 4.70538 22.567 10.2031 23.4297V15.3936H7.2832V12.0694H10.2031V9.5358C10.2031 6.65361 11.92 5.06158 14.5468 5.06158C15.805 5.06158 17.1211 5.28619 17.1211 5.28619V8.11627H15.671C14.2424 8.11627 13.7969 9.00273 13.7969 9.91218V12.0694H16.9863L16.4765 15.3936H13.7969V23.4297C19.2946 22.567 23.5 17.8094 23.5 12.0694Z"
          fill="#1f9043"
        />
      </g>
      <defs>
        <clipPath id="clip0_171_347">
          <rect width="24" height="24" fill="#1f9043" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function InstagramIconGreen(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function LinkedinIconGreen(props: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.44117 2C2.64548 2 2 2.62583 2 3.39684V20.1036C2 20.8747 2.64556 21.5 3.44117 21.5H20.0588C20.8548 21.5 21.5 20.8746 21.5 20.1034V3.39684C21.5 2.62583 20.8548 2 20.0588 2H3.44117ZM7.9257 9.54002V18.319H5.00771V9.54002H7.9257ZM8.11804 6.82502C8.11804 7.66748 7.48467 8.34161 6.46732 8.34161L6.4482 8.34153C5.46886 8.34153 4.83572 7.66741 4.83572 6.82495C4.83572 5.96337 5.48798 5.30806 6.48667 5.30806C7.48467 5.30806 8.099 5.96337 8.11804 6.82502ZM12.4586 18.319H9.54085C9.54085 18.319 9.57909 10.3639 9.54101 9.54032H12.4588V10.7829C12.8467 10.1849 13.5409 9.3342 15.0887 9.3342C17.0084 9.3342 18.4478 10.589 18.4478 13.2854V18.319H15.5301V13.623C15.5301 12.4427 15.1076 11.6377 14.052 11.6377C13.2457 11.6377 12.7656 12.1806 12.5547 12.705C12.4777 12.8922 12.4586 13.1549 12.4586 13.4169V18.319Z"
        fill="#1f9043"
      />
    </svg>
  )
}

export function TwitterIconGreen(props: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4133 5.93098C20.7825 6.20244 20.1194 6.39148 19.4402 6.4934C19.7577 6.43898 20.2249 5.86748 20.4109 5.63616C20.6934 5.28723 20.9087 4.88891 21.0459 4.46142C21.0459 4.42967 21.0776 4.38431 21.0459 4.36163C21.0299 4.3529 21.0119 4.34832 20.9937 4.34832C20.9755 4.34832 20.9576 4.3529 20.9416 4.36163C20.2041 4.76096 19.4193 5.06574 18.6057 5.26877C18.5773 5.27743 18.5471 5.27821 18.5184 5.27102C18.4896 5.26383 18.4633 5.24894 18.4424 5.22795C18.3791 5.15253 18.3109 5.08132 18.2383 5.01477C17.9064 4.71743 17.5299 4.47407 17.1225 4.2936C16.5726 4.06798 15.9786 3.97027 15.3853 4.00785C14.8097 4.0442 14.2478 4.19859 13.7344 4.46142C13.2288 4.73851 12.7845 5.11495 12.4281 5.56812C12.0532 6.03455 11.7825 6.57585 11.6343 7.15561C11.5121 7.70709 11.4983 8.27706 11.5935 8.83382C11.5935 8.92907 11.5935 8.94268 11.5119 8.92907C8.27792 8.45282 5.62455 7.30529 3.45649 4.84241C3.36124 4.73356 3.31135 4.73356 3.23424 4.84241C2.29082 6.27569 2.74892 8.54354 3.9282 9.66385C4.08695 9.81353 4.25023 9.95867 4.42259 10.0947C3.8819 10.0564 3.35441 9.90983 2.87138 9.66385C2.78067 9.60489 2.73078 9.63664 2.72624 9.74549C2.71338 9.89641 2.71338 10.0481 2.72624 10.1991C2.82088 10.9223 3.10591 11.6075 3.55219 12.1844C3.99847 12.7614 4.58998 13.2095 5.26623 13.4829C5.43108 13.5535 5.60286 13.6067 5.77876 13.6416C5.27821 13.7402 4.76484 13.7555 4.2593 13.687C4.15045 13.6643 4.10963 13.7233 4.15045 13.8276C4.81719 15.6419 6.26408 16.1952 7.32543 16.5037C7.47057 16.5263 7.61571 16.5263 7.779 16.5626C7.779 16.5626 7.779 16.5626 7.75178 16.5898C7.43882 17.1613 6.17336 17.5469 5.5928 17.7464C4.53311 18.1271 3.40329 18.2726 2.28175 18.1728C2.10485 18.1456 2.06403 18.1501 2.01868 18.1728C1.97332 18.1955 2.01868 18.2454 2.06857 18.2907C2.29535 18.4404 2.52214 18.5719 2.75799 18.6989C3.46014 19.0819 4.20245 19.3861 4.97141 19.6061C8.95374 20.7037 13.435 19.8964 16.424 16.9255C18.7735 14.5941 19.599 11.3783 19.599 8.158C19.599 8.03554 19.7487 7.96297 19.8349 7.89947C20.4293 7.43633 20.9533 6.88937 21.3906 6.27569C21.4663 6.18421 21.5052 6.06774 21.4995 5.94912C21.4995 5.88109 21.4995 5.89469 21.4133 5.93098Z"
        fill="#1f9043"
      />
    </svg>
  )
}

export function CalendarIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

export function ChevronDownIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function DogIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>
  )
}

export function RulerIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  )
}

export function SmileIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}
