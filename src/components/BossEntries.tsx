import { Button, Divider, ListItem, Stack } from '@mui/material';
import { BossProps } from '../utils/props';

const BossEntries = (props: BossProps) => {
	return (
		<>
			<ListItem
				disablePadding
				sx={props.lowestDifficulty && props.name !== 'Zakum' ? { mt: 4 } : { mt: 0 }}
			>
				<Stack
					direction='row'
					spacing={2}
					divider={
						<Divider
							orientation='vertical'
							flexItem
						/>
					}
				>
					<img
						src={require(`../assets/bigSizeImages/${props.name.replace(/\s+/g, '')}.png`)}
						alt={props.name}
					/>
					<Button variant='contained'>Contained</Button>
				</Stack>
			</ListItem>
		</>
	);
};

export { BossEntries };
