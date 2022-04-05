import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/components/layout/toasts";
import { AuthProvider } from "./src/providers";
import StackNavigation from "./StackNavigation";
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "store/store";
import { Provider } from "react-redux";
import { LogBox, View, StyleSheet } from "react-native";
import { colors } from "variables";

LogBox.ignoreAllLogs();

console.warn = function warn() {};
const client = new QueryClient();

export default function App() {
  return (
    <View style={styles.wrapper}>
      <Provider store={store}>
        <NavigationContainer>
          <QueryClientProvider client={client}>
            <AuthProvider>
              <StackNavigation />
            </AuthProvider>
          </QueryClientProvider>
        </NavigationContainer>
      </Provider>

      <Toast config={toastConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});
