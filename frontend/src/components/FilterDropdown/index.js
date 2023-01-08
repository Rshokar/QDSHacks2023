import { useState } from 'react';
import { StarFilled } from '@ant-design/icons';
import { Dropdown, Button } from 'antd';

import { Container } from './styled';

const testItems = [
    {
      key: '1',
      label: (
        <span>Item 1</span>
      ),
    },
    {
      key: '2',
      label: (
        <span>Item 2</span>
      ),
    },
    {
      key: '3',
      label: (
        <span>Item 3</span>
      ),
    },
  ];

const FilterDropdown = ({ text, icon, options, onSelectionChanged }) => {
    const toMenuOpts = (strings) => strings.map((str) => ({
		key: str,
		label: (
			<span>{str}</span>
		),
	}));
	const opts = options ? toMenuOpts(options) : testItems;
	
	const [selected, setSelected] = useState(opts[0].key || testItems[0].key);  

	const handleSelect = ({ key }) => {
		if (key !== selected) {
			setSelected(key);
			onSelectionChanged(key);
		}
	}
  
	return (
			<Container>
				<span>{icon ? icon : <StarFilled/>} {text}</span>
				<Dropdown 
					menu={{
						items: opts || testItems,
						onClick: handleSelect,
						selectedKeys: [selected],
					}}
				>
					<Button type="default" className="dropdown-btn">{selected}</Button>
				</Dropdown>
			</Container>
		);
}

export default FilterDropdown;