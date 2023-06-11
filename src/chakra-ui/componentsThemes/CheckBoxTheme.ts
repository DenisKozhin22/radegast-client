export const CheckBoxTheme = {
	variants: {
		meeting: {
			label: {
				color: 'blackAlpha.900',
				margin: '0 auto'
			},
			container: {
				px: '4',
				py: '2',
				borderRadius: 'md',
				backgroundColor: 'gray.50',
				_checked: {
					backgroundColor: 'yellow.300',
				},
			},
			control: {
				display: 'none',
			},
		},
	},
}
