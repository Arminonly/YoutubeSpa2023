import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { Input, List, Modal, Form, Select,Row,Col,Slider } from 'antd';
import { setTitle, savedRequests} from '../../components/store/actions';

const Favourites = () => {
  // !store
  const dispatch = useDispatch();
  const video = useSelector((state) => state.reducer.video);
  const title = useSelector((state) => state.reducer.title);
  const searchValue = useSelector((state) => state.reducer.searchValue);
  const state = useSelector((state) => state.reducer.state);
  const inputValue = useSelector((state) => state.reducer.inputValue);
  const savedRequests = useSelector((state) => state.reducer.savedRequests);

  // !state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // ! functions
  const showEditModal = () => {
    setIsEditModalOpen(true);
    dispatch(setTitle(title));
  };

  const hideEditModal = () => {
    setIsEditModalOpen(false);
  };

    //! change
    const changeRecord = (searchValue, id) => {
      const changed = [...savedRequests].map((el) =>
        el.id === id ? { ...el, searchValue } : el
      );
      dispatch(savedRequests(changed));
    };



  return (
    <>
      <div
        style={{
          marginTop: '20px',
          width: '1040px',
          height: '720px',
          textAlign: 'left'
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--fontFamily)',
            fontSize: '28px',
            fontWeight: 'var(--fontWeight)',
            lineHeight: '40px'
          }}
        >
          Избранное
        </h2>
        {savedRequests &&
          savedRequests.map((el) => {
            return (
              <>
                <List
                  onClick={showEditModal}
                  key={el.videoId}
                  style={{
                    cursor: 'pointer',
                    padding: '5px',
                    margin: '5px 0px'
                  }}
                  bordered
                >
                  {el.title}
                </List>
              </>
            );
          })}
      </div>
      <Modal
        centered
        width={500}
        title="Переименовать"
        cancelText="Отмена"
        okText="Сохранить"
        open={isEditModalOpen}
        onCancel={hideEditModal}
        onOk={hideEditModal}
      >
        <Form layout="vertical">
        <Form.Item label="Запрос">
        <Input 
                 value={searchValue} 
                //  onChange={e=>changeRecord(e.target.value,el.id)}
                 name='request' />
        {/* {
        
          savedRequests.length &&(  savedRequests.map(el=>{
              return(
                <div key={el.id}>
                <Input 
                 value={el.searchValue} 
                 onChange={e=>changeRecord(e.target.value,el.id)}
                 name='request' />
                </div>
              )
            }))
         
        } */}
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
                  // onChange={onChange}
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
                  // onChange={onChange}
                />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            {/* {savedRequests.length &&
              savedRequests.map((el) => {
                return (
                  <>
                    <span>
                      <Input
                        value={el.title}
                        onChange={(e) => dispatch(setTitle(e.target.value, el.id))}
                        name="title"
                      />
                    </span>
                  </>
                );
              })} */}
            {/* <Input
           label="Название" required
              value={{title}}
              onChange={(e) => dispatch(setTitle(e.target.value))}
         
              name="title"
            /> */}
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
};

export default Favourites;
