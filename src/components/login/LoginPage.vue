<template>
  <div class="loginLeft_main">
    <div class="leftImage"></div>
  </div>
  <div
    class="loginRight_main"
    @mouseleave="rightTop_rightLanguageLeave_method()"
  >
    <!-- 头部 -->
    <div class="rightTop">
      <!-- 头部左区(含logo和"小米帐号"标题(ps:原网页就是错字)) -->
      <div class="rightTop_left">
        <img
          class="rightTop_leftLogo"
          src="../../assets/img/loginImg/loginLogo.png"
        />
        <div class="rightTop_leftTitle">小米帐号</div>
      </div>
      <!-- 头部右区(三个链接和语言选择) -->
      <div class="rightTop_right">
        <div
          class="rightTop_rightUrl" 
          v-for="(item, index) in rightTop_rightUrl_data" :key="index"
        >
          {{ item }}
        </div>
        <div class="rightTop_rightSpace"></div>
        <div
          class="rightTop_rightLanguage"
          @mouseenter="rightTop_rightLanguageEnter_method()"
          :style="rightTop_rightLanguageActive ? 'display:none' : ''"
        >
          中文(简体)&nbsp;&nbsp;▼
        </div>
        <div
          class="rightTop_rightLanguage"
          @mouseenter="rightTop_rightLanguageEnter_method()"
          :style="rightTop_rightLanguageActive ? '' : 'display:none'"
        >
          中文(简体)&nbsp;&nbsp;▲
        </div>
        <div class="rightTop_rightLanguageSelect">
          <ul
            class="rightTop_rightLanguageSelectUl"
            :style="rightTop_rightLanguageActive ? '' : 'display:none'"
          >
            <li class="rightTop_rightLanguageSelectLi">中文(繁體)</li>
            <li class="rightTop_rightLanguageSelectLi">English</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 中部登陆区(外框设定) -->
    <div class="rightMiddle">
      <!-- 登陆主体框(内框设定)-登陆 -->
      <div class="rightMiddleInside">
        <!-- 登录注册部分 -->
        <div
          :class="
            rightMiddleInside_mainLORActive == 'login'
              ? 'rightMiddleInside_main'
              : 'rightMiddleInside_mainR'
          "
        >
          <!-- 二维码 -->
          <img
            class="rightMiddleInside_mainQRcode"
            :src="
              rightMiddleInside_mainQRcode_data[
                rightMiddleInside_mainQRcodeEnterActive_id
              ]
            "
            @mouseenter="rightMiddleInside_mainQRcodeEnter_method()"
            @mouseleave="rightMiddleInside_mainQRcodeLeave_method()"
          />
          <img
            class="rightMiddleInside_mainQRcodeTip"
            :src="rightMiddleInside_mainQRcode_data[2]"
            :style="
              rightMiddleInside_mainQRcodeEnterActive_id == 1
                ? ''
                : 'display:none'
            "
          />
          <!-- 登陆/注册切换 -->
          <div class="rightMiddleInside_mainLOR">
            <div
              class="rightMiddleInside_mainLORLogin"
              @click="rightMiddleInside_mainLOR_method('login')"
              :class="
                rightMiddleInside_mainLORActive == 'login'
                  ? ''
                  : 'rightMiddleInside_mainLORNotActive'
              "
            >
              登陆
            </div>
            <div
              class="rightMiddleInside_mainLORRegister"
              @click="rightMiddleInside_mainLOR_method('register')"
              :class="
                rightMiddleInside_mainLORActive == 'register'
                  ? ''
                  : 'rightMiddleInside_mainLORNotActive'
              "
            >
              注册
            </div>
            <!-- 下划线 -->
            <div
              :class="
                rightMiddleInside_mainLORActive == 'login'
                  ? 'rightMiddleInside_mainLORUnderline'
                  : 'rightMiddleInside_mainLORUnderlineNotActive'
              "
            ></div>
            <div
              :class="
                rightMiddleInside_mainLORActive == 'register'
                  ? 'rightMiddleInside_mainLORUnderline'
                  : 'rightMiddleInside_mainLORUnderlineNotActive'
              "
            ></div>
          </div>
          <!-- 登陆(用户名/密码)输入框 -->
          <div
            class="rightMiddleInside_mainLogin"
            :style="
              rightMiddleInside_mainLORActive == 'login' ? '' : 'display: none'
            "
          >
            <input
              type="text"
              :class="
                rightMiddleInside_mainInputNameActive == true
                  ? 'rightMiddleInside_mainLoginNameActive'
                  : 'rightMiddleInside_mainLoginName'
              "
              v-model="name"
              @keyup="decideLoginAndRegister_method()"
              @focus="rightMiddleInside_mainInput_method(1)"
              @blur="rightMiddleInside_mainInput_method(5)"
            />
            <div
              :class="
                rightMiddleInside_mainInputNameActive == true
                  ? 'rightMiddleInside_mainLoginNameTipActive'
                  : 'rightMiddleInside_mainLoginNameTip'
              "
            >
              邮箱/手机号码/小米ID
            </div>
            <input
              type="password"
              :class="
                rightMiddleInside_mainInputPasswordActive == true
                  ? 'rightMiddleInside_mainLoginPasswordActive'
                  : 'rightMiddleInside_mainLoginPassword'
              "
              v-model="password"
              @keyup="decideLoginAndRegister_method()"
              @focus="rightMiddleInside_mainInput_method(2)"
              @blur="rightMiddleInside_mainInput_method(6)"
            />
            <div
              :class="
                rightMiddleInside_mainInputPasswordActive == true
                  ? 'rightMiddleInside_mainLoginPasswordTipActive'
                  : 'rightMiddleInside_mainLoginPasswordTip'
              "
            >
              密码
            </div>
            <img
              class="rightMiddleInside_mainLoginEye"
              src="../../assets/img/loginImg/loginEye.png"
            />
          </div>
          <!-- 注册(地区/手机号/验证码)输入框 -->
          <div
            class="rightMiddleInside_mainRegister"
            :style="
              rightMiddleInside_mainLORActive == 'register'
                ? ''
                : 'display: none'
            "
          >
            <select
              class="rightMiddleInside_mainRegisterArea"
              placeholder="邮箱/手机号码/小米ID"
            >
              <option>中国</option>
              <option>中国,澳门</option>
              <option>中国,台湾</option>
              <option>中国,香港</option>
            </select>
            <input
              type="text"
              :class="
                rightMiddleInside_mainInputPhoneActive == true
                  ? 'rightMiddleInside_mainRegisterPhoneActive'
                  : 'rightMiddleInside_mainRegisterPhone'
              "
              v-model="phone"
              @keyup="decidePhoneAndCode_method()"
              @focus="rightMiddleInside_mainInput_method(3)"
              @blur="rightMiddleInside_mainInput_method(7)"
            />
            <div
              :class="
                rightMiddleInside_mainInputPhoneActive == true
                  ? 'rightMiddleInside_mainRegisterPhoneTipActive'
                  : 'rightMiddleInside_mainRegisterPhoneTip'
              "
            >
              手机号
            </div>
            <input
              type="text"
              :class="
                rightMiddleInside_mainInputCodeActive == true
                  ? 'rightMiddleInside_mainRegisterCodeActive'
                  : 'rightMiddleInside_mainRegisterCode'
              "
              v-model="code"
              @keyup="decidePhoneAndCode_method()"
              @focus="rightMiddleInside_mainInput_method(4)"
              @blur="rightMiddleInside_mainInput_method(8)"
            />
            <div
              :class="
                rightMiddleInside_mainInputCodeActive == true
                  ? 'rightMiddleInside_mainRegisterCodeTipActive'
                  : 'rightMiddleInside_mainRegisterCodeTip'
              "
            >
              验证码
            </div>
          </div>
          <!-- 阅读并同意用户协议 -->
          <div
            :class="
              rightMiddleInside_mainLORActive == 'login'
                ? 'rightMiddleInside_mainAgreement'
                : 'rightMiddleInside_mainAgreementR'
            "
          >
            <input
              type="checkbox"
              class="rightMiddleInside_mainAgreementCheckbox"
              value="success"
              v-model="checkbox"
              @change="
                decideLoginAndRegister_method(), decidePhoneAndCode_method()
              "
            />
            <span class="rightMiddleInside_mainAgreementWord">
              已阅读并同意小米帐号
              <b class="rightMiddleInside_mainAgreementWordAgreement">
                用户协议
              </b>
              和
              <b class="rightMiddleInside_mainAgreementWordAgreement">
                隐私政策
              </b>
            </span>
          </div>
          <!-- 登录/注册按钮 -->
          <button @click="checkdata"
            class="rightMiddleInside_mainButton"
            :style="
              rightMiddleInside_mainLORActive == 'login' ? '' : 'display:none'
            "
            :id="
              rightMiddleInside_mainButtonActive
                ? 'rightMiddleInside_mainButtonIsActive'
                : ''
            "
          >
            登陆
          </button>
          <button @click="adddata"
            class="rightMiddleInside_mainButtonR"
            :style="
              rightMiddleInside_mainLORActive == 'register'
                ? ''
                : 'display:none'
            "
            :id="
              rightMiddleInside_mainButtonActiveR
                ? 'rightMiddleInside_mainButtonIsActiveR'
                : ''
            "
          >
            注册
          </button>
          <!-- (登陆)忘记密码/手机号登录/(注册)收不到验证码 -->
          <!-- (登陆)忘记密码/手机号登录/(注册)收不到验证码 -->
          <!-- (登陆)忘记密码/手机号登录/(注册)收不到验证码 -->
          <!-- (登陆)忘记密码/手机号登录/(注册)收不到验证码 -->
          <!-- (登陆)忘记密码/手机号登录/(注册)收不到验证码 -->
          <!-- (登陆)忘记密码/手机号登录/(注册)收不到验证码 -->
          <!-- (登陆)忘记密码/手机号登录/(注册)收不到验证码 --><!-- (登陆)忘记密码/手机号登录/(注册)收不到验证码 -->

          <div class="rightMiddleInside_mainOther">
            <div
              class="rightMiddleInside_mainOtherForget"
              :style="
                rightMiddleInside_mainLORActive == 'login' ? '' : 'display:none'
              "
            >
              忘记密码？
            </div>
            <div
              class="rightMiddleInside_mainOtherPhone"
              :style="
                rightMiddleInside_mainLORActive == 'login' ? '' : 'display:none'
              "
            >
              手机号登录
            </div>
            <div
              class="rightMiddleInside_mainOtherNot"
              :style="
                rightMiddleInside_mainLORActive == 'register'
                  ? ''
                  : 'display:none'
              "
            >
              收不到验证码？
            </div>
          </div>
          <!-- 其他方式登录 -->
          <div
            :class="
              rightMiddleInside_mainLORActive == 'login'
                ? 'rightMiddleInside_mainMore'
                : 'rightMiddleInside_mainMoreR'
            "
          >
            <div class="rightMiddleInside_mainMoreTitle">其他方式登录</div>
            <div class="rightMiddleInside_mainMoreImage">
              <img
                class="rightMiddleInside_mainMoreImageContent"
                v-for="i in 4" :key="i"
                :src="rightMiddleInside_mainMoreImage_data[i - 1]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rightBottom">
      小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const state = reactive({
      // 常量
      // 变量
      name: "",
      password: "",
      phone: "",
      code: "",
      checkbox: [],
      rightTop_rightLanguageActive: false,
      rightMiddleInside_mainQRcodeEnterActive_id: 0,
      rightMiddleInside_mainLORActive: "login",
      rightMiddleInside_mainButtonActive: false,
      rightMiddleInside_mainButtonActiveR: false,
      rightMiddleInside_mainInputNameActive: false,
      rightMiddleInside_mainInputPasswordActive: false,
      rightMiddleInside_mainInputPhoneActive: false,
      rightMiddleInside_mainInputCodeActive: false,
      // 组量
      rightTop_rightUrl_data: ["用户协议", "隐私政策", "帮助中心"],
      rightMiddleInside_mainQRcode_data: [
        require("@/assets/img/loginImg/loginQRcodeBefore.png"),
        require("@/assets/img/loginImg/loginQRcodeAfter.png"),
        require("@/assets/img/loginImg/loginQRcodeTip.png"),
      ],
      rightMiddleInside_mainMoreImage_data: [
        require("@/assets/img/loginImg/login1zfb.png"),
        require("@/assets/img/loginImg/login2wx.png"),
        require("@/assets/img/loginImg/login3qq.png"),
        require("@/assets/img/loginImg/login4wb.png"),
      ],
    });
    /////////////////////////////////////////////////////////////////////
     /////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////
 /////////////////////////////////////////////////////////////////////
       /////////////////////////////////////////////////////////////////////  
       const store = useStore()
       const router = useRouter()
    onMounted(()=>{
      setInterval(()=>{
        console.log('$$name$$'+state.name+'$$password$$'+state.password+
        '$$checkbox$$'+state.checkbox+'$$phone$$'+state.phone+'$$code$$'+state.code);
         
      },4000)
      
    })
  
    const checkdata =()=>{
        let isto=store.commit('checkUser',state.name,state.password);
        console.log(store.getters.token);
        console.log('判断的结果是这样子的'+isto);
        console.log(isto == true);
        if(store.getters.token){
           router.push('/home');
        }
       
    }
    const adddata =()=>{
        store.commit('addUser',state.phone,state.code);
        console.log('数据进行了提交');
    }
    const rightTop_rightLanguageEnter_method = () => {
      state.rightTop_rightLanguageActive = true;
    };
    const rightTop_rightLanguageLeave_method = () => {
      state.rightTop_rightLanguageActive = false;
    };
    const rightMiddleInside_mainQRcodeEnter_method = () => {
      state.rightMiddleInside_mainQRcodeEnterActive_id = 1;
    };
    const rightMiddleInside_mainQRcodeLeave_method = () => {
      state.rightMiddleInside_mainQRcodeEnterActive_id = 0;
    };
    const rightMiddleInside_mainLOR_method = (index) => {
      state.rightMiddleInside_mainLORActive = index;
    };
    const decideLoginAndRegister_method = () => {
      if (state.name > 0 && state.password > 0 && state.checkbox.length > 0) {
        state.rightMiddleInside_mainButtonActive = true;
      } else {
        state.rightMiddleInside_mainButtonActive = false;
      }
    };
    const decidePhoneAndCode_method = () => {
      if (state.phone > 0 && state.code > 0 && state.checkbox.length > 0) {
        state.rightMiddleInside_mainButtonActiveR = true;
      } else {
        state.rightMiddleInside_mainButtonActiveR = false;
      }
    };
    const rightMiddleInside_mainInput_method = (index) => {
      if (index == 1) {
        state.rightMiddleInside_mainInputNameActive = true;
      }
      if (index == 2) {
        state.rightMiddleInside_mainInputPasswordActive = true;
      }
      if (index == 3) {
        state.rightMiddleInside_mainInputPhoneActive = true;
      }
      if (index == 4) {
        state.rightMiddleInside_mainInputCodeActive = true;
      }
      if (index == 5) {
        if (state.name == 0) {
          state.rightMiddleInside_mainInputNameActive = false;
        }
      }
      if (index == 6) {
        if (state.password == 0) {
          state.rightMiddleInside_mainInputPasswordActive = false;
        }
      }
      if (index == 7) {
        if (state.phone == 0) {
          state.rightMiddleInside_mainInputPhoneActive = false;
        }
      }
      if (index == 8) {
        if (state.code == 0) {
          state.rightMiddleInside_mainInputCodeActive = false;
        }
      }
    };
    return {
      ...toRefs(state),
      rightTop_rightLanguageEnter_method,
      rightTop_rightLanguageLeave_method,
      rightMiddleInside_mainQRcodeEnter_method,
      rightMiddleInside_mainQRcodeLeave_method,
      rightMiddleInside_mainLOR_method,
      decideLoginAndRegister_method,
      decidePhoneAndCode_method,
      rightMiddleInside_mainInput_method,
      checkdata,
      adddata
    };
  },
  mounted() {},
};
</script>

