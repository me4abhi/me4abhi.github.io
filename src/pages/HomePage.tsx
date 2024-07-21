import Timeline from '../components/molecules/Timeline';
import Header from '../components/organisms/Header';

const HomePage: React.FC = () => {
  return (
    <div style={{ zIndex: '9' }}>
      <Header />
      <Timeline />
    </div>
  );
};

export default HomePage;
