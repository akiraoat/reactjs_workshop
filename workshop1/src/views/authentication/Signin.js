import React from 'react';
import logo from '../../assets/images/logo.png';
import bg from '../../assets/images/bg-01.jpg';

const bgImage = {
    backgroundImage: "url(" + bg +")",
    backgroundRepeat: "no-repeat",
};

class Signin extends React.Component {
    render(){
        return(
            <div className="container-login" style={bgImage}>
                <div className="col-md-12"></div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="account-wall">
                        <h4 className="text-center txtLabel">เข้าสู่ระบบ</h4>
                        <img className="logo-img" src={logo} alt=""/>
                            <form action="" className="form-signin">
                                <div className="txtInput">
                                    <input type="text" className="form-control" placeholder="อีมล" required autoFocus/>
                                </div>
                                <div className="txtInput">
                                    <input type="password" className="form-control" placeholder="รหัสผ่าน" required autoFocus/>
                                </div>
                                <hr/>
                                <div className="txtInput">
                                    <button className="btn btn-lg btn-warning btn-block" type="submit">เข้าสู่ระบบ</button>
                                </div>
                                <br/>
                                <label className="pull-left">
                                    <input type="checkbox" value="remember-me"/>จำฉันไว้
                                </label>
                                <p className="pull-right">ยังไม่ได้เป็นสมาชิก?
                                    <a href="form_signup.html">ลงทะเบียน</a>
                                </p>
                            </form>
                        </div>
                    </div>
                <div className="col-md-4"></div>
            </div>
        )
    }
}

export default Signin;