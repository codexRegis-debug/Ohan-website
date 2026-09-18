/**/
import { motion } from 'framer-motion'

const AnimeRollingGlow = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}

    >
      { children }
    </motion.div>
  )
}

export default AnimeRollingGlow
