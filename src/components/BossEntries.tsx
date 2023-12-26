import { Button, Divider, Grid, ListItem, Stack } from '@mui/material';
import { BossProps } from '../utils/props';

const BossEntries = (props: BossProps) => {
	return (
		<>
			<ListItem
				key={props.id}
				disablePadding
				sx={props.lowestDifficulty && props.name !== 'Zakum' ? { mt: 4 } : { mt: 0 }}
			>
				<Grid
					direction='row'
					spacing={2}
					width='100%'
					justifyContent='center'
					bgcolor={'white'}
					px={2}
					py={1}
				>
					<img
						src={require(`../assets/smallSizeImages/${props.name.replace(/\s+/g, '')}.png`)}
						alt={props.name}
						loading='lazy'
						style={{ width: 50, height: 50 }}
					/>
					<img
						src={require(`../assets/bossDifficulty/${props.difficulty}.png`)}
						alt={props.name}
						loading='lazy'
						style={{ width: 100 }}
					/>
					<Button
						sx={{ height: 'fit-content' }}
						variant='contained'
					>
						More
					</Button>
				</Grid>
			</ListItem>
		</>
	);
};

export { BossEntries };
