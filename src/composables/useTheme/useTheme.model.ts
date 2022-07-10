export interface ThemeState {
    currentMode: Theme
}

export interface UseTheme {
    changeTheme: () => void
}

export enum Theme {
    dark = 'DARK',
    light = 'LIGHT'
}