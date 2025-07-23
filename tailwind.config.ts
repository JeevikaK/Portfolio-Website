import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'glow': 'var(--shadow-glow)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float-1': {
					'0%, 100%': { 
						transform: 'translate(0, 0) rotate(0deg)',
						opacity: '0.7'
					},
					'25%': { 
						transform: 'translate(30px, -20px) rotate(5deg)',
						opacity: '1'
					},
					'50%': { 
						transform: 'translate(-20px, -40px) rotate(-3deg)',
						opacity: '0.8'
					},
					'75%': { 
						transform: 'translate(-40px, -10px) rotate(8deg)',
						opacity: '0.9'
					}
				},
				'float-2': {
					'0%, 100%': { 
						transform: 'translate(0, 0) rotate(0deg)',
						opacity: '0.6'
					},
					'33%': { 
						transform: 'translate(-25px, -30px) rotate(-5deg)',
						opacity: '0.9'
					},
					'66%': { 
						transform: 'translate(35px, -15px) rotate(7deg)',
						opacity: '0.7'
					}
				},
				'float-3': {
					'0%, 100%': { 
						transform: 'translate(0, 0) rotate(0deg)',
						opacity: '0.5'
					},
					'20%': { 
						transform: 'translate(20px, -25px) rotate(4deg)',
						opacity: '0.8'
					},
					'60%': { 
						transform: 'translate(-30px, -35px) rotate(-6deg)',
						opacity: '1'
					},
					'80%': { 
						transform: 'translate(15px, -5px) rotate(2deg)',
						opacity: '0.6'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-1': 'float-1 8s ease-in-out infinite',
				'float-2': 'float-2 12s ease-in-out infinite',
				'float-3': 'float-3 10s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
