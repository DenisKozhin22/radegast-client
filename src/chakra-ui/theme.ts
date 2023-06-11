import { extendTheme } from '@chakra-ui/react'
import { ButtonTheme as Button } from './componentsThemes/ButtonTheme'
import { TabsTheme as Tabs } from './componentsThemes/TabsTheme'
import { InputTheme as Input } from './componentsThemes/InputTheme'
import { Menutheme as Menu } from './componentsThemes/MenuTheme'
import { CheckBoxTheme as Checkbox } from './componentsThemes/CheckBoxTheme'
import { TableTheme as Table } from './componentsThemes/TableTheme'

export const theme = extendTheme({
	components: {
		Button,
		Tabs,
		Input,
		Menu,
		Checkbox,
		Table,
		Heading: {
			variants: {
				footer: {
					color: 'yellow.300',
					fontSize: '30px',
					fontWeight: 700,
					textAlign: 'center',
					marginBottom: '20px',
				},
			},
		},
	},
	styles: {
		global: {
			body: {
				bg: 'blackAlpha.900',
				color: 'white',
			},
		},
	},
})
