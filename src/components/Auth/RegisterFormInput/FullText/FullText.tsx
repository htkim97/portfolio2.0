import Modal from "@/components/Modals/Modal/Modal";
import useModal from "@/hooks/useModal";

import styles from "./FullText.module.scss";

interface FullTextProps {
  label: "이용약관" | "개인정보 처리방침";
  onConfirm: () => void;
}

export default function FullText({ label, onConfirm }: FullTextProps) {
  const { showModal, modalOpen, modalClose } = useModal();
  // TODO: label에 따른 api 호출 분기 처리

  const handleConfirm = () => {
    onConfirm();
    modalClose();
  };

  return (
    <>
      {showModal && (
        <Modal title={label} onClose={modalClose}>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            velit dolorum vel consequatur officia. Aspernatur numquam ullam,
            nesciunt modi dolores consequatur repellat dolore, fugit eaque
            necessitatibus, vitae illo recusandae! Natus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aperiam velit dolorum vel
            consequatur officia. Aspernatur numquam ullam, nesciunt modi dolores
            consequatur repellat dolore, fugit eaque necessitatibus, vitae illo
            recusandae! Natus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam velit dolorum vel consequatur officia.
            Aspernatur numquam ullam, nesciunt modi dolores consequatur repellat
            dolore, fugit eaque necessitatibus, vitae illo recusandae! Natus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            velit dolorum vel consequatur officia. Aspernatur numquam ullam,
            nesciunt modi dolores consequatur repellat dolore, fugit eaque
            necessitatibus, vitae illo recusandae! Natus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aperiam velit dolorum vel
            consequatur officia. Aspernatur numquam ullam, nesciunt modi dolores
            consequatur repellat dolore, fugit eaque necessitatibus, vitae illo
            recusandae! Natus. orem ipsum dolor sit amet consectetur adipisicing
            elit. Aperiam velit dolorum vel consequatur officia. Aspernatur
          </div>
          <button className={styles.button} onClick={handleConfirm}>
            확인
          </button>
        </Modal>
      )}
      <span className={styles.fullText} onClick={modalOpen}>
        전문보기
      </span>
    </>
  );
}
