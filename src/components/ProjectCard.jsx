"use client"

import { useState } from "react"
import { Github, Globe, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"

export default function ProjectCard({ title, description, tags, image, video, className, github, website, role, modalImages }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        className={`flex flex-col h-full overflow-hidden border border-line rounded-2xl bg-surface-2 hover:border-accent/40 hover:bg-surface-3 hover:-translate-y-1 cursor-pointer transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${className}`}
        onClick={() => setShowModal(true)}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover object-top w-full h-40 mx-auto border-b border-line pointer-events-none"
          />
        ) : image ? (
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="object-cover object-top w-full h-40 overflow-hidden border-b border-line"
          />
        ) : null}

        <div className="px-3">
          <div className="flex items-center justify-between mt-3">
            <div className="flex-1">
              <h3 className="text-ink font-semibold">{title}</h3>
            </div>
            <div className="flex gap-1">
              {github && (
                <a
                  target="_blank"
                  href={github}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 p-1.5 border border-line bg-surface text-ink-muted hover:text-accent hover:border-accent/50 rounded-md transition-colors"
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
                  className="flex items-center gap-1 p-1.5 border border-line bg-surface text-ink-muted hover:text-accent hover:border-accent/50 rounded-md transition-colors"
                  rel="noreferrer"
                >
                  <Globe size={16} />
                </a>
              )}
            </div>
          </div>
          {role && (
            <span className="inline-block px-2 py-0.5 mt-1 text-[10px] font-medium text-accent bg-accent/10 border border-accent/30 rounded-md mb-1">
              Role: {role}
            </span>
          )}
          <div className="max-w-full text-xs text-ink-muted leading-relaxed">{description}</div>
        </div>

        <div className="flex flex-col px-3 mb-5">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-[10px] bg-surface border border-line text-ink-muted rounded mt-[0.5ch]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
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
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-surface-2 border border-line-strong rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-lift"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-20 p-2 bg-surface-3/90 border border-line text-ink-muted hover:text-accent hover:border-accent/50 rounded-lg backdrop-blur transition-colors"
                onClick={() => setShowModal(false)}
              >
                <X size={18} />
              </button>

              {/* Media Section */}
              {(image || video || (modalImages && modalImages.length > 0)) && (
                <div className="relative overflow-hidden border-b border-line">
                  {video ? (
                    <video src={video} autoPlay loop muted playsInline
                      className="w-full h-64 object-cover" />
                  ) : modalImages && modalImages.length > 0 ? (
                    <ModalImageGallery images={modalImages} />
                  ) : (
                    <img src={image || "/placeholder.svg"} alt={title}
                      className="w-full h-64 object-cover" />
                  )}
                </div>
              )}

              {/* Content Section */}
              <div className="p-6 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 16rem)' }}>
                {/* Title and Links */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-ink leading-tight">{title}</h2>
                    {role && (
                      <span className="inline-block px-3 py-1 mt-2 text-sm font-medium text-accent bg-accent/10 border border-accent/30 rounded-md">
                        {role}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {github && (
                      <motion.a
                        href={github}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-2 bg-surface border border-line hover:border-accent/50 text-ink-muted hover:text-accent text-sm rounded-lg transition-colors"
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
                        className="flex items-center gap-2 px-3 py-2 bg-surface border border-line hover:border-accent/50 text-ink-muted hover:text-accent text-sm rounded-lg transition-colors"
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
                <p className="text-ink-muted leading-relaxed">{description}</p>

                {/* Tags */}
                {tags && tags.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-ink-faint">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1.5 bg-surface text-ink-muted border border-line text-sm rounded-md"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.05 * idx }}
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

function ModalImageGallery({ images }) {
  const [current, setCurrent] = useState(0)
  return (
    <div className="relative w-full h-72 overflow-hidden bg-surface">
      {/* Background blur layer */}
      <img
        src={images[current]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-md opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main image */}
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="relative z-10 w-full h-full object-contain"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((p) => (p - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 p-2 bg-surface-3/90 border border-line text-ink hover:text-accent hover:border-accent/50 rounded-md backdrop-blur transition-colors"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((p) => (p + 1) % images.length)}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 p-2 bg-surface-3/90 border border-line text-ink hover:text-accent hover:border-accent/50 rounded-md backdrop-blur transition-colors"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-white/30"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
