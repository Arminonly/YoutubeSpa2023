import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import {
  Input,
  Space,
  Card,
  List,
  Tooltip,
  Modal,
  Form,
  Select,
  Slider,
  Row,
  Col,
  Popover,
  Button
} from 'antd';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaList } from 'react-icons/fa';
import { SlGrid } from 'react-icons/sl';
import {
  setVideo,
  setTitle,
  setSearchValue,
  setState,
  setInputValue,
  setSavedRequests,
} from '../../components/store/actions';
const { Search } = Input;

// const token = 'AIzaSyACRj6FOFnBCZTTWYHnzw_GDl_Ke-7ZLec';
const token = 'AIzaSyBpMFUtn4Q6Sdc3T65l7LqRclL7tzzbQ8M';
// const token = 'AIzaSyBnBvW2vrUjOErfLDhHQfXpKJs7nw3__tk';
// const token = 'AIzaSyCJldMchAktkYXNTMxih-fZ3hQwxzI6FMo';
const max = 12;
const str = `asot`;
const order = `viewCount `;
const url = `https://www.googleapis.com/youtube/v3/search?key=${token}&maxResults=${max}&q=${str}&order=${order}`;

// console.log(url);

const SearchPage = () => {
  // ! store
  const dispatch = useDispatch();
  const video = useSelector((state) => state.reducer.video);
  const title = useSelector((state) => state.reducer.title);
  const searchValue = useSelector((state) => state.reducer.searchValue);
  const state = useSelector((state) => state.reducer.state);
  const inputValue = useSelector((state) => state.reducer.inputValue);
  const savedRequests = useSelector((state) => state.reducer.savedRequests);

  //! state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true)
  };
  const handleOk = (e) => {
    e.preventDefault();
    const newFavourites = {
      searchValue,
      title,
      id: uuidv4()
    };
    dispatch(setSavedRequests([...savedRequests, newFavourites]));
    dispatch(setTitle(''));
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
    setIsModalOpen(false)
    console.log('newFavourites', newFavourites);
  };
  const handleCancel = () => {
   setIsModalOpen(false)
  };

    const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    dispatch(setInputValue(value));
  };
  
  const onSearch = (value) => {
    dispatch(setSearchValue(value));
  };

  const onCardToggle = () => {
    dispatch(setState(true));
  };
  const onListToggle = () => {
    dispatch(setState(false));
  };

  useEffect(() => {
    if (!searchValue.trim()) return;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const found = data.items.map(
          (item) => `https://www.youtube.com/embed/${item.id.videoId}`
        );
        dispatch(setVideo(found));
        // console.log(found);
      });
  }, [searchValue]);

  return (
    <div
      style={{
        marginTop: '20px',
        width: '1040px',
        height: '720px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          width: '217px',
          height: '52px',
          marginTop: '70px',
          marginBottom: '50px'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--fontFamily)',
            fontWeight: 'var(--fontWeight)',
            fontSize: '36px',
            lineHeight: '52px'
          }}
        >
          Поиск видео
        </span>
      </div>

      <Space
        direction="vertical"
        style={{
          width: '100%',
          height: '52px'
        }}
      >
        <Search
          placeholder="Что хотите посмотреть?"
          allowClear
          defaultValue={'asot'}
          suffix={
            <Tooltip title="Поместить в избранное" placement="top">
            <AiOutlineHeart onClick={showModal} style={{ cursor: 'pointer' }} />
            </Tooltip>
          }
          enterButton={
            <div style={{ width: '150px' }}>
              <span
                style={{
                  width: '110px',
                  height: '24px',
                  fontFamily: 'var(--fontFamily)',
                  fontSize: '20px',
                  fontWeight: 'var(--fontWeight)',
                  lineHeight: '24px',
                  textAlign: 'var(--textAlign)'
                }}
              >
                Найти
              </span>
            </div>
          }
          size="large"
          onSearch={onSearch}
        />
      </Space>
      <div
        style={{
          width: '100%',
          height: '30px',
          marginTop: '30px',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div>
          {' '}
          Видео по запросу: &nbsp;{searchValue} &nbsp;&nbsp;&nbsp;
          <span style={{ opacity: '0.4' }}>{video.length}</span>
        </div>
        {/* icons */}
        <div>
          <span onClick={onListToggle} style={{ cursor: 'pointer' }}>
            <Tooltip title="List view" placement="left">
              <FaList />
            </Tooltip>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span onClick={onCardToggle} style={{ cursor: 'pointer' }}>
            <Tooltip title="Card view" placement="right">
              <SlGrid />
            </Tooltip>
          </span>
        </div>
      </div>

      <>
        {state
          ? video.map((vidos) => (
              <Space
                key={vidos}
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}
              >
                <Card bordered={false}>
                  <div>
                    <iframe
                      width="450"
                      height="315"
                      src={vidos}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Card>
              </Space>
            ))
          : video.map((vidos) => (
              <>
                <List key={vidos}>
                  <iframe
                    width="150"
                    height="80"
                    src={vidos}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </List>
              </>
            ))}
      </>

      <Modal
        centered
        width={500}
        title="Сохранить запрос"
        cancelText="Не сохранять"
        okText="Сохранить"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical" onSubmit={handleOk}>
          <Form.Item label="Запрос">
            <Input disabled value={searchValue} name='request' />
          </Form.Item>

          <Form.Item label="Название" required>
            {' '}
            <Input
              placeholder="Укажите название"
              name="title"
              value={title}
              onChange={(e) => dispatch(setTitle(e.target.value))}
            />
          </Form.Item>

          {/* сортировка */}
          <Form.Item label="Сортировать по">
            <Select placeholder="Без сортировки">
              {video.map((select, index) => {
                return <Select.Option name="select" onChange={(e) => dispatch(setTitle(e.target.value))}  key={index} value={select.order} />;
              })}
            </Select>
          </Form.Item>

          {/* slider */}
          <Form.Item label="Максимальное количество">
            <Row>
              <Col span={18}>
                <Slider
                  min={0}
                  max={50}
                  defaultValue={25}
                  autoFocus={true}
                  range={true}
                  onChange={onChange}
                  name='slider'
                />
              </Col>
              <Col span={5}>
                <Input
                  type="button"
                  name='button'
                  min={0}
                  max={50}
                  style={{
                    margin: '0 16px',
                    textAlign: 'center'
                  }}
                  value={inputValue}
                  onChange={onChange}
                />
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SearchPage;
