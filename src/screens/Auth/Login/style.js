import { Dimensions, } from 'react-native'
const { width, height } = Dimensions.get("window");
import { REG_FONT, BOLD_FONT, EXTRA_FONT } from '../../../assets/variables'
export default {
  container: {
    padding: 20,
    flex: 1
  },
  logo: {
    width: 70,
    height: 70
  },
  welcome_text: {
    fontFamily: EXTRA_FONT,
    color: 'white',
    fontSize: 40,
  },
  sub_text: {
    fontFamily: BOLD_FONT,
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    marginTop: 10,
  },
  input_form: {
    height: 180,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
    paddingBottom: 10,
  },
  input_view: {
    borderBottomColor: '#4A90E2',
    borderBottomWidth: 1,
  },
  input: {
    fontFamily: BOLD_FONT,
    color: '#4A90E2',
    height: 50
  },
  eye_icon: {
    color: '#D9D9D9',
    fontSize: 20,
  },
  login_btn: {
    backgroundColor: '#EF9E1A',
    height: 60,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  login_btn_txt: {
    color: 'white',
    fontSize: 20,
    fontFamily: BOLD_FONT
  },
  forgot_view: {
    flexDirection: 'row',
    paddingBottom: 30,
    marginTop: 50,
    justifyContent: 'center',
    alignContent: 'center'
  },
  forgot_text: {
    color: 'white',
    fontSize: 16,
    fontFamily: REG_FONT
  }
}
