import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { useGlobals } from 'storybook/internal/preview-api';
import { createAppTheme } from '../src/theme';

/**
 * Theme provider decorator.
 * Reads the colorMode global and creates the appropriate light/dark theme.
 */
const WithTheme = (Story: React.ComponentType) => {
  const [globals] = useGlobals();
  const colorMode = (globals.colorMode as 'light' | 'dark') || 'light';

  const theme = React.useMemo(
    () => createAppTheme(colorMode === 'dark'),
    [colorMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: `${theme.palette.background.default} !important`,
          },
        }}
      />
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  globalTypes: {
    colorMode: {
      name: 'Color Mode',
      description: 'Switch between light and dark modes',
      toolbar: {
        icon: 'moon',
        items: [
          { value: 'light', title: 'Light Mode', icon: 'sun' },
          { value: 'dark', title: 'Dark Mode', icon: 'moon' },
        ],
        dynamicTitle: true,
        showName: true,
      },
    },
  },
  decorators: [WithTheme],
};

export default preview;
