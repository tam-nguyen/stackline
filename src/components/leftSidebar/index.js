import React, { useState, useEffect } from "react";
import "./style.css";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";

const LeftSidebar = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    props.onFetchData();

    if (props.item.length > 0) {
      setData(props.item[0]);
    }
  }, [props.item.length > 0]);
  return (
    <div className="left-sidebar">
      {Object.keys(data).length > 0 && (
        <div className="left-sidebar-inner">
          <img src={data.image} alt="item image" width="150px" />
          <h3 className="title">{data.title}</h3>

          <div className="subtitle">{data.subtitle}</div>
          <div className="tags">
            {data.tags.map((item, index) => {
              return (
                <span className="tag" key={index}>
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { item: state.item.products };
};

const mapDispatchProps = (dispatch) => {
  return { onFetchData: () => dispatch(fetchPosts()) };
};
export default connect(mapStateToProps, mapDispatchProps)(LeftSidebar);
