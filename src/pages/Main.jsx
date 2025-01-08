import React from 'react';

import Login from '../components/Login.jsx';

import search_icon from '../components/images/search_icon.png';
import climate_icon from '../components/images/climate.png';
import environment_icon from '../components/images/tree.png';
import disease_icon from '../components/images/disease.png';
import pop_icon from '../components/images/pop.png';
import Logout_modal from '../components/Logout_modal.jsx';

const Main = () => {
  return (
    <>
      <Logout_modal />
      <div className="first_box">
        <div className="searchbox">
          <input
            className="inputTag"
            type="text"
            placeholder="검색어를 입력해주세요"
          />
          <img
            src={search_icon}
            alt="돋보기 아이콘"
            style={{ width: '37px', marginLeft: '10px' }}
          />
        </div>
        <div className="chartbox"></div>
      </div>
      {/* -------------------------------------------------------------------------- */}
      <div className="second_box">
        <div className="category_box">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>카테고리별</h2>
            <div style={{ display: 'inline-flex' }}>
              <div className="box box1">
                <img src={climate_icon} />
                <p>기후</p>
              </div>
              <div className="box box2">
                <img src={environment_icon} />
                <p>환경</p>
              </div>
              <div className="box box3">
                <img src={disease_icon} />
                <p>질병</p>
              </div>
            </div>
          </div>
        </div>
        {/* 로그인 하는 창 */}
        <div>
          <Login />
        </div>
      </div>
      {/* --------------------------------------------------------------------------- */}
      <div className="third_box">
        <div className="databox popular_data">
          <div style={{ display: 'flex', margin: '30px 0 0 30px' }}>
            <img src={pop_icon} style={{ width: '30px' }} />
            <span
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginLeft: '30px',
              }}
            >
              인기 데이터
            </span>
          </div>
        </div>
        <div className="databox data_statics">
          <h4>데이터통계</h4>
        </div>
      </div>
    </>
  );
};

export default Main;
