import {StyleSheet, Dimensions} from 'react-native';

export const authStyle = StyleSheet.create({
  maincontainer: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  logoText: {
      color: 'black',
      fontSize: 55,
      fontWeight: 'bold',
      fontFamily: "notoserif"
  },
  logoDesc: {
      color: 'black',
      fontSize: 25,
      fontStyle: "italic",
      fontFamily: "Roboto"
  }
});

export const timelinePage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfd8dc'
  },
});
