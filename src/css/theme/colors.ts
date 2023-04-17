type Colors =
  | "grey"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

type Variants = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type CollorsType = Record<Colors, Record<Variants, string>> & {
  black: string;
  white: string;
};

export const colors: CollorsType = {
  white: "#ffffff",
  black: "#000000",
  grey: {
    1: "#F7F7F7",
    2: "#F3F4F6",
    3: "#E5E7EB",
    4: "#D1D5DB",
    5: "#9CA3AF",
    6: "#6B7280",
    7: "#4B5563",
    8: "#3a3d4a",
    9: "#2e3039",
    10: "#1f2028",
  },
  red: {
    1: "#FDF2F2",
    2: "#FDE8E8",
    3: "#FBD5D5",
    4: "#F8B4B4",
    5: "#F98080",
    6: "#F05252",
    7: "#E02424",
    8: "#C81E1E",
    9: "#9B1C1C",
    10: "#771D1D",
  },
  orange: {
    1: "#FFF8F1",
    2: "#FEECDC",
    3: "#FCD9BD",
    4: "#FDBA8C",
    5: "#FF8A4C",
    6: "#FF5A1F",
    7: "#D03801",
    8: "#B43403",
    9: "#8A2C0D",
    10: "#771D1D",
  },
  yellow: {
    1: "#FDFDEA",
    2: "#FDF6B2",
    3: "#FCE96A",
    4: "#FACA15",
    5: "#E3A008",
    6: "#C27803",
    7: "#9F580A",
    8: "#8E4B10",
    9: "#723B13",
    10: "#633112",
  },
  green: {
    1: "#F3FAF7",
    2: "#DEF7EC",
    3: "#BCF0DA",
    4: "#84E1BC",
    5: "#31C48D",
    6: "#0E9F6E",
    7: "#057A55",
    8: "#046C4E",
    9: "#03543F",
    10: "#014737",
  },
  teal: {
    1: "#EDFAFA",
    2: "#D5F5F6",
    3: "#AFECEF",
    4: "#7EDCE2",
    5: "#16BDCA",
    6: "#0694A2",
    7: "#047481",
    8: "#036672",
    9: "#05505C",
    10: "#014451",
  },
  blue: {
    1: "#f0fbff",
    2: "#d9f3ff",
    3: "#b0e3ff",
    4: "#87d1ff",
    5: "#5ebcff",
    6: "#36a3ff",
    7: "#2381d9",
    8: "#1460b3",
    9: "#08448c",
    10: "#052d66",
  },
  indigo: {
    1: "#F0F5FF",
    2: "#E5EDFF",
    3: "#CDDBFE",
    4: "#B4C6FC",
    5: "#8DA2FB",
    6: "#6875F5",
    7: "#5850EC",
    8: "#5145CD",
    9: "#42389D",
    10: "#362F78",
  },
  purple: {
    1: "#F6F5FF",
    2: "#EDEBFE",
    3: "#DCD7FE",
    4: "#CABFFD",
    5: "#AC94FA",
    6: "#9061F9",
    7: "#7E3AF2",
    8: "#6C2BD9",
    9: "#5521B5",
    10: "#4A1D96",
  },
  pink: {
    1: "#FDF2F8",
    2: "#FCE8F3",
    3: "#FAD1E8",
    4: "#F8B4D9",
    5: "#F17EB8",
    6: "#E74694",
    7: "#D61F69",
    8: "#BF125D",
    9: "#99154B",
    10: "#751A3D",
  },
};
