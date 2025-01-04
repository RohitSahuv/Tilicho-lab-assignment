export const SUCCESS_CODE = 200;
export const FIRST_PAGE = 1;
export const PAGE_LIMIT = 10;
export const INVALID_ACCESS_TOKEN = 401;

export const actionList = {
  call: 1
};

export const tabs = ["New Leads", "Active Leads", "All Leads"];


export const SOMETHING_WENT_WRONG = "Something went wrong";


//popup message
export const LEAD_MANAGEMENT = "LEAD";


//Styles
export const PRIMARY_BUTTON_VARIANT = "primary";
export const SECONDARY_BUTTON_VARIANT = "secondary";
export const FULL_WIDTH = "full";
export const CUSTOM_WIDTH = "custom";
export const FIXED_WIDTH = "fixed";
export const ROW_DIRECTION = "row";
export const COLUMN_DIRECTION = "column";
export const PRIMARY_COLOR = "primary";
export const SECONDARY_COLOR = "secondary";

//date format
export const DEFAULT_DATE_FORMAT = "dd/MM/yyyy";
export const DEFAULT_DATE_TIME_FORMAT = "dd/MM/yyyy hh:mm:ss";

export const DOTS = "...";

export enum AppColors {
  Primary = "#1C1A38",
  Secondary = "#FFFFFF",
  AppWhite = "#f8f8f8",
  White = "#ffffff",
  Black = "#000000",
  Grey = "#999999",
  GreyOne = "#ccc",
  BgColor = "#F0F2F5",
  LightGrey = "#d3d3d3",
  DarkGrey = "rgb(133 129 129 / 88%)",
  BlackOverlay = "#0000009f",
  Violet = "#2a132e",
  Blue = "#1c1a38",
  Active = "rgba(221,221,221,0.4)",
  GreyTwo = "#d3d3d37a",
  LighterGrey = "#d3d3d3",
  LightYellow = "#FFFF00",
  Yellow = "#f0ad4e",
  LightGreen = "#90EE90",
  LightBlue = "#add8e6",
  LightRed = "#ffcccb",
  DarkRed = "#C90000",
  LightBrown = "#d3d3d333",
  ContainerBg = "rgb(255, 255, 255)",
  TextColor = "#444444",
  BlackText = "rgba(0,0,0,.85)",
  BgContainer = "#f9fafc",
  headerTextColor = "#7042f7",
  BgGrey = "#DADADA",
  BtnBlue = "#3B86FF",
  LightPurple = "#A78AFF",
  DarkPurple = "#7042f7",
  BgGreyContainer = "#F5F6FA",
  GreyThree = "#4D4F5C",
  SkyBlue = "#3b86ff",
  Danger = "#b70000",
  Green = "#007000",
  ParotGreen = "#08db08",
  PaleBrown = "#f2827f",
  DarkParotGreen = "#2aff1a",
  MediumBlue = "#40E0D0",
  red = "#ff0000",
  darkGreen = "#00FF00",
  darkBlue = "#003153",
  Orange = "#FFA500",
}

