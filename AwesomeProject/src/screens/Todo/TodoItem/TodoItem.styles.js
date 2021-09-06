import {Stylesheet} from 'react-native';
const styles = Stylesheet.create({
  Item: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 20,
    Color: 'red',
    flexbirection: 'row',
    alignItems: 'center',
    //default display: flex, flexDirectiori: column
  },
  image: {
    width: 50,
    height: 50,
    resizeode: 'contain',
  },
});
export default styles;
