import './InstructionModal.scss';
import React, { useState } from 'react';
import { Modal } from 'reactstrap';

interface instructionModalProps {
    isOpenModal: boolean,
    closeInstructionModal: any,
}

function InstructionModal({ isOpenModal, closeInstructionModal }: instructionModalProps): JSX.Element {

    // const [isOpenInstructionModal, setIsOpenInstructionModal] = useState<boolean>(isOpenModal);

    // const closeInstructionModal = () => {
    //     setIsOpenInstructionModal(false);
    // }

    return (
        <Modal
            isOpen={isOpenModal}
            className={'instruction-modal-container'}
            size='lg'
            centered
        >
            <div className='instruction-modal-content'>
                <div className='instruction-modal-header'>
                    <span className='left'>How to play Boole Bots Game</span>
                    <span className='right'
                        onClick={() => closeInstructionModal()}
                    >X</span>
                </div>
            </div>

        </Modal>
    )
}

export default InstructionModal;
