import React from 'react';
import logo from '../../assets/images/logo.png';
import bg from '../../assets/images/bg-01.jpg';

const bgImage = {
    backgroundImage: "url(" + bg +")",
    backgroundRepeat: "no-repeat",
};

class Signup extends React.Component {
    render(){
        return(
            <div className="container-login" style={bgImage}>
                <div className="col-md-3"></div>
                <div className="col-md-6" style={{marginTop: "60px"}}>
                <div className="panel panel-primary" style={{borderRadius: "2%;"}}>
                    <div className="panel-heading text-center txtLabel">ลงทะเบียน</div>
                    <div className="panel-body">
                        <form style={{padding: "30px"}}>
                            <div className="input-group form-group">
                                <span className="input-group-addon" id="basic-addon1">
                                <i className="glyphicon glyphicon-envelope"></i>
                                </span>
                            <input type="text" className="form-control" placeholder="อีเมล" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group form-group">
                                <span className="input-group-addon" id="basic-addon1">
                                <i className="glyphicon glyphicon-user"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="ชื่อผู้ใช้งาน" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group form-group">
                                <span className="input-group-addon" id="basic-addon1">
                                <i className="glyphicon glyphicon-lock"></i>
                                </span>
                                <input type="password" className="form-control" placeholder="รหัสผ่าน" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group form-group">
                                <span className="input-group-addon" id="basic-addon1">
                                <i className="glyphicon glyphicon-lock"></i>
                                </span>
                                <input type="password" className="form-control" placeholder="ยืนยันรหัสผ่าน" aria-describedby="basic-addon1"/>
                            </div>
                            <hr/>
                            <div className="txtInput">
                                <button className="btn btn-lg btn-success btn-block" type="submit">บันทึกข้อมูล</button>
                                <br/>
                                <p className="text-center">เป็นสมาชิกแล้ว?
                                    <a href="form_signin.html">เข้าสู่ระบบ</a>
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

export default Signup;