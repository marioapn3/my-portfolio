import PropTypes from "prop-types"

// buttonprimary
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
    img,
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-primary " + classes}
            >
                {label}
                {
                    icon ?
                        <span className="material-symbols-rounded" aria-hidden="true">
                            {icon}
                        </span>
                        : null
                }
                {
                    img ?
                        <img src={img} alt={label} className="w-5 h-5" />
                        : null
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}
                {
                    icon ?
                        <span className="material-symbols-rounded" aria-hidden="true">
                            {icon}
                        </span>
                        : null
                }
                {
                    img ?
                        <img src={img} alt={label} className="w-5 h-5 " />
                        : null
                }
            </button>
        )
    }
}

ButtonPrimary.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string,
    img: PropTypes.string,
}

// buttonoutline
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
    img,
    imgclasses,
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-outline " + classes}
            >
                {label}
                {
                    icon ?
                        <span className="material-symbols-rounded" aria-hidden="true">
                            {icon}
                        </span>
                        : null
                }
                {
                    img ?
                        <img src={img} alt={label} className={imgclasses} />
                        : null
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}
                {
                    icon ?
                        <span className="material-symbols-rounded" aria-hidden="true">
                            {icon}
                        </span>
                        : null
                }
                {
                    img ?
                        <img src={img} alt={label} className={imgclasses} />
                        : null
                }
            </button>
        )
    }
}

ButtonOutline.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string,
    img: PropTypes.string,
    imgclasses: PropTypes.string,
}

export {
    ButtonPrimary,
    ButtonOutline
}