import "./RenderList.css";

const RenderList = () => {
  const ListRender = (
    <div>
      <div>
        <label>Username</label>
        <div>name</div>
      </div>
      <div>
        <label>Age (Years)</label>
        <div>age</div>
      </div>
      <div>
        <label>ID</label>
        <div>age</div>
      </div>
    </div>
  );

  return <div>{ListRender}</div>;
};

export default RenderList;
