import { List } from '@mui/material';
import { BossEntries } from '../../components/BossEntries';
import bossList from '../../data/bossList.json';
import { PageContainer } from './BosscrystalCalculator.styles';

const BosscrystalCalculator = () => {
	return (
		<PageContainer>
			<section>
				<List disablePadding>
					{bossList.map((boss) => (
						<BossEntries
							name={boss.name}
							value={boss.value}
							difficulty={boss.difficulty}
							lowestDifficulty={boss.lowestDifficulty}
							initialValue={boss.initialValue}
							id={boss.id}
							key={boss.id}
						/>
					))}
				</List>
			</section>
		</PageContainer>
	);
};

export { BosscrystalCalculator };
