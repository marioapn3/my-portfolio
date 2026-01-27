import PropTypes from "prop-types"

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
    return (
        <div className={'flex items-center gap-3 border-4 border-black p-3 bg-white hover:bg-teal-400 group ' + classes}>
            <figure className="w-12 h-12 p-2 overflow-hidden bg-white border-2 border-black group-hover:bg-black">
                <img
                    src={imgSrc}
                    alt={label}
                    className=""
                    width={32}
                    height={32}
                />
            </figure>
            <div className="">
                <h3 className="font-bold text-black font-mono uppercase">{label}</h3>
                <p className="text-sm text-black font-mono">{desc}</p>
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