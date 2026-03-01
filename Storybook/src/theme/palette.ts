import type { PaletteOptions } from '@mui/material';

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#6366F1',
  },
  secondary: {
    main: '#EC4899',
  },
  background: {
    default: '#F8FAFC',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#1E293B',
    secondary: '#64748B',
  },
};

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#818CF8',
  },
  secondary: {
    main: '#F472B6',
  },
  background: {
    default: '#0F172A',
    paper: '#1E293B',
  },
  text: {
    primary: '#F1F5F9',
    secondary: '#94A3B8',
  },
};

/** @deprecated Use lightPalette or darkPalette instead */
export const palette = lightPalette;
