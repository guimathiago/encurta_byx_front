import { Routes, Route } from "react-router-dom";
import { PageLayout } from "./components/PageLayout";
import { UrlList } from "./pages/UrlList";
import { UrlDetails } from "./pages/UrlDetails";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<UrlList />} />
        <Route path="/detalhe-url/" element={<UrlDetails />} />
      </Route>
    </Routes>
  );
}
