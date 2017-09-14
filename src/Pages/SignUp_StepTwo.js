import React, {Component} from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';
import Select from '../Components/Select.js';
import Academy from '../Components/Academy';
import CSSModules from 'react-css-modules';
import style from '../css_modules/signup.css';

const towards = ["交互&设计", "产品&运营", "前端", "安卓", "后台", "运维开发"];

function StepTwo() {
	return (
		<div className={style.main2}>
			<form className="form" className={style.form2}>
				<Input label="用户名" name="uid" type="text" id="uid" key="uid" />
				<Input label="密码" name="password" type="password" id="password" key="password" />
				<Input label="重复密码" name="passwordCopy" type="password" id="passwordCopy" key="passwordCopy" />
				<Academy />
				<Input label="邮箱" name="email" type="text" id="email" key="email" />
				<Input label="手机号码" name="phoneNumber" type="text" id="phoneNumber" key="phoneNumber" />
				<Select label="方向" name="toward" id="toward" key="toward" arr={towards}/>
				<Button href="notice" className="button next-step-button" submit={true} url={"http://jcuan.org/user/registerTwo"} className={style.button} linkStyle={style.link}>立即注册</Button>
			</form>
		</div>
	)
}

export default CSSModules(StepTwo, style);


