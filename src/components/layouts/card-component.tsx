import { useNavigate } from "react-router-dom";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";

const CardComponent = () => {
  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate("/dashboard");
  };

  const rightHandSideData = [
    { title: "Shareholders", value: "28" },
    { title: "Priced Rounds", value: "1" },
    { title: "Allocated Shares", value: "19,6558,715" },
    { title: "Issue and Outstanding", value: "18,223,715" },
  ];
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md h-[295px] w-[678px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CloudCircleIcon className="text-[#7c329b]" />
          <span className="font-semibold text-base text-black">
            DriodCloud Inc
          </span>
        </div>
        <button
          className="bg-[#0a3c5f] text-white rounded-md w-[108px] h-[40px] font-semibold text-xs"
          type="button"
          onClick={handleNavigateToDashboard}
        >
          Dashboard
        </button>
      </div>

      <div className="flex items-start space-x-2 mt-10">
        <div className="flex flex-col space-y-2 w-full">
          <span className="text-[#858585] font-normal text-xs">Fund Size</span>
          <span className="font-bold text-[#0A3C5F] text-[28px]">
            22,968,539.79
          </span>
        </div>
        <div className="flex flex-col space-y-4 w-full">
          {rightHandSideData.map((data) => (
            <div className="flex items-center justify-between">
              <span className="text-[#858585] font-normal text-xs">
                {data?.title}
              </span>
              <span className="text-[#0A3C5F] text-sm font-semibold">
                {data?.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
