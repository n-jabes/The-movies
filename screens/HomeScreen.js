import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </View>
  );
}

export default HomeScreen;
