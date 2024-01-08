import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { configureStore } from "@reduxjs/toolkit";

import Routing from "./routes";
import productReducer from "./store/productStore";
// import cartReducer from "./store/cartStore";
import { Provider } from "react-redux";

// import {store} from './store/store';

const App = () => {
  const queryClient = new QueryClient();

  const store = configureStore({
    reducer: {
      Store: productReducer,
      // products: productReducer,
      // carts: cartReducer,
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Routing />
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
