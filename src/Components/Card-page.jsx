
import { useDispatch, useSelector } from "react-redux";

export default function Cardpage() {
  const { addlist } = useSelector((state) => state);
  const dispatch = useDispatch();

  // We use document.querySelector to access inputs because useRef is in Addcard component
  const handleEdit = (item) => {
    // Set the values in the input boxes (DOM access)
    document.querySelector("input[placeholder='Add Title']").value = item.title;
    document.querySelector("input[placeholder='Add Post']").value = item.body;

    // Set the edit ID
    dispatch({ type: "SET_EDIT_ID", payload: item.id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETEITEM", payload: id });
  };

  return (
    <div className="container">
      <div className="row">
        {addlist.map((item) => (
          <div className="col-md-4 mb-3" key={item.id}>
            <div className="card-item">
              <span>{item.id}</span>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <div className="card_button">
                <button onClick={() => handleEdit(item)} className="edit">
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)} className="delete">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
