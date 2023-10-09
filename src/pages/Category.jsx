import { useParams } from "react-router-dom";
import Search from "../components/Search";
import Card from "../components/Card";

const Category = () => {
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <h2>{category}</h2>

      <Search />
      <Card/>
    </div>
  );
};

export default Category;
