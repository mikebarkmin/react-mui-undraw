
import React from 'react';
import { color } from '@storybook/addon-knobs';
import QualityTime from '../src/QualityTime';

export default {
  title: 'QualityTime',
  component: QualityTime,
};

export const Primary = () => <QualityTime color="primary" />;
export const Secondary = () => <QualityTime color="secondary" />;
export const Color = () => <QualityTime color={color('color', '#00FF00')} />;
    