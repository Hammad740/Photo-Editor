import './index.css';
const Navbar = ({ setBackgroundImage }) => {
  console.log(setBackgroundImage);
  return (
    <div className="navbar">
      <span>Photo editor</span>
      <input
        type="text"
        placeholder="Image link..."
        onChange={(e) => {
          setBackgroundImage(e.target.value);
        }}
      />
    </div>
  );
};

export default Navbar;
