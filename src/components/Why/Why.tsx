import { HiOutlineTicket } from "react-icons/hi2";
import { SiFlydotio } from "react-icons/si";
import { IoDiamondOutline } from "react-icons/io5";
import { TfiMedall } from "react-icons/tfi";
import { motion } from 'framer-motion';

export default function Why() {
  return (
    <>
      <div className='text-mainTextColor container  mx-auto mt-22 '>
        <h3 className="md:font-bold font-semibold  lg:text-3xl md:text-2xl text-xl max-md:text-center">Why choose Tourz</h3>
        <div className='flex max-md:flex-wrap md:pt-10 pt-4'>
            <motion.div
                className='col-md-3 md:pe-6 lg:pe-14 md:items-start md:text-start flex flex-col items-center text-center'
                initial={{ opacity: 0, x: -300 }}    
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}  
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <HiOutlineTicket size={50} className="text-bgButtonOrange" />
                <h6 className="pt-5 pb-3 font-semibold">Ultimate flexibility</h6>
                <p className="text-sm">
                    You're in control, with free cancellation and payment options to satisfy any plan or budget.
                </p>
            </motion.div>

            <motion.div
                className='col-md-3 md:pe-6 lg:pe-14 max-md:pt-5 md:items-start md:text-start flex flex-col items-center text-center'
                initial={{ opacity: 0, x: 300 }} 
                animate={{ opacity: 1, x: 0 }}   
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <SiFlydotio size={50} className="text-bgButtonOrange" />
                <h6 className="pt-5 pb-3 font-semibold">Memorable experiences</h6>
                <p className="text-sm">
                    Browse and book tours and activities so incredible, you'll want to tell your friends.
                </p>
            </motion.div>

            <motion.div
                className='col-md-3 md:pe-6 lg:pe-14 max-md:pt-5 md:items-start md:text-start flex flex-col items-center text-center'
                initial={{ opacity: 0, x: -200 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <IoDiamondOutline size={50} className="text-bgButtonOrange" />
                <h6 className="pt-5 pb-3 font-semibold">Quality at our core</h6>
                <p className="text-sm">
                    High-quality standards. Millions of reviews. A tourz company.
                </p>
            </motion.div>

            <motion.div
                className='col-md-3 max-md:pt-5 md:items-start md:text-start flex flex-col items-center text-center'
                initial={{ opacity: 0, x: 200 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <TfiMedall size={50} className="text-bgButtonOrange" />
                <h6 className="pt-5 pb-3 font-semibold">Award-winning support</h6>
                <p className="text-sm">
                    New price? New plan? No problem. We're here to help, 24/7.
                </p>
            </motion.div>
        </div>
      </div>
    </>
  )
}
