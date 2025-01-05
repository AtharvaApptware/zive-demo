import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";

import DonutChart from "components/charts/DonutChart";
import SearchInput from "components/search-input/SearchInput";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  dir?: string;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  dir,
  ...other
}) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3, mt: 2 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

const a11yProps = (index: number) => ({
  id: `tab-${index}`,
  "aria-controls": `tabpanel-${index}`,
});

const CustomButton: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      mr: 1,
      backgroundColor: isActive ? "#107ECB" : "transparent",
      color: isActive ? "white" : "#858585",
      borderRadius: "28px",
      border: `1px solid ${isActive ? "#107ECB" : "#858585"}`,
      fontSize: "12px",
      textTransform: "none",
      px: 2,
      py: 0.5,
      "&:hover": {
        backgroundColor: isActive ? "#107ECB" : "#f0f0f0",
      },
    }}
  >
    {label}
  </Button>
);

const CustomTabs: React.FC<{
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  labels: string[];
  variant?: "standard" | "scrollable" | "fullWidth";
}> = ({ value, onChange, labels, variant }) => (
  <Tabs
    value={value}
    onChange={onChange}
    textColor="primary"
    variant={variant}
    aria-label="tabs"
    sx={{
      backgroundColor: "white",
      borderRadius: "6px",
      color: "#858585",
    }}
  >
    {labels.map((label, index) => (
      <Tab
        key={index}
        label={label}
        {...a11yProps(index)}
        sx={{
          color: value === index ? "#0A3C5F" : "#858585",
        }}
      />
    ))}
  </Tabs>
);

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const [innerTabIndex, setInnerTabIndex] = useState(0);
  const [selectedButton, setSelectedButton] = useState<string>("summary");

  const mainTabLabels = [
    "CHARTS",
    "SHARES INFO",
    "PEOPLE",
    "COI",
    "CORPORATE HISTORY",
    "FUNDING HISTORY",
  ];

  const innerTabLabels = [
    "SHARES ISSUED AND OUTSTANDING",
    "FULLY DILUTED SHARES",
  ];
  const buttonLabels = ["Summary", "Shareholder", "Vote", "Type"];

  return (
    <Box sx={{ backgroundColor: "white", width: "100%", borderRadius: "10px" }}>
      <AppBar position="static" sx={{ borderRadius: "10px" }}>
        <CustomTabs
          value={tabIndex}
          onChange={(e, newValue) => setTabIndex(newValue)}
          labels={mainTabLabels}
          variant="fullWidth"
        />
      </AppBar>
      <TabPanel value={tabIndex} index={0} dir={theme.direction}>
        Item One
      </TabPanel>
      <TabPanel value={tabIndex} index={1} dir={theme.direction}>
        <Box>
          {buttonLabels.map((label) => (
            <CustomButton
              key={label}
              label={label}
              isActive={selectedButton === label.toLowerCase()}
              onClick={() => setSelectedButton(label.toLowerCase())}
            />
          ))}
          <Box sx={{ mt: 2, backgroundColor: "white", borderRadius: "10px" }}>
            <AppBar
              position="static"
              sx={{ borderRadius: "10px", boxShadow: "none" }}
            >
              <CustomTabs
                value={innerTabIndex}
                onChange={(e, newValue) => setInnerTabIndex(newValue)}
                labels={innerTabLabels}
                variant="standard"
              />
            </AppBar>
            <TabPanel value={innerTabIndex} index={0} dir={theme.direction}>
              <SearchInput
                placeholder="Search"
                value={""}
                onChange={(e) => console.log(e.target.value)}
                sx={{ width: "210px", height: "40px" }}
                inputProps={{
                  "aria-label": "Search",
                }}
              />
              <DonutChart />
            </TabPanel>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={tabIndex} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default Dashboard;
