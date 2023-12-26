import { useState } from "react";
import "./Item.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Item(props) {
  const [show, setShow] = useState(false);
  const { title, description } = props;

  return (
    <div className="container">
      <section className="w-800 mx-auto p-4 mb-6 border-3 border-transparent rounded-5 shadow-md">
        <div className="content flex justify-between items-center">
          <h1 className="text-xl font-bold">{title}</h1>
          <button
            className={`btn ${show ? "btn-danger" : "btn-success"}`}
            onClick={() => setShow(!show)}
          >
            {show ? <FaRegEyeSlash/> : <FaRegEye/>}
          </button>
        </div>
        <div>{show && <p className="text-left">{description}</p>}</div>
      </section>
    </div>
  );
}
export default Item;
