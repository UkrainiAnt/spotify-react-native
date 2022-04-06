import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/providers";
import StackNavigation from "./StackNavigation";
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "store/store";
import { Provider } from "react-redux";
import { LogBox, View, StyleSheet } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";

LogBox.ignoreAllLogs();

console.warn = function warn() {};
const client = new QueryClient();

export default function App() {
  return (
    <View style={styles.wrapper}>
      <Provider store={store}>
        <ToastProvider>
          <NavigationContainer>
            <QueryClientProvider client={client}>
              <AuthProvider>
                <StackNavigation />
              </AuthProvider>
            </QueryClientProvider>
          </NavigationContainer>
        </ToastProvider>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
