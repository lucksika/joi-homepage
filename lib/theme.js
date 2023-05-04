// 1. import `extendTheme` function
import { Center, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
        body: {
            bg: mode("#FFFFFF", "#141414")(props),
            color: mode("#141414", "#FFFFFF")(props)
        }
    })
}

const components = {
    Heading: {
        baseStyle: props => ({
            color: mode('#0F52BA', '#EEC643')(props)
        }),
        variants: {
            "title": props => ({
                color: mode("#0F52BA", "#EEC643")(props),
                textDecoration: 'underline',
                textDecorationColor: mode("#0F52BA", "#EEC643")(props),
                textDecorationThickness: 2,
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 5
            })
        }
    },
    Button: {
        variants: {
            "outline": props => ({
                borderColor: mode("#0F52BA", "#EEC643")(props),
                color: mode("#0F52BA", "#EEC643")(props),
                _hover: {
                    bg: mode("#0F52BA27", "#eec64345")(props)
                }
            }),
            "solid": props => ({
                color: "#ffffff",
                bg: mode("#0F52BA", "#D1AE3B")(props),
                _hover: {
                    bg: mode("#081461", "#917929")(props)
                }
            }),
            "link": props => ({
                color: mode("#141414", "#EEF0F2")(props),
                _hover: {
                    textDecoration: 'underline',
                    textDecorationColor: mode("#0F52BA", "#EEC643")(props),
                    textDecorationThickness: 3
                }
            })
        }
    },
    Box: {
        variants: {
            "header": props => ({
                bg: mode(rgb(238, 240, 242, 0.5), rgb(20, 20, 20, 0.5))(props)
            })
        }
    }
}

const colors = {

}

const fonts = {
    heading: `'Quicksand', san-serif`,
    body: `'Lato', san-serif`
}

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config, styles, components, colors, fonts })

export default theme;