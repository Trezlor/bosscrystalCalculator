import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { BossProps } from '../utils/props';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const BossEntries = (boss: BossProps) => {
	const [open, setOpen] = useState<boolean>(false);
	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
			<ListItemButton
				onClick={handleClick}
				sx={{
					borderWidth: 4,
					borderStyle: 'solid',
					...(boss.lowestDifficulty && boss.name !== 'Zakum' ? { mt: 2 } : { mt: 0 }),
				}}
				className={`difficulty${boss.difficulty}`}
			>
				<ListItemIcon>
					<img
						src={require(`../assets/inGameImages/${boss.name.replace(/\s+/g, '')}.png`)}
						alt={boss.name}
						loading='lazy'
						style={{ height: 80, objectFit: 'contain' }}
					/>
				</ListItemIcon>

				<ListItemText primary={boss.difficulty + ' ' + boss.name} />

				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse
				in={open}
				timeout='auto'
				unmountOnExit
			>
				<List
					component='div'
					disablePadding
					sx={{ pl: 8 }}
				>
					<ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
					<ListItemText primary='Starred' />
				</List>
			</Collapse>
		</>
	);
};

export { BossEntries };
