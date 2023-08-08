import {FunctionComponent} from 'react';
import {BottomTabStackParamList} from '../../types';
import {SvgProps} from '../../../components';

export type TabType = {
  key: number;
  label: string;
  stack: keyof BottomTabStackParamList;
  component: React.FC;
  icon: FunctionComponent<SvgProps>;
};

export type TabListType = TabType[];
