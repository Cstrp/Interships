import { Button, Input, Modal } from "antd";
import { useState } from "react";

interface LoginModalProps {
  visible: boolean;
  onJoin: (name: string) => void;
  onCancel: () => void;
}

export const LoginModal = ({ visible, onJoin, onCancel }: LoginModalProps) => {
  const [playerName, setPlayerName] = useState("");

  const handlePlayerJoin = () => {
    if (playerName) {
      onJoin(playerName);
      setPlayerName("");
      onCancel();
    }
  };

  return (
    <Modal
      open={visible}
      title="Enter your name..."
      onCancel={onCancel}
      footer={[
        <Button key="join" type="dashed" onClick={handlePlayerJoin}>
          Join
        </Button>,
      ]}
    >
      <Input
        placeholder="Here..."
        value={playerName}
        onChange={e => setPlayerName(e.target.value)}
      />
    </Modal>
  );
};
