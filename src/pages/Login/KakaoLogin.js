import './KakaoLogin.scss';

const Login = ({ setIsOpenModal }) => {
  const closeModal = () => {
    setIsOpenModal(false);
  };

  function kakaoLogin() {
    window.Kakao.Auth.login({
      scope: 'profile_nickname, profile_image, account_email, gender, birthday',
      success: function (receiveAuthObjData) {
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            const kakao_account = res.kakao_account;
          },
        });
        fetch('https://a937-211-106-114-186.ngrok.io/users/login/kakao ', {
          method: 'GET',
          headers: {
            Authorization: receiveAuthObjData.access_token,
          },
        });
      },
    });
  }

  function kakaoLogout() {
    if (!window.Kakao.Auth.getAccessToken()) {
      alert('Not logged in.');
      return;
    }
    window.Kakao.Auth.logout(function () {
      alert('logout ok\naccess token -> ' + window.Kakao.Auth.getAccessToken());
    });
  }

  return (
    <div className="kakao">
      <div className="login">
        <div className="kakaoLogin">
          <img
            className="loginBtn"
            src="/images/kakao_login_btn.png"
            alt="kakaoLoginBtn"
            onClick={kakaoLogin}
          />
          {/* <button className="apiBtn" onClick={kakaoLogout}>
            로그아웃
          </button> */}
          <button onClick={closeModal} className="closeBtn">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
