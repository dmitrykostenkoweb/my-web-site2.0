import {reactive} from "vue";
import {ThemeMods, ThemeState, UseTheme} from "@/composables/useTheme/useTheme.model";

const state: ThemeState = reactive({
    currentMode: ThemeMods.dark
})

export default function useTheme(): UseTheme {
    const getThemeMode = (): ThemeMods => state.currentMode

    const changeThemeMod = (): void => {
        if (state.currentMode === ThemeMods.dark) {
            state.currentMode = ThemeMods.light
        } else {
            state.currentMode = ThemeMods.dark
        }
    }
    return {
        changeThemeMod,
        getThemeMode

    }
}