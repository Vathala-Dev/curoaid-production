/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        extend: {
            colors: {
                /* ============================================
                   PRIMARY COLOR SYSTEM
                   ============================================ */
                primary: {
                    background: "var(--primary-background)",
                    'background-light': "var(--primary-background-light)",
                    overlay: "var(--primary-background-overlay)",
                    'overlay-light': "var(--primary-background-overlay-light)",
                    text: "var(--primary-text)",
                    accent: "var(--primary-accent)",
                },

                /* ============================================
                   SECONDARY COLOR SYSTEM
                   ============================================ */
                secondary: {
                    background: "var(--secondary-background)",
                    'background-dark': "var(--secondary-background-dark)",
                    text: "var(--secondary-text)",
                    'text-muted': "var(--secondary-text-muted)",
                },

                /* ============================================
                   SUCCESS/ACTION COLOR SYSTEM
                   ============================================ */
                success: {
                    background: "var(--success-background)",
                    'background-alt': "var(--success-background-alt)",
                    text: "var(--success-text)",
                },

                /* ============================================
                   ACCENT COLOR SYSTEM
                   ============================================ */
                accent: {
                    teal: "var(--accent-teal)",
                    'teal-light': "var(--accent-teal-light)",
                },

                /* ============================================
                   TEXT COLOR SYSTEM
                   ============================================ */
                text: {
                    primary: "var(--text-primary)",
                    secondary: "var(--text-secondary)",
                    'secondary-transparent': "var(--text-secondary-transparent)",
                    muted: "var(--text-muted)",
                    light: "var(--text-light)",
                    'light-alt': "var(--text-light-alt)",
                    white: "var(--text-white)",
                    'white-transparent': "var(--text-white-transparent)",
                    accent: "var(--text-accent)",
                },

                /* ============================================
                   BACKGROUND COLOR SYSTEM
                   ============================================ */
                background: {
                    white: "var(--bg-white)",
                    'overlay-dark': "var(--bg-overlay-dark)",
                    'overlay-medium': "var(--bg-overlay-medium)",
                    'overlay-light': "var(--bg-overlay-light)",
                    'transparent-dark': "var(--bg-transparent-dark)",
                    'transparent-medium': "var(--bg-transparent-medium)",
                    'transparent-light': "var(--bg-transparent-light)",
                    muted: "var(--bg-muted)",
                    'muted-light': "var(--bg-muted-light)",
                },

                /* ============================================
                   BORDER COLOR SYSTEM
                   ============================================ */
                border: {
                    primary: "var(--border-primary)",
                    light: "var(--border-light)",
                    medium: "var(--border-medium)",
                    accent: "var(--border-accent)",
                    transparent: "var(--border-transparent)",
                },

                /* ============================================
                   COMPONENT SPECIFIC COLORS
                   ============================================ */
                header: {
                    background: "var(--header-bg)",
                    text: "var(--header-text)",
                    menu: "var(--header-menu-text)",
                },
                button: {
                    'primary-bg': "var(--button-primary-bg)",
                    'primary-text': "var(--button-primary-text)",
                    'success-bg': "var(--button-success-bg)",
                    'success-text': "var(--button-success-text)",
                },
                footer: {
                    background: "var(--footer-bg)",
                    text: "var(--footer-text)",
                    link: "var(--footer-link-text)",
                },
                card: {
                    background: "var(--card-bg)",
                    border: "var(--card-border)",
                },
                iconButton: {
                    background: "var(--icon-button-bg)",
                    'background-alt': "var(--icon-button-bg-alt)",
                },
                divider: {
                    light: "var(--divider-light)",
                    medium: "var(--divider-medium)",
                    dark: "var(--divider-dark)",
                    accent: "var(--divider-accent)",
                },
            },

            /* ============================================
               TYPOGRAPHY SYSTEM
               ============================================ */
            fontSize: {
                'xs': 'var(--font-size-xs)',
                'sm': 'var(--font-size-sm)',
                'base': 'var(--font-size-base)',
                'md': 'var(--font-size-md)',
                'lg': 'var(--font-size-lg)',
                'xl': 'var(--font-size-xl)',
                '2xl': 'var(--font-size-2xl)',
                '3xl': 'var(--font-size-3xl)',
                '4xl': 'var(--font-size-4xl)',
                '5xl': 'var(--font-size-5xl)',
            },

            fontWeight: {
                'normal': 'var(--font-weight-normal)',
                'medium': 'var(--font-weight-medium)',
                'semibold': 'var(--font-weight-semibold)',
                'bold': 'var(--font-weight-bold)',
                'extrabold': 'var(--font-weight-extrabold)',
            },

            lineHeight: {
                'xs': 'var(--line-height-xs)',
                'sm': 'var(--line-height-sm)',
                'base': 'var(--line-height-base)',
                'md': 'var(--line-height-md)',
                'lg': 'var(--line-height-lg)',
                'xl': 'var(--line-height-xl)',
                '2xl': 'var(--line-height-2xl)',
                '3xl': 'var(--line-height-3xl)',
                '4xl': 'var(--line-height-4xl)',
                '5xl': 'var(--line-height-5xl)',
                '6xl': 'var(--line-height-6xl)',
                '7xl': 'var(--line-height-7xl)',
                '8xl': 'var(--line-height-8xl)',
                '9xl': 'var(--line-height-9xl)',
                '10xl': 'var(--line-height-10xl)',
                '11xl': 'var(--line-height-11xl)',
            },

            letterSpacing: {
                'wide': 'var(--letter-spacing-wide)',
            },

            /* ============================================
               SPACING SYSTEM
               ============================================ */
            spacing: {
                '1': 'var(--spacing-1)',
                '2': 'var(--spacing-2)',
                '3': 'var(--spacing-3)',
                '4': 'var(--spacing-4)',
                '5': 'var(--spacing-5)',
                '6': 'var(--spacing-6)',
                '7': 'var(--spacing-7)',
                '8': 'var(--spacing-8)',
                '9': 'var(--spacing-9)',
                '10': 'var(--spacing-10)',
                '11': 'var(--spacing-11)',
                '12': 'var(--spacing-12)',
                '13': 'var(--spacing-13)',
                '14': 'var(--spacing-14)',
                '15': 'var(--spacing-15)',
                '16': 'var(--spacing-16)',
                '17': 'var(--spacing-17)',
                '18': 'var(--spacing-18)',
                '19': 'var(--spacing-19)',
                '20': 'var(--spacing-20)',
                '22': 'var(--spacing-22)',
                '23': 'var(--spacing-23)',
                '24': 'var(--spacing-24)',
                '25': 'var(--spacing-25)',
                '28': 'var(--spacing-28)',
                '30': 'var(--spacing-30)',
                '33': 'var(--spacing-33)',
                '42': 'var(--spacing-42)',
                '45': 'var(--spacing-45)',
                '47': 'var(--spacing-47)',
                '49': 'var(--spacing-49)',
                '51': 'var(--spacing-51)',
                '53': 'var(--spacing-53)',
                '54': 'var(--spacing-54)',
                '57': 'var(--spacing-57)',
                '59': 'var(--spacing-59)',
                '61': 'var(--spacing-61)',
                '66': 'var(--spacing-66)',
                '68': 'var(--spacing-68)',
                '62': 'var(--spacing-62)',
                '63': 'var(--spacing-63)',
                '64': 'var(--spacing-64)',
                '65': 'var(--spacing-65)',
                '130': 'var(--spacing-130)',
                '131': 'var(--spacing-131)',
                '132': 'var(--spacing-132)',
                '137': 'var(--spacing-137)',
                '144': 'var(--spacing-144)',
                '148': 'var(--spacing-148)',
                '152': 'var(--spacing-152)',
                '172': 'var(--spacing-172)',
                '186': 'var(--spacing-186)',
                '191': 'var(--spacing-191)',
                '579': 'var(--spacing-579)',
                '587': 'var(--spacing-587)',
                '841': 'var(--spacing-841)',
                '863': 'var(--spacing-863)',
            },

            /* ============================================
               BORDER RADIUS SYSTEM
               ============================================ */
            borderRadius: {
                'xs': 'var(--radius-xs)',
                'sm': 'var(--radius-sm)',
                'md': 'var(--radius-md)',
                'lg': 'var(--radius-lg)',
                'xl': 'var(--radius-xl)',
                '2xl': 'var(--radius-2xl)',
                '3xl': 'var(--radius-3xl)',
                '4xl': 'var(--radius-4xl)',
                '5xl': 'var(--radius-5xl)',
                '6xl': 'var(--radius-6xl)',
            },

            /* ============================================
               WIDTH SYSTEM
               ============================================ */
            width: {
                '6p': 'var(--width-6)',
                '8p': 'var(--width-8)',
                '10p': 'var(--width-10)',
                '12p': 'var(--width-12)',
                '16p': 'var(--width-16)',
                '20p': 'var(--width-20)',
                '22p': 'var(--width-22)',
                '26p': 'var(--width-26)',
                '28p': 'var(--width-28)',
                '30p': 'var(--width-30)',
                '32p': 'var(--width-32)',
                '36p': 'var(--width-36)',
                '38p': 'var(--width-38)',
                '40p': 'var(--width-40)',
                '42p': 'var(--width-42)',
                '44p': 'var(--width-44)',
                '46p': 'var(--width-46)',
                '50p': 'var(--width-50)',
                '52p': 'var(--width-52)',
                '54p': 'var(--width-54)',
                '56p': 'var(--width-56)',
                '58p': 'var(--width-58)',
                '62p': 'var(--width-62)',
                '66p': 'var(--width-66)',
                '68p': 'var(--width-68)',
                '70p': 'var(--width-70)',
                '72p': 'var(--width-72)',
                '74p': 'var(--width-74)',
                '76p': 'var(--width-76)',
                '78p': 'var(--width-78)',
                '80p': 'var(--width-80)',
                '82p': 'var(--width-82)',
                '88p': 'var(--width-88)',
                '90p': 'var(--width-90)',
                '92p': 'var(--width-92)',
                '94p': 'var(--width-94)',
                '96p': 'var(--width-96)',
                '98p': 'var(--width-98)',
                'fixed-sm': 'var(--width-fixed-sm)',
                'fixed-md': 'var(--width-fixed-md)',
                'fixed-lg': 'var(--width-fixed-lg)',
                'fixed-xl': 'var(--width-fixed-xl)',
                'fixed-2xl': 'var(--width-fixed-2xl)',
                'fixed-3xl': 'var(--width-fixed-3xl)',
                'fixed-4xl': 'var(--width-fixed-4xl)',
                'fixed-5xl': 'var(--width-fixed-5xl)',
                'fixed-6xl': 'var(--width-fixed-6xl)',
                'fixed-7xl': 'var(--width-fixed-7xl)',
                'fixed-129': 'var(--width-fixed-129)',
                'fixed-131': 'var(--width-fixed-131)',
                'fixed-191': 'var(--width-fixed-191)',
                'fixed-206': 'var(--width-fixed-206)',
                'fixed-910': 'var(--width-fixed-910)',
            },
        },
    },
    plugins: [],
};