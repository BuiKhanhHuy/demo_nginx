import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import { theme } from "@/configs";
import {
  AlbumPage,
  PhotoPage,
  PostPage,
  TodoPage,
  UserPage,
  UserDetailPage
} from "@/pages/admin";
import MainLayout from "@/layouts/MainLayout";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter basename={"/admin"}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/users" element={<UserPage />} />
            <Route path="/users/:id" element={<UserDetailPage />} />
            <Route path="/posts" element={<PostPage />} />
            <Route path="/albums" element={<AlbumPage />} />
            <Route path="/photos" element={<PhotoPage />} />
            <Route path="/todos" element={<TodoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
