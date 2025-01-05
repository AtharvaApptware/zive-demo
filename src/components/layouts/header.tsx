import Logo from "@assets/zive_logo.svg";
import { Avatar } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SearchInput from "components/search-input/SearchInput";

interface Props {
  isLandingPage?: string;
}

const Header: React.FC<Props> = ({ isLandingPage }) => {
  return (
    <div className="flex items-start justify-between mt-4">
      {isLandingPage ? (
        <div>
          <img src={Logo} alt="Logo" className="h-8 -mb-2 ml-2" />

          <SearchInput
            placeholder="Search Funds"
            value={""}
            onChange={(e) => console.log(e.target.value)}
            sx={{ width: "210px", height: "40px" }}
            inputProps={{
              "aria-label": "Search Funds",
            }}
          />
        </div>
      ) : (
        <div />
      )}
      <div className="flex flex-col">
        <div className="flex items-center space-x-4">
          <FileDownloadOutlinedIcon className="text-[#858585]" />
          <NotificationsNoneOutlinedIcon className="text-[#858585]" />
          <span className="text-[#858585]">Edward Hudson</span>
          <Avatar
            alt="Avatar"
            src={
              "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"
            }
            sx={{ height: 28, width: 28 }}
          />
        </div>
        {isLandingPage && (
          <div className="flex justify-end mt-5">
            <SwapVertIcon />
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
