
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PreferencesPopup from '../src/PreferencesPopup';

export default {
  title: 'PreferencesPopup',
  component: PreferencesPopup,
};

export const Primary = () => <PreferencesPopup color="primary" />;
export const Secondary = () => <PreferencesPopup color="secondary" />;
export const Color = () => <PreferencesPopup color={color('color', '#00FF00')} />;
    