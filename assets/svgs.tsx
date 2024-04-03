export const DashboardIcon = ({ className, size }: { className?: string; size?: string; }) => (
    <svg  width={size || '20'} height={size || '20'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path fillRule="evenodd" clipRule="evenodd" d="M4.4801 1.6H4.4001C4.0337 1.6 3.7185 1.6 3.4401 1.6656C3.00912 1.76858 2.61506 1.98887 2.30159 2.30206C1.98812 2.61525 1.76747 3.00911 1.6641 3.44C1.6001 3.7184 1.6001 4.032 1.6001 4.4V8.4C1.6001 8.7664 1.6001 9.0816 1.6657 9.36C1.76868 9.79098 1.98897 10.185 2.30216 10.4985C2.61535 10.812 3.00921 11.0326 3.4401 11.136C3.7185 11.2 4.0321 11.2 4.4001 11.2H8.4001C8.7665 11.2 9.0817 11.2 9.3601 11.1344C9.79108 11.0314 10.1851 10.8111 10.4986 10.4979C10.8121 10.1847 11.0327 9.79089 11.1361 9.36C11.2001 9.0816 11.2001 8.768 11.2001 8.4V4.4C11.2001 4.0336 11.2001 3.7184 11.1345 3.44C11.0315 3.00902 10.8112 2.61496 10.498 2.30149C10.1848 1.98802 9.79099 1.76737 9.3601 1.664C9.0817 1.6 8.7681 1.6 8.4001 1.6H4.4801ZM3.8129 3.2224C3.8817 3.2064 3.9889 3.2 4.4801 3.2H8.3201C8.8129 3.2 8.9185 3.2048 8.9873 3.2224C9.13103 3.25677 9.26242 3.33028 9.36692 3.43478C9.47142 3.53927 9.54493 3.67067 9.5793 3.8144C9.5953 3.8816 9.6001 3.9872 9.6001 4.48V8.32C9.6001 8.8128 9.5953 8.9184 9.5777 8.9872C9.54333 9.13093 9.46982 9.26232 9.36532 9.36682C9.26082 9.47132 9.12943 9.54483 8.9857 9.5792C8.9201 9.5936 8.8145 9.6 8.3201 9.6H4.4801C3.9873 9.6 3.8817 9.5952 3.8129 9.5776C3.66917 9.54323 3.53777 9.46972 3.43327 9.36522C3.32878 9.26073 3.25527 9.12933 3.2209 8.9856C3.2065 8.92 3.2001 8.8144 3.2001 8.32V4.48C3.2001 3.9872 3.2049 3.8816 3.2225 3.8128C3.25687 3.66907 3.33038 3.53767 3.43487 3.43318C3.53937 3.32868 3.67077 3.25517 3.8145 3.2208L3.8129 3.2224ZM15.6801 1.6H15.6001C15.2337 1.6 14.9185 1.6 14.6401 1.6656C14.2091 1.76858 13.8151 1.98887 13.5016 2.30206C13.1881 2.61525 12.9675 3.00911 12.8641 3.44C12.8001 3.7184 12.8001 4.032 12.8001 4.4V8.4C12.8001 8.7664 12.8001 9.0816 12.8657 9.36C12.9687 9.79098 13.189 10.185 13.5022 10.4985C13.8154 10.812 14.2092 11.0326 14.6401 11.136C14.9185 11.2 15.2321 11.2 15.6001 11.2H19.6001C19.9665 11.2 20.2817 11.2 20.5601 11.1344C20.9911 11.0314 21.3851 10.8111 21.6986 10.4979C22.0121 10.1847 22.2327 9.79089 22.3361 9.36C22.4001 9.0816 22.4001 8.768 22.4001 8.4V4.4C22.4001 4.0336 22.4001 3.7184 22.3345 3.44C22.2315 3.00902 22.0112 2.61496 21.698 2.30149C21.3848 1.98802 20.991 1.76737 20.5601 1.664C20.2817 1.6 19.9681 1.6 19.6001 1.6H15.6801ZM15.0129 3.2224C15.0817 3.2064 15.1889 3.2 15.6801 3.2H19.5201C20.0129 3.2 20.1185 3.2048 20.1873 3.2224C20.331 3.25677 20.4624 3.33028 20.5669 3.43478C20.6714 3.53927 20.7449 3.67067 20.7793 3.8144C20.7953 3.8816 20.8001 3.9872 20.8001 4.48V8.32C20.8001 8.8128 20.7937 8.9184 20.7777 8.9872C20.7433 9.13093 20.6698 9.26232 20.5653 9.36682C20.4608 9.47132 20.3294 9.54483 20.1857 9.5792C20.1185 9.5952 20.0129 9.6 19.5201 9.6H15.6801C15.1873 9.6 15.0817 9.5952 15.0129 9.5776C14.8692 9.54323 14.7378 9.46972 14.6333 9.36522C14.5288 9.26073 14.4553 9.12933 14.4209 8.9856C14.4065 8.92 14.4001 8.8144 14.4001 8.32V4.48C14.4001 3.9872 14.4049 3.8816 14.4225 3.8128C14.4569 3.66907 14.5304 3.53767 14.6349 3.43318C14.7394 3.32868 14.8708 3.25517 15.0145 3.2208L15.0129 3.2224ZM4.4001 12.8H8.4001C8.7665 12.8 9.0817 12.8 9.3601 12.8656C9.79108 12.9686 10.1851 13.1889 10.4986 13.5021C10.8121 13.8153 11.0327 14.2091 11.1361 14.64C11.2001 14.9184 11.2001 15.232 11.2001 15.6V19.6C11.2001 19.9664 11.2001 20.2816 11.1345 20.56C11.0315 20.991 10.8112 21.385 10.498 21.6985C10.1848 22.012 9.79099 22.2326 9.3601 22.336C9.0817 22.4 8.7681 22.4 8.4001 22.4H4.4001C4.0337 22.4 3.7185 22.4 3.4401 22.3344C3.00912 22.2314 2.61506 22.0111 2.30159 21.6979C1.98812 21.3847 1.76747 20.9909 1.6641 20.56C1.6001 20.2816 1.6001 19.968 1.6001 19.6V15.6C1.6001 15.2336 1.6001 14.9184 1.6657 14.64C1.76868 14.209 1.98897 13.815 2.30216 13.5015C2.61535 13.188 3.00921 12.9674 3.4401 12.864C3.7185 12.8 4.0321 12.8 4.4001 12.8ZM4.4801 14.4C3.9873 14.4 3.8817 14.4048 3.8129 14.4224C3.66917 14.4568 3.53777 14.5303 3.43327 14.6348C3.32878 14.7393 3.25527 14.8707 3.2209 15.0144C3.2065 15.08 3.2001 15.1856 3.2001 15.68V19.52C3.2001 20.0128 3.2049 20.1184 3.2225 20.1872C3.25687 20.3309 3.33038 20.4623 3.43487 20.5668C3.53937 20.6713 3.67077 20.7448 3.8145 20.7792C3.8817 20.7952 3.9873 20.8 4.4801 20.8H8.3201C8.8129 20.8 8.9185 20.7936 8.9873 20.7776C9.13103 20.7432 9.26242 20.6697 9.36692 20.5652C9.47142 20.4607 9.54493 20.3293 9.5793 20.1856C9.5953 20.1184 9.6001 20.0128 9.6001 19.52V15.68C9.6001 15.1872 9.5953 15.0816 9.5777 15.0128C9.54333 14.8691 9.46982 14.7377 9.36532 14.6332C9.26082 14.5287 9.12943 14.4552 8.9857 14.4208C8.9201 14.4064 8.8145 14.4 8.3201 14.4H4.4801ZM15.6801 12.8H15.6001C15.2337 12.8 14.9185 12.8 14.6401 12.8656C14.2091 12.9686 13.8151 13.1889 13.5016 13.5021C13.1881 13.8153 12.9675 14.2091 12.8641 14.64C12.8001 14.9184 12.8001 15.232 12.8001 15.6V19.6C12.8001 19.9664 12.8001 20.2816 12.8657 20.56C12.9687 20.991 13.189 21.385 13.5022 21.6985C13.8154 22.012 14.2092 22.2326 14.6401 22.336C14.9185 22.4016 15.2337 22.4016 15.6001 22.4016H19.6001C19.9665 22.4016 20.2817 22.4016 20.5601 22.336C20.9908 22.2328 21.3845 22.0123 21.6977 21.6992C22.0108 21.386 22.2313 20.9923 22.3345 20.5616C22.4001 20.2832 22.4001 19.968 22.4001 19.6016V15.6C22.4001 15.2336 22.4001 14.9184 22.3345 14.64C22.2315 14.209 22.0112 13.815 21.698 13.5015C21.3848 13.188 20.991 12.9674 20.5601 12.864C20.2817 12.8 19.9681 12.8 19.6001 12.8H15.6801ZM15.0129 14.4224C15.0817 14.4064 15.1889 14.4 15.6801 14.4H19.5201C20.0129 14.4 20.1185 14.4048 20.1873 14.4224C20.331 14.4568 20.4624 14.5303 20.5669 14.6348C20.6714 14.7393 20.7449 14.8707 20.7793 15.0144C20.7953 15.0816 20.8001 15.1872 20.8001 15.68V19.52C20.8001 20.0128 20.7937 20.1184 20.7777 20.1872C20.7433 20.3309 20.6698 20.4623 20.5653 20.5668C20.4608 20.6713 20.3294 20.7448 20.1857 20.7792C20.1185 20.7952 20.0129 20.8 19.5201 20.8H15.6801C15.1873 20.8 15.0817 20.7936 15.0129 20.7776C14.8692 20.7432 14.7378 20.6697 14.6333 20.5652C14.5288 20.4607 14.4553 20.3293 14.4209 20.1856C14.4065 20.12 14.4001 20.0144 14.4001 19.52V15.68C14.4001 15.1872 14.4049 15.0816 14.4225 15.0128C14.4569 14.8691 14.5304 14.7377 14.6349 14.6332C14.7394 14.5287 14.8708 14.4552 15.0145 14.4208L15.0129 14.4224Z" fill="currentColor"/>
</svg>
)

export const DaoIcon = ({ className, size }: { className?: string; size?: string; }) => (
    <svg width={size || '20'} height={size || '20'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M19.3762 6.15281C17.4591 5.19469 14.9062 4.6875 12 4.6875C9.09375 4.6875 6.54094 5.19469 4.62375 6.15281C2.75719 7.08562 1.6875 8.39719 1.6875 9.75V14.25C1.6875 15.6028 2.75719 16.9144 4.62375 17.8472C6.54094 18.8053 9.09375 19.3125 12 19.3125C14.9062 19.3125 17.4591 18.8053 19.3762 17.8472C21.2428 16.9144 22.3125 15.6028 22.3125 14.25V9.75C22.3125 8.39719 21.2428 7.08562 19.3762 6.15281ZM5.12625 7.15969C6.86344 6.29063 9.30469 5.8125 12 5.8125C14.6953 5.8125 17.1366 6.29063 18.8738 7.15969C20.3438 7.89469 21.1875 8.83875 21.1875 9.75C21.1875 10.6613 20.3438 11.6053 18.8738 12.3403C17.1366 13.2094 14.6953 13.6875 12 13.6875C9.30469 13.6875 6.86344 13.2094 5.12625 12.3403C3.65625 11.6053 2.8125 10.6613 2.8125 9.75C2.8125 8.83875 3.65625 7.89469 5.12625 7.15969ZM11.4375 14.8059V18.1809C9.63375 18.1359 7.96219 17.8734 6.5625 17.4206V14.1019C7.99406 14.5247 9.64219 14.7647 11.4375 14.8059ZM12.5625 14.8059C14.3578 14.7647 16.0059 14.5247 17.4375 14.1009V17.4197C16.0378 17.8725 14.3663 18.135 12.5625 18.18V14.8059ZM2.8125 14.25V12.0938C3.34769 12.6026 3.95874 13.0251 4.62375 13.3463C4.88375 13.4756 5.155 13.5969 5.4375 13.71V16.9913C5.33156 16.9425 5.2275 16.8975 5.12625 16.8431C3.65625 16.1053 2.8125 15.1613 2.8125 14.25ZM18.8738 16.8403C18.7725 16.8909 18.6684 16.9397 18.5625 16.9884V13.7072C18.8444 13.5941 19.1156 13.4728 19.3762 13.3434C20.0411 13.0232 20.6521 12.6016 21.1875 12.0938V14.25C21.1875 15.1613 20.3438 16.1053 18.8738 16.8403Z" fill="currentColor"/>
</svg>
)

export const ProposalIcon = ({ className, size }: { className?: string; size?: string; }) => (
    <svg width={size || '20'} height={size || '20'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M3.1001 9.8V6.4L12.0001 2L20.9001 6.4V9.8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.1001 14.2V17.6L12.0001 22L20.9001 17.6V14.2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V16.4" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0001 16.4C14.4302 16.4 16.4001 14.4301 16.4001 12C16.4001 9.56995 14.4302 7.60001 12.0001 7.60001C9.57004 7.60001 7.6001 9.56995 7.6001 12C7.6001 14.4301 9.57004 16.4 12.0001 16.4Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
</svg>

)

export const Bell2 = ({ className, width, height }: { className?: string; width?: string; height?: string }) => (
    <svg width={width || "28"} height={height || "31"} viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
  <path d="M8.02992 21.144C7.81727 22.4971 8.768 23.4362 9.93205 23.9042C14.3948 25.6986 20.6052 25.6986 25.0679 23.9042C26.232 23.4362 27.1827 22.4971 26.9701 21.144C26.8394 20.3125 26.1932 19.6201 25.7144 18.944C25.0873 18.0475 25.025 17.0697 25.0249 16.0294C25.0249 12.0091 21.6559 8.75 17.5 8.75C13.3441 8.75 9.97513 12.0091 9.97513 16.0294C9.97503 17.0697 9.91272 18.0475 9.28561 18.944C8.80684 19.6201 8.16061 20.3125 8.02992 21.144Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.5 28.25C15.2961 28.8719 16.3475 29.25 17.5 29.25C18.6525 29.25 19.7039 28.8719 20.5 28.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  
  )

  export const LinkIcon = ({ className }: { className?: string; }) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path opacity="0.4" d="M15.9925 5.85613V5.8575V12.1425C15.9925 13.4081 15.6172 14.3582 14.9839 14.9914C14.3507 15.6247 13.4006 16 12.135 16H5.8575C4.59195 16 3.64196 15.6247 3.00877 14.9907C2.37552 14.3567 2 13.4047 2 12.135V5.8575C2 4.59194 2.3753 3.6418 3.00855 3.00855C3.6418 2.3753 4.59194 2 5.8575 2H12.1425C13.4082 2 14.3581 2.37535 14.9903 3.00833C15.6224 3.64121 15.996 4.59088 15.9925 5.85613Z" fill="currentColor" stroke="#9050E9"/>
<path d="M11.557 6.72855L12.4106 5.875H11.2035H8.93849C8.92543 5.875 8.90977 5.8698 8.89548 5.85551C8.88119 5.84122 8.87599 5.82556 8.87599 5.8125C8.87599 5.79944 8.88119 5.78378 8.89548 5.76949C8.90977 5.7552 8.92543 5.75 8.93849 5.75H12.561C12.5741 5.75 12.5897 5.7552 12.604 5.76949C12.6183 5.78378 12.6235 5.79944 12.6235 5.8125V9.435C12.6235 9.44806 12.6183 9.46372 12.604 9.47801C12.5897 9.4923 12.5741 9.4975 12.561 9.4975C12.5479 9.4975 12.5323 9.4923 12.518 9.47801C12.5037 9.46372 12.4985 9.44806 12.4985 9.435V7.17V5.96289L11.6449 6.81645L5.85494 12.6064C5.84651 12.6149 5.83954 12.6187 5.83419 12.6209C5.82836 12.6232 5.82076 12.625 5.81099 12.625C5.80122 12.625 5.79362 12.6232 5.7878 12.6209C5.78244 12.6187 5.77548 12.6149 5.76704 12.6064C5.7576 12.597 5.75037 12.5823 5.75037 12.5625C5.75037 12.5427 5.7576 12.528 5.76704 12.5186L11.557 6.72855Z" fill="#292D32" stroke="#9050E9"/>
</svg>

  )

  export const PeopleIcon = ({ className, size }: { className?: string; size?: string; }) => (
    <svg width={size || "22"} height={size || "22"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )

  export const ProposalIcon2 = ({ className }: { className?: string; }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M3.09998 9.8V6.4L12 2L20.9 6.4V9.8" stroke="#444444" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.09998 14.2V17.6L12 22L20.9 17.6V14.2" stroke="#444444" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V16.4" stroke="#444444" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16.4C14.43 16.4 16.4 14.43 16.4 12C16.4 9.56992 14.43 7.59998 12 7.59998C9.56992 7.59998 7.59998 9.56992 7.59998 12C7.59998 14.43 9.56992 16.4 12 16.4Z" stroke="#444444" strokeWidth="1.5" strokeMiterlimit="10"/>
</svg>

  )

  export const OpenDaoIcon = ({ className, size }: { className?: string; size?: string }) => (
<svg width={size || '41'} height={size || '41'} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M8.73333 6H19.1167C20.696 6 21.787 6.40019 22.4876 7.11131C23.1894 7.82381 23.5833 8.93353 23.5833 10.5333V36.6667H15.75V30.9167C15.75 29.9362 14.9551 29.1667 14 29.1667C13.0405 29.1667 12.25 29.9572 12.25 30.9167V36.6667H4.25V10.5333C4.25 8.93478 4.64741 7.82509 5.35323 7.1122C6.05814 6.40022 7.15398 6 8.73333 6ZM9.91667 22.25H18.1667C19.1261 22.25 19.9167 21.4595 19.9167 20.5C19.9167 19.5405 19.1261 18.75 18.1667 18.75H9.91667C8.95719 18.75 8.16667 19.5405 8.16667 20.5C8.16667 21.4595 8.95719 22.25 9.91667 22.25ZM9.91667 16H18.1667C19.1261 16 19.9167 15.2095 19.9167 14.25C19.9167 13.2905 19.1261 12.5 18.1667 12.5H9.91667C8.95719 12.5 8.16667 13.2905 8.16667 14.25C8.16667 15.2095 8.95719 16 9.91667 16Z" fill="white" stroke="white"/>
<path d="M34.2998 35.9167V36.4167H34.7998H38.5832C38.9904 36.4167 39.3332 36.7595 39.3332 37.1667C39.3332 37.5739 38.9904 37.9167 38.5832 37.9167H33.6332C33.6031 37.9167 33.5753 37.9189 33.5499 37.9225C33.5244 37.9189 33.4966 37.9167 33.4665 37.9167H1.9165C1.50931 37.9167 1.1665 37.5739 1.1665 37.1667C1.1665 36.7595 1.50931 36.4167 1.9165 36.4167H32.2832H32.7832V35.9167V30.9V30.5433L32.4458 30.4272C31.0872 29.9597 30.0998 28.6756 30.0998 27.1667V23.8333C30.0998 21.9261 31.6593 20.3667 33.5665 20.3667C35.4737 20.3667 37.0332 21.9261 37.0332 23.8333V27.1667C37.0332 28.6915 36.0308 29.989 34.6447 30.4413L34.2998 30.5539V30.9167V35.9167Z" fill="white" stroke="white"/>
</svg>

  )

  export const CopyIcon = ({ className, size }: { className?: string; size?: string }) => (
    <svg width={size || "20"} height={size || "21"} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M16 13.0057V17.2057C16 20.7057 14.6 22.1057 11.1 22.1057H6.9C3.4 22.1057 2 20.7057 2 17.2057V13.0057C2 9.50571 3.4 8.10571 6.9 8.10571H11.1C14.6 8.10571 16 9.50571 16 13.0057Z" fill="#444444"/>
<path d="M17.0998 2.10571H12.8998C9.81668 2.10571 8.37074 3.1998 8.06951 5.84473C8.00649 6.39806 8.46476 6.85571 9.02167 6.85571H11.0998C15.2998 6.85571 17.2498 8.80571 17.2498 13.0057V15.0838C17.2498 15.6407 17.7074 16.099 18.2608 16.036C20.9057 15.7347 21.9998 14.2888 21.9998 11.2057V7.00571C21.9998 3.50571 20.5998 2.10571 17.0998 2.10571Z" fill="#444444"/>
</svg>

  )

  export const CoinIcon = ({ className, size }: { className?: string; size?: string; }) => (
    <svg width={size || "20"} height={size || "20"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M18.5 12.65V16.35C18.5 19.47 15.59 22 12 22C8.41 22 5.5 19.47 5.5 16.35V12.65C5.5 15.77 8.41 18 12 18C15.59 18 18.5 15.77 18.5 12.65Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 6.09 6.22999 4.68 7.39999 3.66C8.57999 2.63 10.2 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 7.65V12.65C18.5 15.77 15.59 18 12 18C8.41 18 5.5 15.77 5.5 12.65V7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )

  export const MemebersIcon = ({ className, size }: { className?: string; size?: string }) => (
    <svg width={size || "20"} height={size || "20"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.9695 14.44C18.3395 14.67 19.8495 14.43 20.9095 13.72C22.3195 12.78 22.3195 11.24 20.9095 10.3C19.8395 9.59004 18.3095 9.35003 16.9395 9.59003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.96852 7.16C6.02852 7.15 6.09852 7.15 6.15852 7.16C7.53852 7.11 8.63852 5.98 8.63852 4.58C8.63852 3.15 7.48852 2 6.05852 2C4.62852 2 3.47852 3.16 3.47852 4.58C3.48852 5.98 4.58852 7.11 5.96852 7.16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.99945 14.44C5.62945 14.67 4.11945 14.43 3.05945 13.72C1.64945 12.78 1.64945 11.24 3.05945 10.3C4.12945 9.59004 5.65945 9.35003 7.02945 9.59003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.46997 11.9101 9.46997C13.3401 9.46997 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.0907 17.78C7.6807 18.72 7.6807 20.26 9.0907 21.2C10.6907 22.27 13.3107 22.27 14.9107 21.2C16.3207 20.26 16.3207 18.72 14.9107 17.78C13.3207 16.72 10.6907 16.72 9.0907 17.78Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )

export const VoteIcon = ({ className }: { className?: string; }) => (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M15 11.0001L18 14.0001V18.0001C18 18.5306 17.7893 19.0393 17.4142 19.4143C17.0391 19.7894 16.5304 20.0001 16 20.0001H2C1.46957 20.0001 0.960859 19.7894 0.585786 19.4143C0.210714 19.0393 0 18.5306 0 18.0001V14.0001L3 11.0001H3.83L5.83 13.0001H3.78L2 15.0001H16L14.23 13.0001H12.32L14.32 11.0001H15ZM16 18.0001V17.0001H2V18.0001H16ZM8.34 13.0001L3.39 8.07012C3.2973 7.97761 3.22375 7.86772 3.17357 7.74675C3.12339 7.62577 3.09756 7.49609 3.09756 7.36512C3.09756 7.23415 3.12339 7.10447 3.17357 6.9835C3.22375 6.86252 3.2973 6.75264 3.39 6.66012L9.76 0.290121C9.85156 0.197022 9.96089 0.123262 10.0815 0.0732196C10.2021 0.0231772 10.3315 -0.00212851 10.4621 -0.00119583C10.5927 -0.000263146 10.7218 0.0268889 10.8416 0.0786491C10.9615 0.130409 11.0698 0.205723 11.16 0.300121L16.11 5.25012C16.5 5.64012 16.5 6.27012 16.11 6.66012L9.75 13.0001C9.65996 13.0971 9.55087 13.1745 9.42956 13.2274C9.30826 13.2803 9.17734 13.3076 9.045 13.3076C8.91266 13.3076 8.78174 13.2803 8.66044 13.2274C8.53913 13.1745 8.43004 13.0971 8.34 13.0001ZM10.46 2.41012L5.5 7.36012L9.05 10.9001L14 5.95012L10.46 2.41012Z" fill="#444444"/>
</svg>

)

export const ImportIcon = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4996 1.5L10.3496 7.65" stroke="#1CA013" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.75 4.62744V8.24994H13.3725" stroke="#1CA013" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75" stroke="#1CA013" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)

export const EditIcon = ({ className }: { className?: string; }) => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M21 21.7114H3C2.86614 21.7114 2.75 21.5953 2.75 21.4614C2.75 21.3276 2.86614 21.2114 3 21.2114H21C21.1339 21.2114 21.25 21.3276 21.25 21.4614C21.25 21.5953 21.1339 21.7114 21 21.7114Z" fill="#F9F5FF" stroke="#888888"/>
<path d="M18.667 4.04514L18.667 4.04514L18.6688 4.04691C19.6137 4.98241 19.9987 5.82028 19.9906 6.62653L19.9906 6.62653V6.63158C19.9906 7.40905 19.6056 8.23886 18.6688 9.16624L18.6688 9.16622L18.6655 9.1695L17.506 10.3387C15.0581 9.62068 13.0962 7.66053 12.3757 5.21358L13.5441 4.04514C14.4865 3.10278 15.338 2.71276 16.1211 2.71782C16.9058 2.7229 17.7473 3.12546 18.667 4.04514Z" fill="#F9F5FF" stroke="#888888"/>
<path d="M14.5156 11.7315C14.8047 11.9028 15.1004 12.0503 15.3929 12.1915L15.4021 12.1959L15.4115 12.2C15.4512 12.2172 15.4905 12.2341 15.5294 12.2507L15.7257 11.7908L15.5294 12.2507C15.5351 12.2531 15.5383 12.2559 15.5409 12.2592C15.5441 12.2633 15.547 12.2691 15.5484 12.2756C15.5495 12.2808 15.5492 12.2841 15.549 12.2854C15.5488 12.2857 15.5485 12.286 15.5481 12.2864L9.82677 18.0077L9.8197 18.0147L9.81292 18.0221C9.81381 18.0211 9.80556 18.0298 9.78354 18.0452C9.76257 18.0597 9.73554 18.0759 9.70421 18.0915C9.64011 18.1236 9.58298 18.1414 9.55238 18.1473L5.72069 18.6861L5.72067 18.6859L5.70812 18.688C5.61491 18.7036 5.5224 18.7112 5.43032 18.7112C5.00917 18.7112 4.6405 18.5645 4.38352 18.3172C4.09003 18.0136 3.93489 17.5387 4.01501 16.994L4.01542 16.991L4.55379 13.1726C4.55951 13.1457 4.5771 13.0907 4.61003 13.0248C4.64591 12.9531 4.67989 12.9088 4.69387 12.8948L10.4223 7.16631C10.4224 7.16627 10.4224 7.16623 10.4225 7.1662C10.4234 7.16624 10.4247 7.16637 10.4263 7.16672C10.4312 7.16776 10.4364 7.17013 10.4408 7.17359C10.4444 7.17651 10.4482 7.1807 10.4516 7.18818C10.4727 7.23593 10.4946 7.28411 10.5172 7.33267L10.5171 7.33275L10.5231 7.34484C10.6649 7.62835 10.811 7.91067 10.98 8.19586M14.5156 11.7315C14.2836 11.5944 14.0642 11.4482 13.8487 11.2945C13.6611 11.172 13.4546 11.0068 13.2714 10.8531C13.2564 10.8426 13.2455 10.8342 13.2404 10.8301L13.2392 10.8292C13.2188 10.8133 13.198 10.7958 13.1786 10.7788C13.1434 10.748 13.1032 10.7106 13.0617 10.6696C12.7256 10.3831 12.3512 10.019 12.0117 9.61206C11.9966 9.59775 11.985 9.58549 11.9775 9.57734C11.9553 9.55343 11.9353 9.52908 11.9199 9.50983C11.9026 9.48825 11.8792 9.45777 11.8578 9.42985C11.8481 9.41726 11.8388 9.40519 11.8307 9.3947C11.8255 9.38854 11.8202 9.3821 11.8146 9.37538C11.7162 9.2577 11.548 9.05647 11.3945 8.82418C11.2557 8.64714 11.1073 8.41128 10.98 8.19586M14.5156 11.7315C14.5157 11.7316 14.5159 11.7316 14.516 11.7317L14.7703 11.3012L14.5154 11.7314C14.5155 11.7314 14.5156 11.7315 14.5156 11.7315ZM10.98 8.19586C10.9801 8.19595 10.9801 8.19604 10.9802 8.19613L11.4103 7.94123L10.9799 8.1956C10.9799 8.19568 10.98 8.19577 10.98 8.19586Z" fill="#F9F5FF" stroke="#888888"/>
</svg>

)

export const OnePersonicon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1586 11.62C12.1286 11.62 12.1086 11.62 12.0786 11.62C12.0286 11.61 11.9586 11.61 11.8986 11.62C8.99859 11.53 6.80859 9.25 6.80859 6.44C6.80859 3.58 9.13859 1.25 11.9986 1.25C14.8586 1.25 17.1886 3.58 17.1886 6.44C17.1786 9.25 14.9786 11.53 12.1886 11.62C12.1786 11.62 12.1686 11.62 12.1586 11.62ZM11.9986 2.75C9.96859 2.75 8.30859 4.41 8.30859 6.44C8.30859 8.44 9.86859 10.05 11.8586 10.12C11.9086 10.11 12.0486 10.11 12.1786 10.12C14.1386 10.03 15.6786 8.42 15.6886 6.44C15.6886 4.41 14.0286 2.75 11.9986 2.75Z" fill="currentColor"/>
<path d="M12.1716 22.55C10.2116 22.55 8.24156 22.05 6.75156 21.05C5.36156 20.13 4.60156 18.87 4.60156 17.5C4.60156 16.13 5.36156 14.86 6.75156 13.93C9.75156 11.94 14.6116 11.94 17.5916 13.93C18.9716 14.85 19.7416 16.11 19.7416 17.48C19.7416 18.85 18.9816 20.12 17.5916 21.05C16.0916 22.05 14.1316 22.55 12.1716 22.55ZM7.58156 15.19C6.62156 15.83 6.10156 16.65 6.10156 17.51C6.10156 18.36 6.63156 19.18 7.58156 19.81C10.0716 21.48 14.2716 21.48 16.7616 19.81C17.7216 19.17 18.2416 18.35 18.2416 17.49C18.2416 16.64 17.7116 15.82 16.7616 15.19C14.2716 13.53 10.0716 13.53 7.58156 15.19Z" fill="currentColor"/>
</svg>

)

export const DisplayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12Z" fill="currentColor"/>
</svg>

)

export const IdeaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.08938 14.999C5.71097 14.1484 5.5 13.2021 5.5 12.2049C5.5 8.50135 8.41015 5.49902 12 5.49902C15.5899 5.49902 18.5 8.50135 18.5 12.2049C18.5 13.2021 18.289 14.1484 17.9106 14.999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M12 1.99902V2.99902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 11.999H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 11.999H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0704 4.92773L18.3633 5.63484" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.6368 5.63582L4.92969 4.92871" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5155 19.3055C15.5259 18.9786 15.9311 18.0538 16.0451 17.1236C16.0791 16.8458 15.8505 16.6152 15.5705 16.6152L8.47539 16.6154C8.18579 16.6155 7.95321 16.8612 7.98779 17.1488C8.09944 18.0771 8.38124 18.7553 9.45199 19.3055M14.5155 19.3055C14.5155 19.3055 9.62825 19.3055 9.45199 19.3055M14.5155 19.3055C14.394 21.2505 13.8323 22.0207 12.0053 21.9991C10.0511 22.0352 9.60157 21.0831 9.45199 19.3055" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
</svg>

)

export const ComplaintIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9961 9.01264H17.0042M17.0045 7.00903V4.50451M22 6.792C22 9.43833 19.7593 11.584 16.9961 11.584C16.6711 11.5844 16.3472 11.5543 16.028 11.4943C15.7983 11.4511 15.6835 11.4296 15.6033 11.4418C15.523 11.454 15.4094 11.5145 15.1822 11.6356C14.5393 11.9778 13.7896 12.0987 13.0686 11.9645C13.3426 11.627 13.5298 11.2222 13.6123 10.7882C13.6624 10.5228 13.5384 10.2649 13.3526 10.0762C12.5093 9.21878 11.9922 8.06347 11.9922 6.792C11.9922 4.14565 14.2328 2 16.9961 2C19.7593 2 22 4.14565 22 6.792Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.50189 22H4.71817C4.39488 22 4.07021 21.9545 3.77327 21.8269C2.80666 21.4116 2.31624 20.8633 2.08769 20.5202C1.95764 20.325 1.97617 20.0764 2.11726 19.889C3.23716 18.4015 5.8337 17.503 7.50189 17.5029M7.50665 22H10.2904C10.6137 22 10.9383 21.9545 11.2353 21.8269C12.2019 21.4116 12.6923 20.8633 12.9209 20.5202C13.0509 20.325 13.0324 20.0764 12.8913 19.889C11.7714 18.4015 9.17484 17.503 7.50665 17.5029M10.2854 12.2888C10.2854 13.8201 9.0413 15.0614 7.50665 15.0614C5.97199 15.0614 4.72791 13.8201 4.72791 12.2888C4.72791 10.7575 5.97199 9.51611 7.50665 9.51611C9.0413 9.51611 10.2854 10.7575 10.2854 12.2888Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)

