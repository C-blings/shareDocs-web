import React from 'react';
import Button from "@material-ui/core/Button";
import {alpha, styled} from "@material-ui/core";
import theme from "../../../theme/theme";
import {PaletteColor} from "@material-ui/core/styles/createPalette";
import {TypographyStyleOptions} from "@material-ui/core/styles/createTypography";
import PropTypes from "prop-types";

export interface BasicButtonProps {
    children?: React.ReactNode,
    onClick?: () => void,
    color?: PaletteColor,
    variant?: 'text' | 'outlined' | 'contained',
    style?: TypographyStyleOptions,
    className?: any
}


const BasicButton = (props: BasicButtonProps) => {
    const {color, variant, ...other} = props
    const TextButton = styled(Button)({
        color: color!.main,
        '&:hover': {
            backgroundColor: (alpha)(color!.main, theme.palette.action.hoverOpacity),
        }
    })

    const OutlinedButton = styled(Button)({
        color: color!.main,
        border: "1px solid ".concat((alpha)(color!.main, 0.5)),
        '&:hover': {
            border: "1px solid ".concat(color!.main),
            backgroundColor: (alpha)(color!.main, theme.palette.action.hoverOpacity),
        }
    })

    const ContainedButton = styled(Button)({
        color: color!.contrastText,
        backgroundColor: color!.main,
        '&:hover': {
            backgroundColor: color!.dark,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: color!.main
            }
        }
    })

    if (variant == 'text') {
        return (
            <TextButton
                {...other}
                variant={variant}
            />
        )
    } else if (variant == 'outlined') {
        return (
            <OutlinedButton
                {...other}
                variant={variant}
            />
        )
    } else {
        return (
            <ContainedButton
                {...other}
                variant={variant}
            />
        )
    }
}

BasicButton.defaultProps = {
    color: theme.palette.secondary
}

export default BasicButton