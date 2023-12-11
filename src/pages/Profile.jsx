import { HiChevronLeft, HiPower } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { HiOutlineWallet } from "react-icons/hi2";
import { HiOutlineMoon } from "react-icons/hi2";
import { HiOutlineSun } from "react-icons/hi2";
import { useAuthStore } from "../store/AuthStore";
import { Link } from "react-router-dom";
import { useUsuariosStore } from "../store/UserStore";
export const Profile = ({ user }) => {
  const { signOut } = useAuthStore();
  const { datausuarios, updateUser } = useUsuariosStore();
  const themebd = datausuarios[0].theme === "0" ? "light" : "dark";
  // console.log(themebd);

  const edit_user = async () => {
    const c = confirm("Estás seguro de cambiar el thema?");
    if (c) {
      const choseTheme = themebd === "dark" ? "0" : "1";
      const p = {
        theme: choseTheme,
        id: datausuarios[0].id,
      };
      await updateUser(p);
      alert("se cambió");
    } else {
      alert("NO se cambió de theme");
    }
  };

  return (
    <div className="">
      <Link to="/" className="flex items-center mb-5">
        <HiChevronLeft style={{ fontSize: "2rem" }} />
        <h2 className="text-4xl">Profile</h2>
      </Link>
      <div className="avatar online m-4">
        <div className="w-24 rounded-full ring ring-[#46DE99] ring-offset-base-100 ring-offset-2">
          <img src={`${user.picture}`} alt="picture-profile" />
        </div>
      </div>
      <h3 className="flex flex-col">
        Hello,
        <span className="font-semibold text-xl">
          {user.full_name.replace(/\([^)]*\)/g, "").trim()}
        </span>
      </h3>
      <div className="flex flex-col gap-3">
        <div className="btn bg-base-100  border-2 rounded-md flex gap-2 justify-between p-2 px-3 items-center">
          <HiOutlineWallet className="active text-xl  font-bold" />
          <span className="font-semibold">My Orders</span>
          <HiChevronRight className="icon" />
        </div>
        <div
          className="btn bg-base-100 border-2 rounded-md flex gap-2 justify-between p-2 px-3 items-center "
          onClick={edit_user}
        >
          {themebd === "dark" ? (
            <HiOutlineMoon className="active text-xl  font-bold" />
          ) : (
            <HiOutlineSun className="active text-xl  font-bold" />
          )}

          <span className="font-semibold">Theme: {themebd}</span>
          <HiChevronRight className="icon" />
        </div>
        <div
          className="btn rounded-md border-2 btn-outline btn-error flex gap-2 justify-between p-2 px-3 items-center "
          onClick={signOut}
        >
          <HiPower className="text-xl font-bold " />
          <span className="font-semibold">LogoOut</span>
          <HiChevronRight className="icon" />
        </div>
      </div>
    </div>
  );
};
