import { Row } from "../src/index";

const Rows = ({ data }) => {
  if (!data.length) return <p className="mt-10">Nothing to show</p>;
  return (
    <div className="w-full flex flex-col justify-center gap-2">
      {data.map((item, index) => (
        <Row key={item.id} {...item} idx={index} />
      ))}
    </div>
  );
};

export default Rows;
