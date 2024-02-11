import { useState } from 'react';

interface Props {
	items: { id: number; name: string }[];
	heading: string;
  onSelectItem: (item: { id: number; name: string }) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No items to display</p>}
			<ul className='list-group'>
				{items.map((item) => {
					return (
						<li
							key={item.id}
							className={
								selectedIndex === item.id
									? 'list-group-item active'
									: 'list-group-item'
							}
							onClick={() => {
								setSelectedIndex(item.id);
                onSelectItem(item);
							}}
						>
							{item.name}
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default ListGroup;
