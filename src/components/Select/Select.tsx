import { Link } from 'react-router-dom';
import styles from './Select.module.scss';

export default function Select() {
  return (
    <div className={`${styles.select}`}>
        <Link to="/settings" className={`${styles.settings}`} />
        <Link to="/napoleon" className={`${styles.napoleon}`} />
        <Link to="/wip" className={`${styles.wip1}`} />
        <Link to="/wip" className={`${styles.wip2}`} />
    </div>
  )
}
