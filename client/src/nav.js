import React from "react";

class Nav extends React.Component {
  render() {
    const { handleChange, handleSubmit, searchBy } = this.props;
    console.log(searchBy);
    return <div>searchBy</div>;
    // switch (searchBy) {
    //   case "title":
    //     return (
    //       <div>
    //         <input
    //           type="text"
    //           placeholder={`type here`}
    //           onChange={handleChange}
    //         />
    //       </div>
    //     );

    //   case "tag":
    //     return (
    //       <div>
    //         <select type="select">
    //           <option value="nature">all</option>
    //           <option value="city">title</option>
    //           <option value="skyline">tag</option>
    //           <option value="tree">tag</option>
    //           <option value="fall">tag</option>
    //           <option value="water">tag</option>
    //           <option value="asia">tag</option>
    //           <option value="canada">tag</option>
    //           <option value="canada">tag</option>
    //         </select>
    //       </div>
    //     );
    //   default:
    //     break;
    // }
  }
}
// <label htmlFor="search">
//   Search images by
//   <select type="select" onChange={handleChange}>
//     <option value="all">all</option>
//     <option value="title">title</option>
//     <option value="tag">tag</option>
//   </select>
//   <input type="text" placeholder={`type here`} onChange={handleChange} />
//   <input type="submit" value="Submit" onClick={handleSubmit} />
// </label>

export default Nav;