export const QuestionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 7.28336C22 9.92493 19.7611 12.0667 17 12.0667C16.6753 12.0671 16.3516 12.0371 16.0327 11.9772C15.8031 11.9341 15.6883 11.9126 15.6082 11.9248C15.5281 11.937 15.4145 11.9974 15.1874 12.1182C14.545 12.4598 13.7959 12.5805 13.0755 12.4465C13.3493 12.1097 13.5363 11.7056 13.6188 11.2724C13.6688 11.0074 13.545 10.75 13.3594 10.5616C12.5166 9.70577 12 8.55254 12 7.28336C12 4.64178 14.2388 2.5 17 2.5C19.7611 2.5 22 4.64178 22 7.28336Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M15.4922 7.5H15.5003M18.4922 7.5H18.5003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M7.50189 21.5H4.71817C4.39488 21.5 4.07021 21.4545 3.77327 21.3269C2.80666 20.9116 2.31624 20.3632 2.08769 20.0202C1.95764 19.825 1.97617 19.5763 2.11726 19.3889C3.23716 17.9015 5.83846 17.003 7.50665 17.0029C9.17484 17.003 11.7714 17.9015 12.8913 19.3889C13.0324 19.5763 13.0509 19.825 12.9209 20.0202C12.6923 20.3632 12.2019 20.9116 11.2353 21.3269C10.9383 21.4545 10.6137 21.5 10.2904 21.5H7.50189Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.284 11.7888C10.284 13.3201 9.03995 14.5614 7.50529 14.5614C5.97064 14.5614 4.72656 13.3201 4.72656 11.7888C4.72656 10.2575 5.97064 9.01611 7.50529 9.01611C9.03995 9.01611 10.284 10.2575 10.284 11.7888Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)