export const leadsData = [
  { id: 1, name: "Srinivas Ram", location: "Hyderabad", assignedOn: 1705410720, leadType: "Hot", tab: "New Leads" },
  { id: 2, name: "Janani Ramesh", location: "Vizag", assignedOn: 1705746720, leadType: "Medium", tab: "Active Leads" },
  { id: 3, name: "Seema Rao", location: "Vijayawada", assignedOn: 1706082720, leadType: "Cold", tab: "All Leads" },
  { id: 4, name: "Madhu Kumar", location: "Bangalore", assignedOn: 1706418720, leadType: "Hot", tab: "New Leads" },
  { id: 5, name: "Ravi Charan", location: "Gujarat", assignedOn: 1706754720, leadType: "Medium", tab: "Active Leads" },
  { id: 6, name: "Rajesh Kumar", location: "Chennai", assignedOn: 1707090720, leadType: "Cold", tab: "All Leads" },
  { id: 7, name: "Srinivas Ram", location: "Hyderabad", assignedOn: 1707426720, leadType: "Hot", tab: "New Leads" },
  { id: 8, name: "Janani Ramesh", location: "Vizag", assignedOn: 1707762720, leadType: "Medium", tab: "Active Leads" },
  { id: 9, name: "Seema Rao", location: "Vijayawada", assignedOn: 1708098720, leadType: "Cold", tab: "All Leads" },
  { id: 10, name: "Madhu Kumar", location: "Bangalore", assignedOn: 1708434720, leadType: "Hot", tab: "New Leads" },
  { id: 11, name: "Ravi Charan", location: "Gujarat", assignedOn: 1708770720, leadType: "Medium", tab: "Active Leads" },
  { id: 12, name: "Rajesh Kumar", location: "Chennai", assignedOn: 1709106720, leadType: "Cold", tab: "All Leads" },
  { id: 13, name: "Srinivas Ram", location: "Hyderabad", assignedOn: 1709442720, leadType: "Hot", tab: "New Leads" },
  { id: 14, name: "Janani Ramesh", location: "Vizag", assignedOn: 1709778720, leadType: "Medium", tab: "Active Leads" },
  { id: 15, name: "Seema Rao", location: "Vijayawada", assignedOn: 1710114720, leadType: "Cold", tab: "All Leads" },
  { id: 16, name: "Madhu Kumar", location: "Bangalore", assignedOn: 1710450720, leadType: "Hot", tab: "New Leads" },
  { id: 17, name: "Ravi Charan", location: "Gujarat", assignedOn: 1710786720, leadType: "Medium", tab: "Active Leads" },
  { id: 18, name: "Rajesh Kumar", location: "Chennai", assignedOn: 1711122720, leadType: "Cold", tab: "All Leads" },
  { id: 19, name: "Srinivas Ram", location: "Hyderabad", assignedOn: 1711458720, leadType: "Hot", tab: "New Leads" },
  { id: 20, name: "Janani Ramesh", location: "Vizag", assignedOn: 1711794720, leadType: "Medium", tab: "Active Leads" },
  { id: 21, name: "Seema Rao", location: "Vijayawada", assignedOn: 1712130720, leadType: "Cold", tab: "All Leads" },
  { id: 22, name: "Madhu Kumar", location: "Bangalore", assignedOn: 1712466720, leadType: "Hot", tab: "New Leads" },
  { id: 23, name: "Ravi Charan", location: "Gujarat", assignedOn: 1712802720, leadType: "Medium", tab: "Active Leads" },
  { id: 24, name: "Rajesh Kumar", location: "Chennai", assignedOn: 1713138720, leadType: "Cold", tab: "All Leads" },
  { id: 25, name: "Srinivas Ram", location: "Hyderabad", assignedOn: 1713474720, leadType: "Hot", tab: "New Leads" },
  { id: 26, name: "Janani Ramesh", location: "Vizag", assignedOn: 1735740720, leadType: "Medium", tab: "Active Leads" },
  { id: 27, name: "Seema Rao", location: "Vijayawada", assignedOn: 1736076720, leadType: "Cold", tab: "All Leads" },
  { id: 28, name: "Madhu Kumar", location: "Bangalore", assignedOn: 1736412720, leadType: "Hot", tab: "New Leads" },
  { id: 29, name: "Ravi Charan", location: "Gujarat", assignedOn: 1736748720, leadType: "Medium", tab: "Active Leads" },
  { id: 30, name: "Rajesh Kumar", location: "Chennai", assignedOn: 1737084720, leadType: "Cold", tab: "All Leads" },
  { id: 31, name: "Srinivas Ram", location: "Hyderabad", assignedOn: 1737420720, leadType: "Hot", tab: "New Leads" },
  { id: 32, name: "Janani Ramesh", location: "Vizag", assignedOn: 1737756720, leadType: "Medium", tab: "Active Leads" },
  { id: 33, name: "Seema Rao", location: "Vijayawada", assignedOn: 1738092720, leadType: "Cold", tab: "All Leads" },
];
