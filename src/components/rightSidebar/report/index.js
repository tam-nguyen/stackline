import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../../actions";
import "./style.css";
const Report = (props) => {
  const [data, setData] = useState([]);

  const [direction, setDirections] = useState("asc");
  const [column, setColumn] = useState("weekEnding");

  useEffect(() => {
    props.onFetchData();

    if (props.item.length > 0) {
      setData([...props.item[0].sales]);
    }
  }, [props.item.length > 0]);

  const checkValidDate = (date) => {
    return isNaN(date) && !isNaN(Date.parse(date)) ? true : false;
  };

  const handleSort = (e, direction) => {
    let sortedData = data.sort((a, b) => {
      let firstValue = a[`${e}`];
      let secondValue = b[`${e}`];
      // check if value is date then we sort it as date
      if (direction === "asc") {
        return checkValidDate(firstValue)
          ? new Date(firstValue) - new Date(secondValue)
          : firstValue - secondValue;
      } else {
        return checkValidDate(firstValue)
          ? new Date(secondValue) - new Date(firstValue)
          : secondValue - firstValue;
      }
    });

    setData([...sortedData]);
    setDirections(direction);
    setColumn(e);
  };

  return (
    <div className="report-wrapper">
      <div className="report-inner">
        {data !== undefined && (
          <table className="table">
            <thead>
              <tr>
                <th>
                  Week Ending
                  {direction === "asc" && column === "weekEnding" ? (
                    <span onClick={() => handleSort("weekEnding", "desc")}>
                      ⮟
                    </span>
                  ) : (
                    <span onClick={() => handleSort("weekEnding", "asc")}>
                      ⮝
                    </span>
                  )}
                </th>
                <th>
                  Retail Sales
                  {direction === "asc" && column === "retailSales" ? (
                    <span onClick={() => handleSort("retailSales", "desc")}>
                      ⮟
                    </span>
                  ) : (
                    <span onClick={() => handleSort("retailSales", "asc")}>
                      ⮝
                    </span>
                  )}
                </th>
                <th>
                  Whole Sales{" "}
                  {direction === "asc" && column === "wholesaleSales" ? (
                    <span onClick={() => handleSort("wholesaleSales", "desc")}>
                      ⮟
                    </span>
                  ) : (
                    <span onClick={() => handleSort("wholesaleSales", "asc")}>
                      ⮝
                    </span>
                  )}
                </th>
                <th>
                  Unites Sold
                  {direction === "asc" && column === "unitsSold" ? (
                    <span onClick={() => handleSort("unitsSold", "desc")}>
                      ⮟
                    </span>
                  ) : (
                    <span onClick={() => handleSort("unitsSold", "asc")}>
                      ⮝
                    </span>
                  )}
                </th>
                <th>
                  Retailer Margin
                  {direction === "asc" && column === "retailerMargin" ? (
                    <span onClick={() => handleSort("retailerMargin", "desc")}>
                      ⮟
                    </span>
                  ) : (
                    <span onClick={() => handleSort("retailerMargin", "asc")}>
                      ⮝
                    </span>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.weekEnding}</td>
                    <td>{item.retailSales}</td>
                    <td>{item.wholesaleSales}</td>
                    <td>{item.unitsSold}</td>
                    <td>{item.retailerMargin}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { item: state.item.products };
};

const mapDispatchProps = (dispatch) => {
  return { onFetchData: () => dispatch(fetchPosts()) };
};
export default connect(mapStateToProps, mapDispatchProps)(Report);
