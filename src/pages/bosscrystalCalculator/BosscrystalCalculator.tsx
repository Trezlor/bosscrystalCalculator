import { List, Stack } from '@mui/material';
import { BossEntries } from '../../components/BossEntries';
import bossList from '../../data/bossList.json';

const BosscrystalCalculator = () => {
	return (
		<Stack alignItems={'center'}>
			<List
				disablePadding
				sx={{ width: '100%', maxWidth: 1220 }}
			>
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
		</Stack>
	);
};

export { BosscrystalCalculator };
