import React from 'react';
import Button from "@material-ui/core/Button";
import {alpha, styled, useTheme} from "@material-ui/core";
import theme from "../../../theme/theme";
import {PaletteColor} from "@material-ui/core/styles/createPalette";

const BasicButton = (
    {children, onClick, color = theme.palette.primary, variant = 'contained'}:
        {
            children?: React.ReactNode,
            onClick?: () => void,
            color?: PaletteColor,
            variant?: 'text' | 'outlined' | 'contained',
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

    if(variant == 'text') {
        return (
            <div>
                <TextButton
                    onClick={onClick}
                    variant={variant}
                    children={children}/>
            </div>
        )
    } else if(variant == 'outlined') {
        return (
            <div>
                <OutlinedButton
                    onClick={onClick}
                    variant={variant}
                    children={children}/>
            </div>
        )
    } else {
        return (
            <div>
                <ContainedButton
                    onClick={onClick}
                    variant={variant}
                    children={children}/>
            </div>
        )
    }
}

export default BasicButton