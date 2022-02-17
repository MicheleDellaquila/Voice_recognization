import React from 'react';
import './Modal.scss';
import { motion } from 'framer-motion/dist/framer-motion';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({
  size,
  type = 'popup',
  title = type === 'dialgo' ? title : undefined,
  children,
  onClose,
  btn,
  titleBtn = btn ? titleBtn : undefined,
  disabledBtn = btn ? disabledBtn : undefined,
}) => {
  return (
    <div className='Modal--Backdrop'>
      <motion.div
        className={`Modal Modal-${size}`}
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', duration: 0.5 },
        }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
      >
        {type === 'dialog' && (
          <header className='Modal__header'>
            <h1 className='Modal__header-title'>{title}</h1>
            <div className='Modal__close' onClick={onClose}>
              <CloseIcon className='Modal__close-icon' />
            </div>
          </header>
        )}
        <div className='Modal__body'>{children}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
