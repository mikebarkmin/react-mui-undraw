
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SourceCode from '../src/SourceCode';

export default {
  title: 'SourceCode',
  component: SourceCode,
};

export const Primary = () => <SourceCode color="primary" />;
export const Secondary = () => <SourceCode color="secondary" />;
export const Color = () => <SourceCode color={color('color', '#00FF00')} />;
    