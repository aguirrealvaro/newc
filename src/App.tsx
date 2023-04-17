import { FunctionComponent } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { Home } from "@/containers";
import { GlobalStyles, theme } from "@/css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      retry: false,
      refetchOnMount: false,
    },
  },
});

const App: FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
