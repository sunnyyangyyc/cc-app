import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  styles: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    global: (props: any) => ({
      "html, body": {
        bg: props.colorMode === "dark" ? "gray.800" : "orange.50",
      },
    }),
  },
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  background:{
    primary : "#2C3333"
  },
  fontcolor:{
    primary : "#C8C5C5",
    secondary :"rgba(200, 197, 197, 0.4)"
  }
};


const theme = extendTheme({styles, config, colors});

export default theme;
