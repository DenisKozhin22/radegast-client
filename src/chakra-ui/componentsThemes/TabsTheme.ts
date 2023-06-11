export const TabsTheme = {
	variants: {
		auth: {
			tab: {
				borderTopLeftRadius: '10px',
				borderTopRightRadius: '10px',
				_selected: {
					bg: 'yellow.300',
					color: 'blackAlpha.900',
					borderColor: 'inherit',
					borderBottom: 'none',
					borderTopLeftRadius: 'md',
					borderTopRightRadius: 'md',
				},
			},
			tablist: {
				borderBottom: '2px solid #F6E05E',
			},
			tabpanel: {},
		},
	},
}
