/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: "media",
  theme: {
    fontFamily: {
      'headline': "var(--z-ds-font-headline)",
      'headline-2': "var(--z-ds-font-headline-2)",
      'letter': "var(--z-ds-font-letter)",
      'text': "var(--z-ds-font-text)",
    },
    extend: {
      colors: {
        'primary': {
          main: "var(--z-ds-color-focus-100)"
        },
        'z-ds-color-hashi': {
          yellow: "var(--color-hashi-yellow)",
          blue: "var(--color-hashi-blue)",
          turquoise: "var(--color-hashi-turquoise)",
          bluesky: "var(--color-hashi-bluesky)",
          green: "var(--color-hashi-green)",
        },
        'z-ds-general-black': {
          40: "var(--z-ds-color-general-black-40)",
          60: "var(--z-ds-color-general-black-60)",
          80: "var(--z-ds-color-general-black-80)",
          100: "var(--z-ds-color-general-black-100)",
          "100--rgb": "var(--z-ds-color-general-black-100--rgb)",
        },
        'z-ds-general-white': {
          40: "var(--z-ds-color-general-white-40)",
          60: "var(--z-ds-color-general-white-60)",
          80: "var(--z-ds-color-general-white-80)",
          100: "var(--z-ds-color-general-white-100)",
          "100--rgb": "var(--z-ds-color-general-white-100--rgb)",
        },
        'z-ds-color-background': {
          0: "var(--z-ds-color-background-0)",
          "0--rgb": "var(--z-ds-color-background-0--rgb)",
          10: "var(--z-ds-color-background-10)",
          20: "var(--z-ds-color-background-20)",
          modal: "var(--z-ds-color-background-modal)",
          warning: "var(--z-ds-color-background-warning)",
        },
        'z-ds-color-text': {
          40: "var(--z-ds-color-text-40)",
          55: "var(--z-ds-color-text-55)",
          70: "var(--z-ds-color-text-70)",
          100: "var(--z-ds-color-text-100)",
          "100--rgb": "var(--z-ds-color-text-100--rgb)",
        },
        'z-ds-color-accent': {
          70: "var(--z-ds-color-accent-70)",
          100: "var(--z-ds-color-accent-100)",
        },
        'z-ds-color-error': {
          70: "var(--z-ds-color-error-70)",
        },
        'z-ds-color-focus': {
          100: "var(--z-ds-color-focus-100)",
        },
        'z-ds-color-success': {
          100: "var(--z-ds-color-background-success)",
        },
        'z-ds-color-warning': {
          100: "var(--z-ds-color-background-warning)",
        },
        'z-ds-color-border': {
          70: "var(--z-ds-color-border-70)",
          100: "var(--z-ds-color-border-100)",
          hover: "var(--z-ds-color-border-hover)",
        },
        'z-ds-color-hey-studium': {
          "primary": "var(--z-ds-color-hey-studium-primary)",
          "button-default": "var(--z-ds-color-hey-studium-button-default)",
          "button-hover": "var(--z-ds-color-hey-studium-button-hover)",
        },
      },
      fontSize: {
        "z-ds-12": '0.75rem',
        "z-ds-14": '0.875rem',
        "z-ds-16": '1rem',
        "z-ds-18": '1.125rem',
        "z-ds-20": '1.25rem',
        "z-ds-22": '1.375rem',
        "z-ds-24": '1.5rem',
        "z-ds-26": '1.625rem',
        "z-ds-30": '1.875rem',
        "z-ds-32": '2rem',
        "z-ds-34": '2.125rem',
        "z-ds-36": '2.25rem',
        "z-ds-42": '2.625rem',
        "z-ds-46": '2.875rem',
        "z-ds-54": '3.375rem',
      },
      lineHeight: {
        "z-ds-10": '1',
        "z-ds-11": '1.1',
        "z-ds-12": '1.2',
        "z-ds-15": '1.5',
      },
      letterSpacing: {
        "z-ds-1": '0.02em',
      },
      borderRadius: {
        "z-ds-2": "0.125rem",
        "z-ds-4": "0.25rem",
        "z-ds-8": "0.5rem",
      },
      boxShadow: {
        "z-ds-base": '0 0.25rem 0.625rem rgba(0, 0, 0, 0.05)',
        "z-ds-tooltip": '0 0 1px rgba(0, 0, 0, 0.2), 0 0 1.25rem rgba(0, 0, 0, 0.05)',
      },
      dropShadow: {
        'z-ds-tooltip': 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.2)) drop-shadow(0 0 1.25rem rgba(0, 0, 0, 0.05))',
      },
      spacing: {
        'z-ds-4': '0.25rem',
        'z-ds-6': '0.375rem',
        'z-ds-8': '0.5rem',
        'z-ds-10': '0.625rem',
        'z-ds-12': '0.75rem',
        'z-ds-14': '0.875rem',
        'z-ds-16': '1rem',
        'z-ds-20': '1.25rem',
        'z-ds-24': '1.5rem',
        'z-ds-32': '2rem',
        'z-ds-54': '3.5rem',
        'z-ds-xxxs': '0.25rem',
        'z-ds-xxs': '0.25rem',
        'z-ds-xs': '0.5rem',
        'z-ds-s': '0.75rem',
        'z-ds-m': '1rem',
        'z-ds-l': '1.5rem',
        'z-ds-xl': '2rem',
        'z-ds-xxl': '2rem',
        'z-ds-teaser': '1.5rem',
      },
    },
  },
  plugins: [],
}

