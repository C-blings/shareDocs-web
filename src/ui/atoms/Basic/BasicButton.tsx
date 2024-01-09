import React from 'react';
import Button from "@material-ui/core/Button";
import {alpha, styled, useTheme} from "@material-ui/core";
import theme from "../../../theme/theme";
import {PaletteColor} from "@material-ui/core/styles/createPalette";
import {TypographyStyleOptions} from "@material-ui/core/styles/createTypography";

const BasicButton = (
    {
        children,
        onClick,
        color = theme.palette.primary,
        variant = 'contained',
        style = theme.typography.body2,
        className
    }:
        {
            children?: React.ReactNode,
            onClick?: () => void,
            color?: PaletteColor,
            variant?: 'text' | 'outlined' | 'contained',
            style?: TypographyStyleOptions,
            className?: any
        }
) => {
    const TextButton = styled(Button)({
        color: color.main,
        '&:hover': {
            backgroundColor: (alpha)(color.main, theme.palette.action.hoverOpacity),
        }
    })

    const OutlinedButton = styled(Button)({
        color: color.main,
        border: "1px solid ".concat((alpha)(color.main, 0.5)),
        '&:hover': {
            border: "1px solid ".concat(color.main),
            backgroundColor: (alpha)(color.main, theme.palette.action.hoverOpacity),
        }
    })

    const ContainedButton = styled(Button)({
        color: color.contrastText,
        backgroundColor: color.main,
        '&:hover': {
            backgroundColor: color.dark,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: color.main
            }
        }
    })

    if (variant == 'text') {
        return (
            <TextButton
                onClick={onClick}
                variant={variant}
                style={style}
                children={children}
                className={className}/>
        )
    } else if (variant == 'outlined') {
        return (
            <OutlinedButton
                onClick={onClick}
                variant={variant}
                style={style}
                children={children}
                className={className}/>
        )
    } else {
        return (
            <ContainedButton
                onClick={onClick}
                variant={variant}
                style={style}
                children={children}
                className={className}/>
        )
    }
}

export default BasicButton