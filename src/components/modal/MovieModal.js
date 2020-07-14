// import React, { useState } from "react";
// import Modal from "react-modal";

// //Stores
// import movieStore from "../../stores/movieStore";

// const MovietModel = () => {
//   const [movie, setMovie] = useState({
//     name: "",
//     image: "",
//   });
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   addMovie(movie);
// };
// return (
//   <Modal
//     isOpen={isOpen}
//     onRequestClose={closeModal}
//     style={customStyles}
//     contentLabel="Courses Modal"
//   >
//     <h3>New Movie</h3>
//     <form onSubmit={handleSubmit}>
//       <div className="form-group row">
//         <div className="col-6" name="name">
//           <label>Add Movie</label>
//           <input
//             required
//             type="text"
//             name="name"
//             className="form-control"
//             onChange={handleChange}
//             value={course.name}
//           />
//         </div>
//       </div>

//       <div className="form-group">
//         <label>Image</label>
//         <input
//           type="text"
//           className="form-control"
//           name="image"
//           onChange={handleChange}
//           value={course.image}
//         />
//       </div>
//       <CreateButtonStyled className="btn float-right" type="submit">
//         ADD
//       </CreateButtonStyled>
//     </form>
//   </Modal>
// );

// export default CoursesModal;
