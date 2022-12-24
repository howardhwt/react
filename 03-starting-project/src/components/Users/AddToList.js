import NewUser from "./NewUser";
import "./AddToList.css";
import RenderList from "./RenderList";

const AddToList = (props) => {
  let list;
  const addToListHandler = (data) => {
    list = [...data];
    console.log(list);
  };
  props.onAddToList(list);
  return (
    <div>
      <RenderList></RenderList>
    </div>
  );
};

export default AddToList;
