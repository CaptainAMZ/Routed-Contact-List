import { Link } from "react-router-dom";

const Button = ({
  content,
  color = "black",
  link,
  width = 100,
  bgColor = "#D9D9D9",
  action,
}) => {
  if (link == null)
    return (
      <button
        onClick={action}
        className="py-2 text-center rounded-lg"
        style={{ width: `${width}px`, backgroundColor: bgColor, color: color }}
      >
        {content}
      </button>
    );

  return (
    <Link to={`${link}`}>
      <button
        onClick={action}
        className="py-2 text-center rounded-lg"
        style={{ width: `${width}px`, backgroundColor: bgColor, color: color }}
      >
        {content}
      </button>
    </Link>
  );
};

export default Button;
