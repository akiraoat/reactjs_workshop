import React from 'react';
import logo from '../../assets/images/logo.png';
import bg from '../../assets/images/bg-01.jpg';

const bgImage = {
    backgroundImage: "url(" + bg + ")",
    backgroundRepeat: "no-repeat",
};

class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        }
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onUsernameChange(e) {
        this.setState({ username: e.target.value });
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    onSubmit() {
        let username = this.state.username;
        let password = this.state.password;

        let url = 'http://localhost/API/index.php/Authen/login?username=' + username + '&password=' + password;

        fetch(url)
            .then(res => res.json())
            .then(result => {
                if (result[0].flag == '1') {
                    alert(result[0].message);
                    this.props.history.push('/signup');
                } else {
                    alert(result[0].message);
                }
            }, (error) => {
                alert('Error');
            });
    }
    render() {
        return (
            <div className="container-login" style={bgImage}>
                <div className="col-md-12"></div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="account-wall">
                        <h4 className="text-center txtLabel">เข้าสู่ระบบ</h4>
                        <img className="logo-img" src={logo} alt="" />
                        <form action="" className="form-signin" onSubmit={this.onSubmit}>
                            <div className="txtInput">
                                <input type="text" className="form-control" placeholder="ชื่อผู้ใช้งาน" required autoFocus onChange={this.onUsernameChange} />
                            </div>
                            <div className="txtInput">
                                <input type="password" className="form-control" placeholder="รหัสผ่าน" required autoFocus onChange={this.onPasswordChange} />
                            </div>
                            <hr />
                            <div className="txtInput">
                                <button className="btn btn-lg btn-warning btn-block" type="submit">เข้าสู่ระบบ</button>
                            </div>
                            <br />
                            <label className="pull-left">
                                <input type="checkbox" value="remember-me" />จำฉันไว้
                                </label>
                            <p className="pull-right">ยังไม่ได้เป็นสมาชิก?
                                    <a href="#SignUp">ลงทะเบียน</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        )
    }
}

export default SignIn;