import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import { Login, Sign, Timeline, Splash } from './pages';

const Stack = createStackNavigator();

function Router() {
  const [session, setSession] = React.useState(false);

  React.useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setSession(user)
    })
  }, [])


  const AppRoute = () => {
    return(
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      {session ?
        (<Stack.Screen name="Timeline" component={Timeline} />)
        :
        (<>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign" component={Sign} />
        </>)
      }
      </Stack.Navigator>
    )
  }



  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="AppRoute" component={AppRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
