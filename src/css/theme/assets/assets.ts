import { colors } from "../colors";
import { AssetsType } from "./types";

const primary = colors.blue[6];
const success = colors.green[6];
const warning = colors.yellow[6];
const danger = colors.red[6];
const neutral = colors.black;

export const assets: AssetsType = {
  // variants
  primary,
  success,
  warning,
  danger,
  neutral,

  // basics
  bgPrimary: colors.grey[1],
  bgSecondary: colors.white,
  bgTertiary: colors.grey[2],

  border: "rgba(0, 0, 0, 0.1)",
  hover: "rgba(0, 0, 0, 0.05)",

  title: colors.black,
  textPrimary: colors.grey[9],
  textSecondary: colors.grey[7],

  disabledBg: colors.grey[4],
  disabledText: colors.grey[5],

  // input
  inputPlaceholder: colors.grey[6],

  // icon
  icon: colors.grey[9],

  //button
  buttonSolidPrimaryBg: primary,
  buttonSolidPrimaryText: colors.white,
  buttonSolidPrimaryHover: colors.blue[5],
  buttonSolidSuccessBg: success,
  buttonSolidSuccessText: colors.white,
  buttonSolidSuccessHover: colors.green[5],
  buttonSolidWarningBg: warning,
  buttonSolidWarningText: colors.black,
  buttonSolidWarningHover: colors.yellow[5],
  buttonSolidDangerBg: danger,
  buttonSolidDangerText: colors.white,
  buttonSolidDangerHover: colors.red[5],
  buttonSolidNeutralBg: neutral,
  buttonSolidNeutralText: colors.white,
  buttonSolidNeutralHover: colors.grey[9],

  buttonOutlinedBg: "transparent",
  buttonOutlinedHover: colors.grey[2],
  buttonOutlinedPrimary: primary,
  buttonOutlinedSuccess: success,
  buttonOutlinedWarning: warning,
  buttonOutlinedDanger: danger,
  buttonOutlinedNeutral: neutral,

  buttonGhostBg: "transparent",
  buttonGhostPrimaryText: primary,
  buttonGhostPrimaryHover: colors.blue[2],
  buttonGhostSuccessText: success,
  buttonGhostSuccessHover: colors.green[2],
  buttonGhostWarningText: warning,
  buttonGhostWarningHover: colors.yellow[2],
  buttonGhostDangerText: danger,
  buttonGhostDangerHover: colors.red[2],
  buttonGhostNeutralText: neutral,
  buttonGhostNeutralHover: colors.grey[3],

  buttonLinkBg: "transparent",
  buttonLinkPrimary: primary,
  buttonLinkSuccess: success,
  buttonLinkWarning: warning,
  buttonLinkDanger: danger,
  buttonLinkNeutral: neutral,

  buttonAlternativeBg: "transparent",
  buttonAlternativeText: colors.grey[6],
  buttonAlternativeBorder: colors.grey[4],
  buttonAlternativePrimaryHover: primary,
  buttonAlternativeSuccessHover: success,
  buttonAlternativeWarningHover: warning,
  buttonAlternativeDangerHover: danger,
  buttonAlternativeNeutralHover: neutral,

  // spinner
  spinnerColor: primary,
  spinnerBorder: colors.grey[3],
  spinnerButtonColor: colors.grey[8],

  //table
  tableHeaderBg: colors.grey[2],
  tableRowBg: colors.white,
  tableRowBgHover: colors.grey[1],
  tableBorder: colors.grey[3],
  tableRowBorder: colors.grey[2],
};
