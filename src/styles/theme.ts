export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    statusBar: string;
  };
  statusBar: {
    style: 'light-content' | 'dark-content' | 'default';
    backgroundColor: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primary: '#001bb4',
    secondary: '#001bb4',
    background: '#ffffff',
    text: '#000000',
    statusBar: '#ffffff',
  },
  statusBar: {
    style: 'dark-content',
    backgroundColor: '#ffffff',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#241f20',
    secondary: '#241f20',
    background: '#000000',
    text: '#ffffff',
    statusBar: '#000000',
  },
  statusBar: {
    style: 'light-content',
    backgroundColor: '#000000',
  },
};

// export const lightTheme = {
//   colors: {
//     primary: '#001bb4',
//     secondary: '#001bb4',
//     background: '#ffffff',
//     text: '#000000',
//     // ... other colors
//   },
//   spacing: {
//     // ... spacing values
//   },
//   // ... other theme properties
// };

// export const darkTheme = {
//   colors: {
//     primary: '#241f20',
//     secondary: '#241f20',
//     background: '#000000',
//     text: '#ffffff',
//     // ... other colors
//   },
//   // ... other theme properties
// };