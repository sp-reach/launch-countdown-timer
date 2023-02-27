import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import pintrest from "../assets/icon-pinterest.svg";
import "./Links.scss";

export function Links() {
  return (
    //
    <div className="Links">
      <img className="IconLink" src={pintrest} alt="Pintrest Logo" />
      <img className="IconLink" src={facebook} alt="Facebook Logo" />
      <img className="IconLink" src={instagram} alt="Instagram Logo" />
    </div>
    //
  );
}
