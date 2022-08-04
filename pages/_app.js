import "../styles/globals.css";
import { StateProvider } from "../StateProvider";
import { initialState, reducer } from "../reducer";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
    </>
  );
}

export default MyApp;
