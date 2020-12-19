import {StyleSheet, Dimensions} from 'react-native';

const color1 = "#1976d2"; // blue
const color2 = "#004ba0"; // dark blue
const color3 = "#63a4ff"; // light blue

export const input = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    margin: 10,
    marginHorizontal:20,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 1
  },
  textInput: {    
    fontSize: 15,
  },
});

export const button = StyleSheet.create({
  container: {
    backgroundColor: color1,
    margin: 10,
    marginHorizontal:20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export const button_outline = StyleSheet.create({
  container: {
    margin: 10,
    marginHorizontal:20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: color1,
    fontWeight: 'bold',    
    fontSize: 17,
  },
});

export const postitem = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 5,
    backgroundColor: color2,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
  },
  bodyContainer: {
     padding: 5
  },
  time: {
    color: 'white',
    fontStyle: 'italic'
  }
});

export const post_input = StyleSheet.create({
   container: {
      width: Dimensions.get('window').width * 0.9,
      alignSelf: 'center',
      bottom: 10,
      position: 'absolute',
      backgroundColor: '#e0e0e0',
      borderRadius: 5,
      padding: 5,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: "#b0bec5"
   },  
   inputContainer: {
      flex: 1,
   },
   button: {

   }
});

export const header = StyleSheet.create({
   container: {
      flexDirection: 'row',
      padding: 5,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#90a4ae',
      backgroundColor: "white"
   },  
   textContainer: {
      flex: 1
   },  
   text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#78909c'
   },  
});

export const topicModal = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
    paddingHorizontal: 10
  },  
  container: {
    paddingTop: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  topicItemContainer: {
     padding: 10,
  },  
  topicItemText: {
     fontSize: 20,
     fontWeight: 'bold',
     color: '#78909c'
  },  
});
