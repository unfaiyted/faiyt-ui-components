import useTheme from "../utilities/hooks/ThemeHook";
import PropTypes from "prop-types";
import Input from "./Input";

export const RadioButton = ({label, type, className, disabled, name, aria, onClick, ...props}) => {
    const {themePrefix} = useTheme(props);

    return (
        <Input
            type="radio"
            label={label}
            name={name}
            className{className}
            disabled={disabled}
            onClick={onClick}
            aria={aria}

            />
    )
}



Input.propTypes =  {
    /**
     * Label that describes the input
     */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
     * What type of input
     */
    type: PropTypes.oneOf(["text","checkbox","date","radio","password"]),
    /**
     * Custom class to add to input
     */
    className: PropTypes.string,
    /**
     * Text to display as a placeholder in the object
     */
    placeholder: PropTypes.string,
    /**
     * disabled user interaction
     */
    disabled: PropTypes.bool,
    /**
     * The name of the input
     */
    name: PropTypes.string,
    /**
     * Attaches a11y accessability notes to input
     */
    aria: PropTypes.object,
    /**
     * Changes the event on the user click
     */
    onClick: PropTypes.func,
    /**
     * Takes a Theme Object to modify its look
     */
    theme: PropTypes.object

}

Input.defaultProps = {
    disabled: false,
    onClick: undefined,
    theme: {},
}

export default Input;

