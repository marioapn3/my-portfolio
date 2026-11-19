import PropTypes from "prop-types"

const SkillCard = ({ imgSrc, label, desc, classes }) => {
    return (
        <div className={'flex items-center gap-3 border border-line rounded-xl p-3 bg-surface-2 hover:border-accent/40 hover:bg-surface-3 hover:-translate-y-0.5 transition-all duration-300 group ' + classes}>
            <figure className="w-11 h-11 p-2 overflow-hidden bg-surface border border-line rounded-lg grid place-items-center">
                <img
                    src={imgSrc}
                    alt={label}
                    width={32}
                    height={32}
                />
            </figure>
            <div>
                <h3 className="font-semibold text-ink text-sm">{label}</h3>
                <p className="text-xs text-ink-faint">{desc}</p>
            </div>
        </div>
    )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string,
}

export default SkillCard
