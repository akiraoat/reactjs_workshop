import React from 'react';

import bg from '../../assets/images/bg-01.jpg';

const bgImage = {
    backgroundImage: "url(" + bg + ")",
    backgroundRepeat: "no-repeat",
};

class SignUp extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            username: '',
            password: '',
            passwordComfirm: '',
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordComfirmChange = this.onPasswordComfirmChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    onUsernameChange(e) {
        this.setState({ username: e.target.value });
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    onPasswordComfirmChange(e) {
        this.setState({ passwordComfirm: e.target.value });
    }

    onSubmit() {
        let email = this.state.email;
        let username = this.state.username;
        let password = this.state.password;
        let passwordComfirm = this.state.passwordComfirm;
        alert('Email: ' + email + '\n' + 'Username: ' + username + '\n' + 'Password: ' + password + '\n' + 'PasswordConfirm: ' + passwordComfirm);
    }

    render() {
        return (
            <div className="container-login" style={bgImage}>
                <div className="col-md-3"></div>
                <div className="col-md-6" style={{ marginTop: "60px" }}>
                    <div className="panel panel-primary" style={{ borderRadius: "2%;" }}>
                        <div className="panel-heading text-center txtLabel">ลงทะเบียน</div>
                        <div className="panel-body">
                            <form style={{ padding: "30px" }} onSubmit={this.onSubmit}>
                                <div className="input-group form-group">
                                    <span className="input-group-addon" id="basic-addon1">
                                        <i className="glyphicon glyphicon-envelope"></i>
                                    </span>
                                    <input type="text" className="form-control" placeholder="อีเมล" aria-describedby="basic-addon1" onChange={this.onEmailChange} />
                                </div>
                                <div className="input-group form-group">
                                    <span className="input-group-addon" id="basic-addon1">
                                        <i className="glyphicon glyphicon-user"></i>
                                    </span>
                                    <input type="text" className="form-control" placeholder="ชื่อผู้ใช้งาน" aria-describedby="basic-addon1" onChange={this.onUsernameChange} />
                                </div>
                                <div className="input-group form-group">
                                    <span className="input-group-addon" id="basic-addon1">
                                        <i className="glyphicon glyphicon-lock"></i>
                                    </span>
                                    <input type="password" className="form-control" placeholder="รหัสผ่าน" aria-describedby="basic-addon1" onChange={this.onPasswordChange} />
                                </div>
                                <div className="input-group form-group">
                                    <span className="input-group-addon" id="basic-addon1">
                                        <i className="glyphicon glyphicon-lock"></i>
                                    </span>
                                    <input type="password" className="form-control" placeholder="ยืนยันรหัสผ่าน" aria-describedby="basic-addon1" onChange={this.onPasswordComfirmChange} />
                                </div>
                                <hr />
                                <div className="txtInput">
                                    <button className="btn btn-lg btn-success btn-block" type="submit">บันทึกข้อมูล</button>
                                    <br />
                                    <p className="text-center">เป็นสมาชิกแล้ว?
                                    <a href="#SignIn">เข้าสู่ระบบ</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}

export default SignUp;