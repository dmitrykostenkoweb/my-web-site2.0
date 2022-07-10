import {Theme, ThemeState, UseTheme} from "@src/composables/useTheme/useTheme.model";
import {reactive} from "vue";


const state: ThemeState = reactive({
    currentMode: Theme.dark
})


export default function useTheme(): UseTheme {
    const changeTheme = (): void => {
        if (state.currentMode === Theme.dark) {
            state.currentMode = Theme.light
        } else {
            state.currentMode = Theme.dark
        }

    }
    return {
        changeTheme,
    }
}