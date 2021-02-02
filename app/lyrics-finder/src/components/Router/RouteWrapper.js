import { Route } from 'react-router-dom';
import Layout from '../../Layout';

const RouteWrapper = (props) => {
  return (
    <Route path={props.path}>
      <Layout>{props.component}</Layout>
    </Route>
  );
};

export default RouteWrapper;
