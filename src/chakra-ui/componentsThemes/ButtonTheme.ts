export const ButtonTheme = {
	variants: {
		main: {
			bg: 'yellow.300',
			color: 'blackAlpha.900',
			fontWeight: 600,
			gap: '4',
			_hover: {
				bg: 'yellow.400',
			},
		},
		burger: {
			width: '48px',
			height: '48px',
		},
		delete: {
			bg: 'blackAlpha.900',
			_hover: {
				bg: 'blackAlpha.800',
			},
		},
	},

	sizes: {
		xs: { fontSize: 'md', padding: '4' },
		sm: {
			fontSize: 'xl',
			padding: '5',
		},
		md: {
			fontSize: '3xl',
			paddingTop: '3',
			paddingBottom: '3',
			paddingLeft: '7',
			paddingRight: '7',
			height: 'auto',
			textTransform: 'uppercase',
		},
	},
}
