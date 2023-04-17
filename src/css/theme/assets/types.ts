type Assets =
  // variants
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "neutral"

  // basics
  | "bgPrimary"
  | "bgSecondary"
  | "bgTertiary"
  | "border"
  | "hover"
  | "title"
  | "textPrimary"
  | "textSecondary"
  | "disabledBg"
  | "disabledText"

  // input
  | "inputPlaceholder"

  // icon
  | "icon"

  // spinner
  | "spinnerBorder"
  | "spinnerColor"
  | "spinnerButtonColor"

  // button
  | "buttonSolidPrimaryBg"
  | "buttonSolidPrimaryText"
  | "buttonSolidPrimaryHover"
  | "buttonSolidSuccessBg"
  | "buttonSolidSuccessText"
  | "buttonSolidSuccessHover"
  | "buttonSolidWarningBg"
  | "buttonSolidWarningText"
  | "buttonSolidWarningHover"
  | "buttonSolidDangerBg"
  | "buttonSolidDangerText"
  | "buttonSolidDangerHover"
  | "buttonSolidNeutralBg"
  | "buttonSolidNeutralText"
  | "buttonSolidNeutralHover"
  | "buttonOutlinedBg"
  | "buttonOutlinedHover"
  | "buttonOutlinedPrimary"
  | "buttonOutlinedSuccess"
  | "buttonOutlinedWarning"
  | "buttonOutlinedDanger"
  | "buttonOutlinedNeutral"
  | "buttonGhostBg"
  | "buttonGhostPrimaryText"
  | "buttonGhostPrimaryHover"
  | "buttonGhostSuccessText"
  | "buttonGhostSuccessHover"
  | "buttonGhostWarningText"
  | "buttonGhostWarningHover"
  | "buttonGhostDangerText"
  | "buttonGhostDangerHover"
  | "buttonGhostNeutralText"
  | "buttonGhostNeutralHover"
  | "buttonLinkBg"
  | "buttonLinkPrimary"
  | "buttonLinkSuccess"
  | "buttonLinkWarning"
  | "buttonLinkDanger"
  | "buttonLinkNeutral"
  | "buttonAlternativeBg"
  | "buttonAlternativeText"
  | "buttonAlternativeBorder"
  | "buttonAlternativePrimaryHover"
  | "buttonAlternativeSuccessHover"
  | "buttonAlternativeWarningHover"
  | "buttonAlternativeDangerHover"
  | "buttonAlternativeNeutralHover"

  // table
  | "tableHeaderBg"
  | "tableRowBg"
  | "tableRowBgHover"
  | "tableBorder"
  | "tableRowBorder";

export type AssetsType = Record<Assets, string>;
