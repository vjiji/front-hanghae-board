import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Main from 'pages/Main';
import NewPost from 'pages/NewPost';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route
            path="/newpost"
            element={<NewPost />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
