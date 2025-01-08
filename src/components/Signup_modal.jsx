import '../Login.css';
import check from './images/check.png';
import { useNavigate } from 'react-router-dom';

const Signupmodal = ({ onClose, className }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    onClose();
    navigate('/');
  };
  return (
    <div className={`modal_wrap ${className}`}>
      <div
        className="circle"
        style={{
          width: '45px',
          height: '45px',
          textAlign: 'center',
          lineHeight: '60px',
          borderRadius: '50%',
          backgroundColor: 'rgb(26, 181, 31,0.12)',
        }}
      >
        <img src={check} style={{ width: '27px' }} />
      </div>
      <p style={{ fontSize: '24px', fontWeight: 'bolder' }}>회원가입 완료</p>
      <p style={{ margin: '0px' }}>지금 바로 로그인하여</p>
      <p style={{ margin: '0px 0 15px 0' }}>다양한 데이터를 만나보세요!</p>
      <button className="confirmB" onClick={handleRedirect}>
        메인화면으로 이동
      </button>
    </div>
  );
};
export default Signupmodal;
