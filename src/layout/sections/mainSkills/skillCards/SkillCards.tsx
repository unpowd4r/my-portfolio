import cssImg from '../../../../components/icons/css-svgrepo-com.svg'
import htmlImg from '../../../../components/icons/html-svgrepo-com.svg'
import reactImg from '../../../../components/icons/react-svgrepo-com.svg'
import typeScriptImg from '../../../../components/icons/typescript-official-svgrepo-com.svg'

import { Rectangles } from '../rectangle/Rectangle'
import { Card, IconsImg } from '../styled/Styled'

const iconsSkills = [
	{ id: 1, icons: htmlImg, name: 'HTML' },
	{ id: 2, icons: cssImg, name: 'CSS' },
	{ id: 3, icons: reactImg, name: 'React' },
	{ id: 4, icons: typeScriptImg, name: 'Type Script' },
]

export const SkillCards = () => {
	return (
		<Card>
			{iconsSkills.map(skill => (
				<div key={skill.id}>
					<IconsImg src={skill.icons} alt={skill.name} />
					<p>{skill.name}</p>
					<Rectangles />
				</div>
			))}
		</Card>
	)
}
