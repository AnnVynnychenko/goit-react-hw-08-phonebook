import css from './Loader.module.css';
import { RingLoader } from 'react-spinners';
const Loader = () => {
  return (
    <RingLoader
      color="#36d7b7"
      size={100}
      speedMultiplier={2}
      className={css.loader}
    />
  );
};

export default Loader;
