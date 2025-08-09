import { StyleSheet } from 'react-native';
import { Theme } from './theme';

export const extra_colors  = {
  gray: '#6c757d',
  success: '#198754',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#0dcaf0',
};

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};

export const fontSizes = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
};

export const commonStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: spacing.medium,
      backgroundColor: theme.colors.background,
    },
    
    title: {
      fontSize: fontSizes.xlarge,
      color: theme.colors.text,
      fontWeight: 'bold',
      marginBottom: spacing.medium,
    },
    
    sub_title: {
      fontSize: fontSizes.medium,
      color: theme.colors.text,
      fontWeight: 'bold',
      marginBottom: spacing.medium,
    },
    
    description: {
      fontSize: fontSizes.small,
      color: theme.colors.text,
      marginBottom: spacing.medium,
    },
    
    link_text: {
      fontSize: fontSizes.medium,
      color: theme.colors.text,
      fontWeight: 'bold',
      marginBottom: spacing.medium,
    },
    
    button: {
      backgroundColor: theme.colors.primary,
      padding: spacing.medium,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: spacing.small,
    },
    
    buttonText: {
      color: theme.colors.text,
      fontSize: fontSizes.medium,
      fontWeight: '600',
    },
    
    input: {
      borderWidth: 1,
      borderColor: extra_colors.gray,
      borderRadius: 5,
      padding: spacing.medium,
      marginBottom: spacing.medium,
    },
    
    successText: {
      backgroundColor: extra_colors.success,
      color: theme.colors.text,
      fontSize: fontSizes.small,
      marginBottom: spacing.small,
      padding: spacing.medium,
    },
    
    errorText: {
      backgroundColor: extra_colors.error,
      color: theme.colors.text,
      fontSize: fontSizes.small,
      marginBottom: spacing.small,
      padding: spacing.medium,
    },
    
    warningText: {
      backgroundColor: extra_colors.warning,
      color: theme.colors.text,
      fontSize: fontSizes.small,
      marginBottom: spacing.small,
      padding: spacing.medium,
    },
    
    infoText: {
      backgroundColor: extra_colors.info,
      color: theme.colors.text,
      fontSize: fontSizes.small,
      marginBottom: spacing.small,
      padding: spacing.medium,
    },
    
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        backgroundColor: theme.colors.background,
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
        
    cardImage: {
        height: 190
    },
  });
};