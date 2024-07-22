import Timeline from '../components/molecules/Timeline';
import Header from '../components/organisms/Header';
import InfoSidebar from '../templates/Layout/InfoSidebar';

const HomePage: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <div className="w-full"> */}
      <div style={{ zIndex: '9' }} className="w-[60%] mx-auto mt-16 flex gap-4">
        <InfoSidebar />
        <Timeline />
      </div>
      {/* </div> */}
    </>
  );
};

export default HomePage;
