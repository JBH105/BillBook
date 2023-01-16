import { useRouter } from "next/router";
import Layout from "../components/HandleLayout/index";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../Redux/store";
import Toast from "../components/Toast/Index";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return router.pathname == "/" ||
    router.pathname == "/brand/signup" ||
    router.pathname == "/brand/login" ||
    router.pathname == "/brand/forgotpassword" ||
    router.pathname == "/brand/verification" ||
    router.pathname == "/brand/resetpassword" ||
    router.pathname == "/brand/onboarding/personaldetail" ||
    router.pathname == "/brand/onboarding/companyinformation" ||
    router.pathname == "/brand/onboarding/connections" ? (
    <Provider store={store}>
      <PersistGate loading={<h1>hello</h1>} persistor={persistor}>
        <Toast >
          <Component {...pageProps} />
        </Toast>
      </PersistGate>
    </Provider>
  ) : (
    <Provider store={store}>
      <PersistGate loading={<h1>hello</h1>} persistor={persistor}>
        <Toast >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Toast>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
