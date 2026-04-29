import type { Skill } from "../../types";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Image from "next/image";

const getIconUrl = (slug: string) =>
  `https://thesvg.org/icons/${slug}/default.svg`;

const getMonoIconUrl = (slug: string) =>
  `https://thesvg.org/icons/${slug}/mono.svg`;

const iconMap: Record<string, string> = {
  JavaScript: getIconUrl("javascript"),
  TypeScript: getIconUrl("typescript"),
  MUI: getIconUrl("mui"),
  "React JS": getIconUrl("react"),
  "Next JS": getIconUrl("nextdotjs"),
  Vite: getIconUrl("vite"),
  ".Net Core": getIconUrl("dotnet"),
  "C#": getIconUrl("csharp"),
  "Express JS": getMonoIconUrl("express"),
  MSSQL: getIconUrl("microsoft-sql-server"),
  MongoDB: getIconUrl("mongodb"),
  Python: getIconUrl("python"),
  "Gemini AI": getIconUrl("google-gemini"),
  "Stitch by Google": getIconUrl("google"),
  "GitHub Copilot": getMonoIconUrl("github-copilot"),
  Git: getIconUrl("git"),
  GitHub: getMonoIconUrl("github"),
  "GitHub Pages": getMonoIconUrl("github-pages"),
  "Git / GitHub": getMonoIconUrl("github"),
  Java: getIconUrl("java"),
  Selenium: getIconUrl("selenium"),
  Canva: getIconUrl("canva"),
  "Visual Studio": getIconUrl("visual-studio"),
  "VS Code": getIconUrl("visual-studio-code"),
  Eclipse: getIconUrl("eclipse-ide"),
  Postman: getIconUrl("postman"),
  Vercel: getMonoIconUrl("vercel"),
};

const darkModeInvertIcons = [
  "GitHub",
  "GitHub Copilot",
  "Git / GitHub",
  "Express JS",
  "GitHub Pages",
  "Vercel",
];

export const SkillCard: React.FC<{ skill: Skill; animate: boolean }> = ({
  skill,
  animate,
}) => {
  const theme = useTheme();
  const iconUrl = iconMap[skill.name] ?? getIconUrl("codeberg");
  const shouldInvertInDarkMode =
    darkModeInvertIcons.includes(skill.name) && theme.palette.mode === "dark";
  const imageFilter = shouldInvertInDarkMode ? "invert(1)" : "none";

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        minHeight: 112,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 1.5,
        border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
        borderRadius: "10px",
        bgcolor:
          theme.palette.mode === "dark"
            ? alpha(theme.palette.background.paper, 0.78)
            : alpha(theme.palette.background.paper, 0.94),
        backdropFilter: "blur(14px)",
        transition:
          "transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease, background-color 220ms ease",
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(14px)",
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
          transform: "none",
        },
        "&:hover": {
          borderColor: alpha(theme.palette.primary.main, 0.5),
          transform: animate ? "translateY(-4px)" : undefined,
          boxShadow:
            theme.palette.mode === "dark"
              ? `0 18px 42px ${alpha("#020617", 0.42)}`
              : `0 18px 42px ${alpha(theme.palette.primary.main, 0.13)}`,
          "& img": {
            filter: `${imageFilter === "invert(1)" ? "invert(1) " : ""}drop-shadow(0 8px 14px ${alpha(theme.palette.primary.main, 0.24)})`,
          },
        },
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          bgcolor: alpha(theme.palette.primary.main, 0.08),
          border: `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
          "& img": {
            transition: "filter 220ms ease",
            filter: imageFilter,
          },
        }}
      >
        <Image src={iconUrl} alt={skill.name} width={30} height={30} />
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 900,
            lineHeight: 1.2,
            overflowWrap: "anywhere",
          }}
        >
          {skill.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", fontWeight: 700 }}
        >
          {skill.category}
        </Typography>
      </Box>
    </Paper>
  );
};
