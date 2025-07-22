"use client"

import { useState } from "react"
import { Github, Globe, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"

export default function ProjectCard({ title, description, tags, image, video, className, github, website, role }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        className={`flex flex-col h-full overflow-hidden duration-300 ease-out border-2 rounded-2xl hover:shadow-lg border-inset border-zinc-50/10 cursor-pointer ${className}`}
        onClick={() => setShowModal(true)}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover object-top w-full h-40 mx-auto rounded-t-lg pointer-events-none"
          />
        ) : image ? (
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="object-cover object-top w-full h-40 overflow-hidden rounded-t-lg"
          />
        ) : null}

        <div className="px-3">
          <div className="flex items-center justify-between mt-3">
            <div className="flex-1">
              <h3 className="text-white font-semibold">{title}</h3>
            </div>
            <div className="flex gap-1">
              {github && (
                <a
                  target="_blank"
                  href={github}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 p-1 rounded-md btn-secondary"
                  rel="noreferrer"
                >
                  <Github size={16} />
                </a>
              )}
              {website && (
                <a
                  target="_blank"
                  href={website}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 p-1 rounded-md btn-secondary"
                  rel="noreferrer"
                >
                  <Globe size={16} />
                </a>
              )}
            </div>
          </div>
          {role && (
                <span 
                className="inline-block px-2 py-0.5 mt-1 text-[10px] font-medium text-zinc-300 bg-zinc-800/60 rounded-md border border-zinc-700/50 mb-1"
                >
                  Role : {role}
                </span>
              )}
          <div className="max-w-full font-sans text-xs text-zinc-400">{description}</div>
        </div>

        <div className="flex flex-col px-3 mb-5">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-[0.9px] text-[10px] bg-zinc-700/50 ring-2 ring-zinc-50/10 rounded-lg mt-[0.5ch]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-zinc-900/95 backdrop-blur-md rounded-2xl border border-zinc-700/50 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-300 hover:text-white transition-all duration-200 backdrop-blur-sm"
                onClick={() => setShowModal(false)}
              >
                <X size={18} />
              </button>

              {/* Media Section */}
              {(image || video) && (
                <div className="relative overflow-hidden rounded-t-2xl">
                  {video ? (
                    <video src={video} autoPlay loop muted playsInline className="w-full h-64 object-cover" />
                  ) : (
                    <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
                  )}
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent" />
                </div>
              )}

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Title and Links */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white leading-tight">{title}</h2>
                    {role && (
                      <span className="inline-block px-3 py-1 mt-2 text-sm font-medium text-zinc-300 bg-zinc-800/60 rounded-lg border border-zinc-700/50">
                        {role}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {github && (
                      <motion.a
                        href={github}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-2 bg-zinc-800/60 hover:bg-zinc-700/60 rounded-lg text-zinc-300 hover:text-white transition-all duration-200 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        rel="noreferrer"
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </motion.a>
                    )}
                    {website && (
                      <motion.a
                        href={website}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-2 bg-zinc-800/60 hover:bg-zinc-700/60 rounded-lg text-zinc-300 hover:text-white transition-all duration-200 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        rel="noreferrer"
                      >
                        <Globe size={16} />
                        <span>Website</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 leading-relaxed">{description}</p>

                {/* Tags */}
                {tags && tags.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-zinc-400">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1.5 bg-zinc-800/60 text-zinc-300 rounded-lg text-sm border border-zinc-700/50"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  video: PropTypes.string,
  className: PropTypes.string,
  github: PropTypes.string,
  website: PropTypes.string,
  role: PropTypes.string,
}
