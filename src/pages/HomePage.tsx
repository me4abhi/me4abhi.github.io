import Timeline from '../components/molecules/Timeline';
import Header from '../components/organisms/Header';
import InfoSidebar from '../templates/Layout/InfoSidebar';

const HomePage: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <div className="w-full"> */}
      <div
        style={{ zIndex: '9' }}
        className="w-[100%] lg:w-[60%] mx-auto lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <InfoSidebar />
        <Timeline />
      </div>
      {/* </div> */}
    </>
  );
};

export default HomePage;
