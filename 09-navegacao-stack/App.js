import  { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './src/routes/StackRoutes';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>

{/* Stack */}

<StackRoutes></StackRoutes>

      </NavigationContainer>
    </PaperProvider>
   
  );
}

