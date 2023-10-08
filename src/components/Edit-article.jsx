import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../slice/article";
import ArticleService from "../service/article";
import ArticleForm from "./Article-form";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const { article } = await ArticleService.getArticleDetail(slug);
        setTitle(article.title);
        setDescription(article.description);
        setBody(article.body);
        dispatch(getArticleDetailSuccess(article));
      } catch (error) {
        dispatch(getArticleDetailFailure(error));
      }
    };
    getArticleDetail();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    dispatch(postArticleStart());
    try {
      await ArticleService.editArticle(slug, article);
      dispatch(postArticleSuccess());
      navigate("/");
    } catch (error) {
      dispatch(postArticleFailure());
    }
  };

  const formProps = {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  };

  return (
    <div className="text-center">
      <h1 className="fs-2">Create article</h1>
      <div className="w-75 mx-auto">
        <ArticleForm {...formProps} />
      </div>
    </div>
  );
};
export default EditArticle;
