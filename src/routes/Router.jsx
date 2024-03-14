import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Main from 'pages/Main';
import NewPost from 'pages/NewPost';
import Detail from 'pages/Detail';

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
          <Route
            path="/:id"
            element={<Detail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
