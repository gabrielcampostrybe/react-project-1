import ListGroup from './components/ListGroup';

function App() {
	let items = [
		{ id: 1, name: 'New York' },
		{ id: 2, name: 'Washington' },
		{ id: 3, name: 'Ohio' },
		{ id: 4, name: 'California' },
		{ id: 5, name: 'Florida' },
	];

	const handleSelectItem = (item: { id: number; name: string }) => {
		console.log(item);
	};

	return (
		<div>
			<ListGroup
				items={items}
				heading='Cities'
				onSelectItem={handleSelectItem}
			/>
		</div>
	);
}

export default App;
