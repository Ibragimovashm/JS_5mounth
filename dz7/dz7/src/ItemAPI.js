import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiSelect, getAPi } from "./redux/itemDataSlice";

function ItemAPI() {
  const dispatch = useDispatch();
  const { item, loader, error } = useSelector(apiSelect);
  useEffect(() => {
    dispatch(getAPi());
  }, [dispatch]);
  console.log(item)
  return (
    <div>
     {
      item?.map(i => (<div>
        {i.name}
      </div>))
     }
    </div>
  );
}

export default ItemAPI;
