export interface ThemeState {
    currentMode: ThemeMods
}

export interface UseTheme {
    changeThemeMod: () => void
    getThemeMode: () => ThemeMods
}

export enum ThemeMods {
    dark = 'DARK',
    light = 'LIGHT'
}