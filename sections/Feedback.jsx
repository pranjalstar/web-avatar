'use client';
 import { motion } from "framer-motion";
 import styles from "../styles";
 import { fadeIn, staggerContainer, zoomIn} from '../utils/motion'
const Feedback = () => (
<section className={`${styles.paddings} relative z-10`}>
  <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{once: false, amount:0.25}}
  className={`${styles.innerWidth} mx-auto flex  lg:flex-row flex-col gap-6 `} >


<motion.div
 variants={fadeIn('right','tween', 0.2 ,1)}
 className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4
 rounded-[32px] border-[1px] boder-[#6a6a6a] relative">
<div className="feedback-gradient" />
    <div >
 
      <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading
      [36px] text-white">
        Samantha
      </h4>
      <p  className="font-blod sm:text-[32px] text-[26px] sm:leading-[42px]
      flex-[0.5]">
        Founder  | Metaversus 

      </p>
    </div>

7uj
</motion.div>
   </motion.div>
  </section>
);

export default Feedback;
