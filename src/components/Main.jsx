import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticlesFailure,
  getArticlesStart,
  getArticlesSuccess,
} from "../slice/article";
import ArticleService from "../service/article";
import { Loader } from "../ui";
import ArticleCard from "./Article-card";

const Main = () => {
  const { articles, isLoading } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const response = await ArticleService.getArticles();
      dispatch(getArticlesSuccess(response.articles));
    } catch (error) {
      dispatch(getArticlesFailure(error));
    }
  };

  useEffect(() => {
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="album py-5">
      {isLoading && <Loader />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map((item) => (
          <ArticleCard item={item} getArticles={getArticles} />
        ))}
      </div>
    </div>
  );
};
export default Main;
