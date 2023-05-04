import { motion } from 'framer-motion';
import { IconButton, useColorMode, useColorModeValue, Icon } from '@chakra-ui/react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs'

function ThemeButton() {
  const { toggleColorMode } = useColorMode()
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 2 }}
    >
    <IconButton
      bg="none"
      aria-label="Toggle theme"
      variant="unstyled"
      icon={useColorModeValue(
        <Icon as={BsMoonFill} w={6} h={6} color="#0F52BA"/>,
        <Icon as={BsSunFill} w={6} h={6} color="#EEC643"/>
      )}
      onClick={toggleColorMode}
    ></IconButton>
    </motion.div>
  )
}

export default ThemeButton;