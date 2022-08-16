import { Route, Link } from 'react-router-dom';
import styles from './ui-componens.module.scss';
export function UiComponens(props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiComponens!</h1>

      <ul>
        <li>
          <Link to="/">ui-componens root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the ui-componens root route.</div>}
      />
    </div>
  );
}
export default UiComponens;