export const BrandLogo = ({ className }: { className?: string; }) => (
<svg width="482" height="66" viewBox="0 0 482 66" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M0.497001 64V1.7H19.009L35.919 57.592H37.343V1.7H46.866V64H28.354L11.444 8.019H10.02V64H0.497001ZM74.2773 64.801C70.9546 64.801 67.988 64.0593 65.3773 62.576C62.7666 61.0927 60.7196 58.9863 59.2363 56.257C57.753 53.5277 57.0113 50.2643 57.0113 46.467V20.123H66.1783V45.844C66.1783 49.6413 67.1276 52.4597 69.0263 54.299C70.925 56.079 73.5653 56.969 76.9473 56.969C80.6853 56.969 83.6816 55.723 85.9363 53.231C88.2503 50.6797 89.4073 47.0307 89.4073 42.284V20.123H98.5743V64H89.5853V57.414H88.1613C87.3306 59.194 85.8473 60.885 83.7113 62.487C81.5753 64.0297 78.4306 64.801 74.2773 64.801ZM129.836 65.246C125.624 65.246 121.797 64.356 118.355 62.576C114.973 60.796 112.274 58.215 110.256 54.833C108.298 51.451 107.319 47.3867 107.319 42.64V41.483C107.319 36.7363 108.298 32.7017 110.256 29.379C112.274 25.997 114.973 23.416 118.355 21.636C121.797 19.7967 125.624 18.877 129.836 18.877C134.049 18.877 137.639 19.6483 140.605 21.191C143.572 22.7337 145.945 24.7807 147.725 27.332C149.565 29.8833 150.751 32.7017 151.285 35.787L142.385 37.656C142.089 35.698 141.466 33.918 140.516 32.316C139.567 30.714 138.232 29.4383 136.511 28.489C134.791 27.5397 132.625 27.065 130.014 27.065C127.463 27.065 125.149 27.6583 123.072 28.845C121.055 29.9723 119.453 31.6337 118.266 33.829C117.08 35.965 116.486 38.5757 116.486 41.661V42.462C116.486 45.5473 117.08 48.1877 118.266 50.383C119.453 52.5783 121.055 54.2397 123.072 55.367C125.149 56.4943 127.463 57.058 130.014 57.058C133.871 57.058 136.808 56.079 138.825 54.121C140.843 52.1037 142.118 49.5523 142.652 46.467L151.552 48.514C150.84 51.54 149.565 54.3287 147.725 56.88C145.945 59.4313 143.572 61.4783 140.605 63.021C137.639 64.5043 134.049 65.246 129.836 65.246ZM159.455 64V1.7H168.622V64H159.455ZM199.671 65.246C195.221 65.246 191.334 64.3263 188.012 62.487C184.689 60.5883 182.078 57.948 180.18 54.566C178.34 51.1247 177.421 47.1493 177.421 42.64V41.572C177.421 37.0033 178.34 33.028 180.18 29.646C182.019 26.2047 184.57 23.5643 187.834 21.725C191.156 19.8263 194.983 18.877 199.315 18.877C203.527 18.877 207.206 19.8263 210.351 21.725C213.555 23.5643 216.047 26.1453 217.827 29.468C219.607 32.7907 220.497 36.677 220.497 41.127V44.598H186.766C186.884 48.4547 188.16 51.54 190.593 53.854C193.085 56.1087 196.17 57.236 199.849 57.236C203.29 57.236 205.871 56.4647 207.592 54.922C209.372 53.3793 210.736 51.5993 211.686 49.582L219.251 53.498C218.42 55.1593 217.204 56.9097 215.602 58.749C214.059 60.5883 212.012 62.131 209.461 63.377C206.909 64.623 203.646 65.246 199.671 65.246ZM186.855 37.567H211.152C210.914 34.2443 209.728 31.6633 207.592 29.824C205.456 27.9253 202.667 26.976 199.226 26.976C195.784 26.976 192.966 27.9253 190.771 29.824C188.635 31.6633 187.329 34.2443 186.855 37.567ZM245.682 64.801C242.36 64.801 239.393 64.0593 236.782 62.576C234.172 61.0927 232.125 58.9863 230.641 56.257C229.158 53.5277 228.416 50.2643 228.416 46.467V20.123H237.583V45.844C237.583 49.6413 238.533 52.4597 240.431 54.299C242.33 56.079 244.97 56.969 248.352 56.969C252.09 56.969 255.087 55.723 257.341 53.231C259.655 50.6797 260.812 47.0307 260.812 42.284V20.123H269.979V64H260.99V57.414H259.566C258.736 59.194 257.252 60.885 255.116 62.487C252.98 64.0297 249.836 64.801 245.682 64.801ZM298.838 65.246C293.261 65.246 288.633 64 284.954 61.508C281.276 59.016 279.021 55.2483 278.19 50.205L286.734 48.158C287.209 50.5907 288.01 52.519 289.137 53.943C290.265 55.367 291.659 56.3757 293.32 56.969C295.041 57.5623 296.88 57.859 298.838 57.859C301.746 57.859 303.971 57.2953 305.513 56.168C307.115 55.0407 307.916 53.587 307.916 51.807C307.916 50.027 307.175 48.7217 305.691 47.891C304.208 47.0603 302.013 46.378 299.105 45.844L296.079 45.31C293.113 44.776 290.413 44.0047 287.98 42.996C285.548 41.9873 283.619 40.593 282.195 38.813C280.771 37.033 280.059 34.7487 280.059 31.96C280.059 27.8067 281.602 24.6027 284.687 22.348C287.773 20.034 291.867 18.877 296.969 18.877C301.894 18.877 305.929 20.0043 309.073 22.259C312.277 24.4543 314.354 27.4507 315.303 31.248L306.759 33.651C306.225 30.981 305.098 29.112 303.377 28.044C301.657 26.9167 299.521 26.353 296.969 26.353C294.477 26.353 292.519 26.8277 291.095 27.777C289.671 28.667 288.959 29.9427 288.959 31.604C288.959 33.384 289.642 34.6893 291.006 35.52C292.43 36.3507 294.329 36.9737 296.702 37.389L299.817 37.923C302.962 38.457 305.84 39.1987 308.45 40.148C311.061 41.0973 313.108 42.462 314.591 44.242C316.134 46.022 316.905 48.3953 316.905 51.362C316.905 55.7527 315.274 59.1643 312.01 61.597C308.747 64.0297 304.356 65.246 298.838 65.246ZM322.369 64V55.456H330.735V10.244H322.369V1.7H347.289C355.596 1.7 361.944 3.80633 366.335 8.019C370.785 12.2317 373.01 18.5803 373.01 27.065V38.724C373.01 47.2087 370.785 53.5573 366.335 57.77C361.944 61.9233 355.596 64 347.289 64H322.369ZM340.436 55.278H347.378C352.777 55.278 356.782 53.9133 359.393 51.184C362.004 48.4547 363.309 44.3903 363.309 38.991V26.709C363.309 21.2503 362.004 17.186 359.393 14.516C356.782 11.846 352.777 10.511 347.378 10.511H340.436V55.278ZM375.878 64L393.678 1.7H410.588L428.299 64H418.42L414.326 49.315H389.94L385.846 64H375.878ZM392.343 40.415H411.923L402.845 7.663H401.421L392.343 40.415ZM456.781 65.246C449.127 65.246 443.046 63.11 438.536 58.838C434.027 54.5067 431.772 48.2767 431.772 40.148V25.552C431.772 17.4233 434.027 11.223 438.536 6.951C443.046 2.61966 449.127 0.453996 456.781 0.453996C464.435 0.453996 470.517 2.61966 475.026 6.951C479.595 11.223 481.879 17.4233 481.879 25.552V40.148C481.879 48.2767 479.595 54.5067 475.026 58.838C470.517 63.11 464.435 65.246 456.781 65.246ZM456.781 56.613C461.706 56.613 465.503 55.189 468.173 52.341C470.843 49.4337 472.178 45.488 472.178 40.504V25.196C472.178 20.212 470.843 16.296 468.173 13.448C465.503 10.5407 461.706 9.087 456.781 9.087C451.975 9.087 448.208 10.5407 445.478 13.448C442.749 16.296 441.384 20.212 441.384 25.196V40.504C441.384 45.488 442.749 49.4337 445.478 52.341C448.208 55.189 451.975 56.613 456.781 56.613Z" fill="currentColor"/>
</svg>
)