import { Button } from '@mui/material';
import React, { useState } from 'react';

export const App = (): JSX.Element => {
	const [count, setCount] = useState(0);

	return (
		<Button variant="contained" onClick={(): void => setCount(count => count + 1)}>
			click me {count}
		</Button>
	);
};
