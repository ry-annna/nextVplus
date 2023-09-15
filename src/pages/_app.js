import "@/styles/globals.css";
import AppShell from "@/components/layouts/AppShell";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </ChakraProvider>
  );
}
