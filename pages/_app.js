import { useRouter } from "next/router";
import Layout from "../components/HandleLayout/index";
import "../styles/globals.css";
import AuthProvider from "../Context/AuthProvider";

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
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  ) : (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
