import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (params.slug === 'A-Brief-History-of-England') {
		return {
			title: 'A Brief History of England',
			subTitle: 'From Stonehenge to Empire: A Journey Through Time',
			tags: ['History', 'Example'],
			date: '27/04/2025',
			content:
				'England’s history is a tapestry of conquest, culture, and change. Its story begins with prehistoric marvels like Stonehenge, erected around 2500 BCE. Celtic tribes dominated until the Romans arrived in 43 CE, building roads and cities like Londinium. After their withdrawal in 410 CE, Anglo-Saxon settlers shaped early England, establishing kingdoms like Wessex and Mercia. $types Norman Conquest of 1066, led by William the Conqueror, transformed England. Feudalism took root, and iconic castles like the Tower of London emerged. The Middle Ages saw turmoil and progress: Magna Carta in 1215 curbed royal power, while the Black Death ravaged populations. The Wars of the Roses ended with the Tudor dynasty’s rise in 1485. Under the Tudors, England flourished. Henry VIII’s break with Rome birthed the Church of England, and Elizabeth I’s reign saw exploration and Shakespeare’s genius. The 17th century brought civil war, Cromwell’s brief republic, and the monarchy’s restoration. The Glorious Revolution of 1688 established parliamentary supremacy. The Industrial Revolution in the 18th century propelled England to global dominance. Innovations in steam and textiles fueled urbanization, though social inequalities sparked reform movements. The British Empire peaked in the 19th century, with England as its heart. Two world wars in the 20th century reshaped the nation, leading to decolonization and a welfare state. Today, England blends its storied past with modern multiculturalism, visible in its historic sites and vibrant cities. Its legacy endures in law, language, and global influence.'
		};
	}

	error(404, 'page not found');
};
