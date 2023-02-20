import React from "react";
import { HeadComponent } from "../../components/utils/head";
import useGetItem from "../../hooks/useGetItem";
import useRouterQuery from "../../hooks/useRouterQuery";
import DeatilsMod from "../../modules/products";

const ProductDetails = () => {
  const idProduct = useRouterQuery();
  const [product] = useGetItem(idProduct);
  return (
    <React.Fragment>
      <HeadComponent title={`${product.name || "Details"} | Felcy`} />
      <DeatilsMod product={product} />
    </React.Fragment>
  );
};

export default ProductDetails;
