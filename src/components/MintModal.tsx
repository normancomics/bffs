import React from 'react';

interface MintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MintModal: React.FC<MintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mint-modal">
      {/* Mint modal content */}
    </div>
  );
};

export default MintModal;
