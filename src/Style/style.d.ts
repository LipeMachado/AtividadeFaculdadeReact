import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            //Body
            body_BackgroundColor: string,
            body_TextsColor: string,
        }
    }
}