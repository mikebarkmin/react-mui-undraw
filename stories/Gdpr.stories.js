
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Gdpr from '../src/Gdpr';

export default {
  title: 'Gdpr',
  component: Gdpr,
};

export const Primary = () => <Gdpr color="primary" />;
export const Secondary = () => <Gdpr color="secondary" />;
export const Color = () => <Gdpr color={color('color', '#00FF00')} />;
    