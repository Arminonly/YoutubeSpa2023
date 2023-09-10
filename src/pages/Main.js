import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import Search from './search/Search';
import Favourites from './favourites/Favourites';

const items = [
  {
    key: 'tab1',
    label: `Поиск`,
    children: (
      <div>
        <Search />
      </div>
    )
  },
  {
    key: 'tab2',
    label: `Избранное`,
    children: (
      <div>
        <Favourites />
      </div>
    )
  },
  {
    key: 'tab3',
    label: (
      <div>
        <Link to="/">Выход</Link>
      </div>
    )
  }
];

const Main = () => {
  return (
    <div
      style={{
        width: '1440px',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div
        style={{
          width: '1040px',
          display: 'flex',
          flexDirection: 'row',
          margin: '0px auto',
          height: '80px'
        }}
      >
        <Tabs defaultActiveKey="tab1" items={items} />
      </div>
    </div>
  );
};

export default Main;
