import { Container } from './styled';

import { StarFilled } from '@ant-design/icons';
import { Dropdown } from 'antd';

const testItems = [
    {
      key: '1',
      label: 'Item 1',
    },
    {
      key: '2',
      label: 'Item 2',
    },
    {
      key: '3',
      label: 'Item 3',
    },
  ];

const FilterDropdown = ({text, icon, options, selected, setSelected}) => {
    return (
        <Container>
            <span>{icon ? icon : <StarFilled/>} {text}</span>
            <Dropdown 
                arrow="true"
                menu={{
                    items: options ? options : testItems
                }}
            >
                Test
            </Dropdown>
        </Container>
    );
}

export default FilterDropdown;