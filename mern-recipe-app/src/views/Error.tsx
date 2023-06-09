import React from "react";
import { motion } from "framer-motion";

const Error = () => {
	return (
		<motion.div
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
		>
			Error
		</motion.div>
	);
};

export default Error;
