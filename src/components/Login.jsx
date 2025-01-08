import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import user_icon from '../components/images/user-icon.png';
import logout_icon from '../components/images/logout.png';
import Logout_modal from './Logout_modal.jsx';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [outModal, setoutModal] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //로그인 처리 함수
  const handleLogin = () => {
    setUserName('user name');
    setIsLoggedIn(true); // 로그인 성공 시 true로 변경
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8080/users/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setUsername(data.name);
  //       setIsLoggedIn(true);
  //       alert(data.message);
  //     } else {
  //       const errorData = await response.json();
  //       alert('로그인 실패: ' + errorData.message);
  //     }
  //   } catch (error) {
  //     console.error('로그인 요청 에러:', error);
  //   }
  // };

  // 로그아웃 처리 함수
  const handleLogout = () => {
    setUserName('');
    setIsLoggedIn(false);
    setoutModal(true);
  };
  // 모달창을 닫음
  const handleCloseModal = () => {
    setoutModal(false); // 모달창을 닫음
  };
  //회원가입 처리
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleSignup = () => {
    setIsClicked(true);
    navigate('/signup');
  };

  return (
    <div>
      {isLoggedIn ? (
        // 로그인 성공 후 화면
        <div className="profile_box">
          <div>
            <div className="login_firstbox" style={{ display: 'flex' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <img src={user_icon} alt="User" style={{ width: '100px' }} />
                </div>
                <span style={{ marginLeft: '10px', fontSize: '24px' }}>
                  {userName} 님
                </span>
              </div>
              <button
                className="logoutB"
                onClick={handleLogout}
                style={{
                  width: '145px',
                  height: '60px',
                  borderRadius: '20px',
                  border: '1px solid #d9d9d9',
                  fontSize: '18px',
                }}
              >
                로그아웃
                <img src={logout_icon} />
              </button>
            </div>
            <div className="login_secondbox">
              <button>업로드 수 N</button>
              <button>개인정보 수정</button>
            </div>
          </div>
        </div>
      ) : (
        // 로그인 입력창 화면
        <div
          className="login_box"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}
        >
          <p style={{ fontSize: '21px' }}>
            Favicon의 다양한 기능을 경험해보세요!
          </p>
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            style={{
              width: '530px',
              height: '55px',
              outline: 'none',
              fontSize: '20px',
            }}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '530px', height: '55px', fontSize: '20px' }}
          />
          <div className="fail_message" style={{ height: '30px' }}></div>
          <div className="login_button_wrap">
            <button className="loginB" onClick={handleLogin}>
              로그인
            </button>
            <button className="signupB" onClick={handleSignup}>
              회원가입
            </button>
          </div>
        </div>
      )}
      {outModal && (
        <Logout_modal
          onClose={handleCloseModal}
          className={outModal ? 'active' : ''}
        />
      )}
    </div>
  );
};

export default Login;
