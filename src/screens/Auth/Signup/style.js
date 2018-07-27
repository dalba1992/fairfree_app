
import { REG_FONT, BOLD_FONT, EXTRA_FONT } from '../../../assets/variables'
export default {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    color: '#3C504C',
    fontSize: 40,
    fontFamily: EXTRA_FONT,
  },
  sub_title: {
    fontFamily: BOLD_FONT,
    fontSize: 18,
    marginVertical: 10,
    color: '#92A4A0'
  },
  status_bar: {
    backgroundColor: '#D8D8D8',
    height: 10,
    marginBottom: 10,
  },
  now_status: {
    backgroundColor: '#B8E986',
    height: 10
  },
  btn_view: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  back_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 60
  },
  back_btn_txt: {
    color: '#97B5D8',
    fontFamily: BOLD_FONT
  },


  //card styles//
  card: {
    paddingHorizontal: 40,
    paddingBottom: 50,
    paddingTop: 10,
  },
  input_view: {
    borderBottomWidth: 1,
  },
  input: {
    fontFamily: BOLD_FONT,
  },
}