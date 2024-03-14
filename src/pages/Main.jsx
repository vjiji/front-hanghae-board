// import LoginModal from 'components/common/LoginModal';
import Modal from 'components/common/Modal';
import SignupModal from 'components/common/SignupModal';
import MainArticle from 'components/features/post/MainArticle';
import TabList from 'components/features/post/TabList';

const Main = () => {
  return (
    <>
      <MainArticle />
      <TabList />
      <Modal>
        <SignupModal />
      </Modal>
    </>
  );
};

export default Main;
