import { GET_PRODUCT, NEW_POST } from "./types";

export const fetchPosts = () => {
  return (dispatch) => {
    return fetch(process.env.PUBLIC_URL + "/data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: GET_PRODUCT,
          data: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createPost = (postData) => (dispatch) => {
  return (dispatch) => {};
};
