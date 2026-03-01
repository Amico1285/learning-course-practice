import { createTheme, Theme } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette';
import { typography } from './typography';
import { components } from './components';

/**
 * Creates an MUI theme configured for light or dark mode.
 * @param isDark - Whether to create a dark theme (default: false)
 * @returns Complete MUI theme
 */
export function createAppTheme(isDark: boolean = false): Theme {
  return createTheme({
    palette: isDark ? darkPalette : lightPalette,
    typography,
    components,
    shape: {
      borderRadius: 8,
    },
  });
}

/** Default light theme for backward compatibility */
export const theme = createAppTheme(false);
