
import React from 'react';
import { color } from '@storybook/addon-knobs';
import QaEngineers from '../src/QaEngineers';

export default {
  title: 'QaEngineers',
  component: QaEngineers,
};

export const Primary = () => <QaEngineers color="primary" />;
export const Secondary = () => <QaEngineers color="secondary" />;
export const Color = () => <QaEngineers color={color('color', '#00FF00')} />;
    