<style  scoped>
.loginLeft_main {
  position: absolute;
  width: 375px;
  height: 100%;
  display: flex;
}
.leftImage {
  width: 375px;
  background-image: url("../../assets/img/loginImg/loginLeftImage.jpg");
  background-size: cover;
  background-position: 50%;
}
.loginRight_main {
  width: 100%;
  height: 100%;
  margin-left: 375px;
  display: flex;
}
.rightTop_left {
  float: left;
  padding: 20px;
  font-size: 26px;
  color: #333;
}
.rightTop_leftLogo {
  float: left;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.rightTop_leftTitle {
  float: left;
  font-weight: 500;
}
.rightTop_right {
  position: absolute;
  right: 0px;
  padding: 20px;
}
.rightTop_rightUrl {
  float: left;
  margin-left: 10px;
  margin-right: 10px;
  color: #838383;
  line-height: 40px;
  cursor: pointer;
  transition: color 0.3s;
}
.rightTop_rightUrl:hover {
  color: #ff6900;
}
.rightTop_rightSpace {
  margin-left: 10px;
  margin-right: 10px;
  border-right: 1px solid #ddd;
  vertical-align: middle;
  display: inline-block;
  height: 14px;
}
.rightTop_rightLanguage {
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
  color: #838383;
  cursor: pointer;
  line-height: 40px;
}
.rightTop_rightLanguage:hover {
  color: #ff6900;
}
.rightTop_rightLanguageSelect {
  position: absolute;
  right: 0;
  margin-right: 25px;
  width: 95px;
}
.rightTop_rightLanguageSelectUl {
  padding: 0;
  box-shadow: 0 5px 29px 0 hsl(0deg 0% 64% / 20%);
  list-style-type: none;
}
.rightTop_rightLanguageSelectLi {
  text-align: center;
  padding: 9px 14px;
  line-height: 22px;
  cursor: pointer;
  transition: all 0.3s;
}
.rightTop_rightLanguageSelectLi:hover {
  background-color: #f5f5f5;
}
.rightMiddle {
  position: absolute;
  width: 100%;
  margin-top: 0;
  text-align: center;
}
.rightMiddleInside {
  position: absolute;
  margin-left: -27%;
  top: 100px;
  text-align: left;
  border-radius: 4px;
  padding: 40px 45px;
  box-shadow: 0 20px 50px 0 hsl(0deg 0% 64% / 10%);
  display: inline-block;
}
.rightMiddleInside_main {
  width: 360px;
  height: 490px;
}
.rightMiddleInside_mainQRcode {
  position: absolute;
  width: 64px;
  height: 64px;
  margin-left: 340px;
  margin-top: -40px;
  cursor: pointer;
}
.rightMiddleInside_mainQRcodeTip {
  position: absolute;
  margin-left: 250px;
  margin-top: -33px;
  width: 90px;
}
.rightMiddleInside_mainLOR {
  cursor: pointer;
  transition: color 0.3s;
  font-size: 22px;
  text-shadow: 0 0 0.25px currentColor;
  width: 128px;
}
.rightMiddleInside_mainLORLogin {
  float: left;
  margin: 0 20px 0 0;
  line-height: 41px;
}
.rightMiddleInside_mainLORRegister {
  float: left;
  margin: 0 20px 0 0;
  line-height: 41px;
}
.rightMiddleInside_mainLORNotActive {
  color: #bbb;
}
.rightMiddleInside_mainLORUnderline {
  float: left;
  left: 0px;
  height: 4px;
  width: 44px;
  border-radius: 2px;
  background: #ff5c00;
  margin-right: 20px;
}
.rightMiddleInside_mainLORUnderlineNotActive {
  float: left;
  height: 4px;
  width: 44px;
  background: white;
  margin-right: 20px;
}
.rightMiddleInside_mainLogin {
  position: absolute;
  width: 360px;
  height: 100%;
  margin-top: 75px;
}
.rightMiddleInside_mainLoginName,
.rightMiddleInside_mainLoginPassword {
  width: 335px;
  height: 60px;
  font-size: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border: 0;
  outline-color: #ff9500;
  padding-left: 20px;
  transition: all 0.3s;
  border-radius: 5px;
}
.rightMiddleInside_mainLoginNameActive,
.rightMiddleInside_mainLoginPasswordActive {
  width: 317px;
  height: 22px;
  font-size: 20px;
  margin-bottom: 20px;
  padding: 30px 20px 10px;
  background-color: #f9f9f9;
  border: 0;
  outline-color: #ff9500;
  padding-left: 20px;
  transition: all 0.3s;
  border-radius: 5px;
}
.rightMiddleInside_mainLoginEye {
  position: absolute;
  float: left;
  right: 0px;
  top: 90px;
  width: 20px;
  padding: 20px;
  opacity: 0.6;
  transition: all 0.3s;
  cursor: pointer;
}
.rightMiddleInside_mainLoginEye:hover {
  opacity: 1;
}
.rightMiddleInside_mainAgreement {
  position: absolute;
  margin-top: 240px;
  margin-left: 5px;
}
.rightMiddleInside_mainAgreementCheckbox {
  width: 20px;
  height: 20px;
  border-top: 10px;
}
.rightMiddleInside_mainAgreementCheckbox:checked {
   background-color: red;
}
.rightMiddleInside_mainAgreementWord {
  position: absolute;
  font-size: 14px;
  opacity: 0.6;
  width: 300px;
  margin-left: 7px;
  margin-top: 2px;
}
.rightMiddleInside_mainAgreementWordAgreement {
  color: #333333;
  opacity: 1;
}
.rightMiddleInside_mainButton {
  position: absolute;
  margin-top: 285px;
  margin-left: -129px;
  width: 360px;
  height: 60px;
  background-color: #ff5c00;
  border-radius: 4px;
  border: none;
  opacity: 0.4;
  font-size: 18px;
  color: #fff;
}
.rightMiddleInside_mainOther {
  position: absolute;
  margin-top: 355px;
  width: 360px;
  font-size: 17px;
  color: #ff5c00;
}
.rightMiddleInside_mainOtherForget {
  float: left;
  cursor: pointer;
}
.rightMiddleInside_mainOtherPhone {
  float: right;
  cursor: pointer;
}
.rightMiddleInside_mainMore {
  position: absolute;
  margin-top: 395px;
  width: 360px;
}
.rightMiddleInside_mainMoreTitle {
  text-align: center;
  font-size: 17px;
  color: #aaa;
  line-height: 40px;
}
.rightMiddleInside_mainMoreImage {
  text-align: center;
  margin-top: 10px;
}
.rightMiddleInside_mainMoreImageContent {
  width: 46px;
  margin: 0 12px;
  cursor: pointer;
}
.rightBottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  margin-left: 375px;
  padding: 0 20px;
  text-align: center;
  color: #999;
  font-size: 12px;
}
.rightMiddleInside_mainR {
  width: 360px;
  height: 560px;
}
.rightMiddleInside_mainRegister {
  position: absolute;
  width: 360px;
  height: 100%;
  margin-top: 75px;
}
.rightMiddleInside_mainRegisterArea,
.rightMiddleInside_mainRegisterPhone,
.rightMiddleInside_mainRegisterCode {
  width: 335px;
  height: 60px;
  font-size: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border: 0;
  outline-color: #ff9500;
  padding-left: 20px;
  transition: all 0.3s;
  border-radius: 5px;
}
.rightMiddleInside_mainRegisterArea {
  width: 357px;
  color: #333333;
}
.rightMiddleInside_mainRegisterPhoneActive,
.rightMiddleInside_mainRegisterCodeActive {
  width: 317px;
  height: 22px;
  padding: 30px 20px 10px;
  background-color: #f9f9f9;
  font-size: 20px;
  margin-bottom: 20px;
  border: 0;
  outline-color: #ff9500;
  transition: all 0.3s;
  border-radius: 5px;
}
.rightMiddleInside_mainAgreementR {
  position: absolute;
  margin-top: 320px;
  margin-left: 5px;
}
.rightMiddleInside_mainButtonR {
  position: absolute;
  margin-top: 365px;
  margin-left: -129px;
  width: 360px;
  height: 60px;
  background-color: #ff5c00;
  border-radius: 4px;
  border: none;
  opacity: 0.4;
  font-size: 18px;
  color: #fff;
}
.rightMiddleInside_mainOtherNot {
  position: absolute;
  top: 80px;
  width: 120px;
  cursor: pointer;
}
.rightMiddleInside_mainMoreR {
  position: absolute;
  margin-top: 475px;
  width: 360px;
}
#rightMiddleInside_mainButtonIsActive,
#rightMiddleInside_mainButtonIsActiveR {
  opacity: 1;
  cursor: pointer;
}
.rightMiddleInside_mainLoginNameTip,
.rightMiddleInside_mainLoginPasswordTip,
.rightMiddleInside_mainRegisterPhoneTip,
.rightMiddleInside_mainRegisterCodeTip {
  position: absolute;
  margin-top: -62px;
  margin-left: 20px;
  color: #cfcfcf;
  font-size: 17px;
  pointer-events: none;
  transition: all 0.15s;
}
.rightMiddleInside_mainLoginNameTipActive,
.rightMiddleInside_mainLoginPasswordTipActive,
.rightMiddleInside_mainRegisterPhoneTipActive,
.rightMiddleInside_mainRegisterCodeTipActive {
  position: absolute;
  margin-top: -70px;
  margin-left: 20px;
  color: #cfcfcf;
  font-size: 12px;
  pointer-events: none;
  transition: all 0.15s;
}
</style>