import { Dimensions, } from 'react-native'
const { width, height } = Dimensions.get("window");

export default {
  container: {   
    padding: 20, 
    flex:1
  },
  logo: {
    width: 70,
    height: 70
  },
  welcome_text: {
    fontFamily: 'NanumGothic-ExtraBold',
    color: 'white',
    fontSize: 40, 
  },
  sub_text: {
    fontFamily: 'NanumGothic-Bold',
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    marginTop:10,
  },
  input_form: {
    height: 180,
    paddingHorizontal: 50,
    justifyContent:'center',
    alignContent: 'center',
    marginBottom: 20,
    paddingBottom: 10,
  }, 
  input_view:{
    borderBottomColor: '#4A90E2',
    borderBottomWidth: 1,
  },
  input:{
    fontFamily: 'NanumGothic-Bold',
    color:'#4A90E2'
  }
}
