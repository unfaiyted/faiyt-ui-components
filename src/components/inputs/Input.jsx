import useTheme from "../utilities/hooks/ThemeHook";
import PropTypes from "prop-types";

export const Input = ({label, type, className, disabled, placeholder, name, aria, onClick, ...props}) => {
    const {themePrefix} = useTheme(props);

    return (
        <div className={`${themePrefix}-input--container`}>
            <label htmlFor={name}>{label}</label>
            <input type={type}
                   name={name}
                   disabled={disabled}
                   id={name}
                   className={[`${themePrefix}-input`, `${themePrefix}-input--${type}`,className].join(" ")}
                   placeholder={placeholder}
                   aria-label={aria?.label || label}
                   onClick={onClick}
                   aria-describedby={aria?.describedBy}/>
        </div>
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

