import { motion } from 'framer-motion';

export default function BackgroundLogo() {
  return (
      <motion.svg
        className="fill-neutral-200 stroke-neutral-400 stroke-2 h-[80vh] opacity-20"
        viewBox="0 0 512 359"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: { type: 'spring', duration: 5, bounce: 0 },
                opacity: { duration: 1 },
              },
            },
          }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M231.119 129.885L144.337 280.327H144.458L130.982 303.688L161.706 356.95L205.906 280.327H232.787L188.587 356.95H250.036L294.236 280.327H406.352L450.552 356.95H512L350.294 76.6229L263.511 227.065H236.63L323.413 76.6229H323.292L336.768 53.2621L306.043 0L261.843 76.6229H0L30.7242 129.885H231.119ZM350.294 183.147L375.628 227.065H324.96L350.294 183.147Z"
        />
      </motion.svg>
  );
}
