import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Main from 'pages/Main';
import NewPost from 'pages/NewPost';
import PostDetail from 'pages/PostDetail';

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
            path="/posts/:id"
            element={<PostDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
