import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        fontSize : {
            h1:string,
            h2:string,
            h3:string,
            h4:string,
            h5:string,
            h6:string
        },
        colors :{
            light:{
                background:string,
                backgroundSecondary:string,
                header:string,
                textNormal:string,
                textTitle:string,
                textLink:string
            }
            dark:{
                background:string,
                backgroundSecondary:string,
                header:string,
                textNormal:string,
                textTitle:string,
                textLink:string
            }
        }
    }
}
