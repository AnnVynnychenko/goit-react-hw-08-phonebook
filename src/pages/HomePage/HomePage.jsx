import { IconContext } from 'react-icons';
import css from './HomePage.module.css';
import { FcBusinessContact } from 'react-icons/fc';

const HomePage = () => {
  return (
    <>
      <h1 className={css.title}>Your Phone Book</h1>
      <div className={css.icon}>
        <IconContext.Provider value={{ size: 90 }}>
          <FcBusinessContact />
        </IconContext.Provider>
      </div>
    </>
  );
};
export default HomePage;
