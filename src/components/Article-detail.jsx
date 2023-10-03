import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/article";

const ArticleDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.article);

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const { article } = await ArticleService.getArticleDetail(slug);
        dispatch(getArticleDetailSuccess(article));
      } catch (error) {
        dispatch(getArticleDetailFailure(error));
      }
    };
    getArticleDetail();
  }, [slug, dispatch]);

  return <div>{slug}</div>;
};

export default ArticleDetail;
