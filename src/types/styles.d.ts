import 'react-native';
import { Theme } from '../styles/theme';

declare module 'react-native' {
  interface ViewStyle {
    elevation?: number;
  }
  interface TextStyle {
    fontFamily?: string;
  }
  interface TextProps {
    style?: TextStyle | TextStyle[];
  }
  interface ViewProps {
    style?: ViewStyle | ViewStyle[];
  }
}

declare global {
  namespace React {
    interface Attributes {
      theme?: Theme;
    }
  }
}