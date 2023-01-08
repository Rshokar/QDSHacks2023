import { useEffect, useState } from 'react';
import { Dropdown, Button } from 'antd';

import { Container } from './styled';

const DestinationDropdown = ({ text, icon, defOpt, options, opt, onSelectionChanged }) => {
    const toMenuOpts = (strings) => strings.map((str) => ({
		key: str,
		label: (
			<span>{str}</span>
		),
	}));
	const opts = options ? toMenuOpts(options) : [];
	
	const [selected, setSelected] = useState(defOpt ? opts[0].key : ' ');  

	const handleSelect = ({ key }) => {
		if (key !== selected) {
			setSelected(key);
			onSelectionChanged(key);
		}
	}

	useEffect(() => {
		!opt && setSelected(' ');
	}, [opt]);
  
	return (
			<Container>
				<div className="upper">
					{icon && <img src={icon} alt="site icon"/>}
				</div>
				<div className="lower">
					<span>{text}</span>
					<Dropdown 
						menu={{
							items: opts,
							onClick: handleSelect,
							selectedKeys: [opt],
							defaultSelectedKeys: [defOpt && selected]
						}}
					>
						<Button type="default" className="dropdown-btn">{selected}</Button>
					</Dropdown>					
				</div>
			</Container>
		);
}

export default DestinationDropdown;