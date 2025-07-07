/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { ru } from "vuetify/locale"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


// Composables
import { createVuetify } from "vuetify";
import {aliases, mdi} from "vuetify/iconsets/mdi";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
    locale: {
        locale: 'ru',
        fallback: 'en',
        messages: { ru },
    },
    theme: {
        defaultTheme: 'dark',
        options: {
            customProperties: true,
        },
        themes: {
            dark: {
                colors: {
                    primary: "#1867C0",
                    secondary: "#5CBBF6",
                    white: "rgb(209 213 219 30)"
                },
            },
        },
    },
});
