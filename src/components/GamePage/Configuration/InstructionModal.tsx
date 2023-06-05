import './InstructionModal.scss';
import React from 'react';
import { Modal } from 'reactstrap';
import BooleanLogic from '../../../assets/boolean algebra.png'

interface instructionModalProps {
    isOpenModal: boolean,
    closeInstructionModal: any,
}

function InstructionModal({ isOpenModal, closeInstructionModal }: instructionModalProps): JSX.Element {

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
                </div>
                <div className='instruction-modal-body'>
                    <ol>
                        <li>To start the game, follow these steps:
                            <ul>
                                <li>Click on the "Bots Setting" button.</li>
                                <li>Choose a name for your bot.</li>
                                <li>Select a boolean value and starting direction for your bot.</li>
                            </ul>
                        </li>
                        <li>Adjust the speed of the bots by choosing a value from 1 to 4, where 1 is the quickest and 4 is the slowest.</li>
                        <li>Select an operation that will be applied when two bots collide.</li>
                        <li>Click on the "Battle" button to initiate the game. This button can also be used to control the game, allowing you to make the bots stop or continue moving.</li>
                        <li>The bots will move based on the starting direction you selected. They will take step-by-step movements: up for North, down for South, right for East, and left for West. If a bot reaches the edge of the arena, it will bounce off the wall one step and change direction randomly.</li>
                        <li>When two bots collide on the same square in the arena, the boolean value of both bots and the selected operation will be applied to produce an output. This output is determined based on the principles of boolean algebra. The resulting value, represented as 'X' in the picture below, signifies the outcome of the operation.
                            <br />
                            <img src={BooleanLogic} alt='boolean algebra logic' className='boolean-logic' />
                            <ul>
                                <li>If the output is 1, one bot will be chosen randomly to disappear. The bot that continues moving will gain 1 point in that round of the game.</li>
                                <li>If the output is 0, it's a tie, and both bots will continue moving without any points gained.</li>
                            </ul>
                        </li>
                        <li>After the bots collide and produce an output, you can click on the "STOP" button to halt the game. You can then adjust the bots' settings to continue playing the next round of the game.</li>
                    </ol>
                </div>
                <div className='instruction-modal-footer'>
                    <button className='btn-instruction-close'
                        onClick={() => closeInstructionModal()}
                    >
                        Close
                    </button>
                </div>
            </div>

        </Modal>
    )
}

export default InstructionModal;
