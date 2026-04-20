import {
  ALL_SECTION_LINKS,
  CONTACT_LINK,
  DEFAULT_SECTION_ID,
  getSectionHref,
  isSectionId,
  NAV_LINKS,
  type SectionId,
} from "@app/config/navigation";
import { ColorModeContext } from "@app/providers/ColorModeProvider";
import { PortfolioDataContext } from "@app/providers/PortfolioDataProvider";
import {
  Close,
  DarkMode,
  Download,
  Email,
  GitHub,
  LightMode,
  LinkedIn,
  Menu,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import type React from "react";
import { useCallback, useContext, useEffect, useState } from "react";

const Header: React.FC = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const data = useContext(PortfolioDataContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState<SectionId>(DEFAULT_SECTION_ID);
  const resumeHref = data?.SOCIAL_LINKS.resume;
  const resumeFileName = resumeHref
    ? decodeURIComponent(resumeHref.split("/").pop() || "resume.pdf")
    : "resume.pdf";
  const user = data?.USER ?? {
    initials: "U",
    fullName: "Portfolio User",
    firstName: "Portfolio",
    lastName: "User",
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  const syncActiveSectionFromScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    const sectionElements = ALL_SECTION_LINKS.map((link) =>
      document.getElementById(link.sectionId),
    ).filter(
      (section): section is HTMLElement => section instanceof HTMLElement,
    );

    let nextActive = DEFAULT_SECTION_ID;

    for (const section of sectionElements) {
      if (section.getBoundingClientRect().top <= 120) {
        nextActive = section.id as SectionId;
      }
    }

    setActiveSection(nextActive);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let animationFrameId = 0;

    const syncActiveSectionFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (isSectionId(hash)) {
        setActiveSection(hash);
        return;
      }
      syncActiveSectionFromScroll();
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(
        syncActiveSectionFromScroll,
      );
    };

    syncActiveSectionFromHash();
    handleScroll();

    window.addEventListener("hashchange", syncActiveSectionFromHash);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("hashchange", syncActiveSectionFromHash);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [syncActiveSectionFromScroll]);

  const navigateToSection =
    (sectionId: SectionId, shouldCloseDrawer = false) =>
    (event: React.MouseEvent<HTMLElement>) => {
      if (shouldCloseDrawer) {
        closeDrawer();
      }

      setActiveSection(sectionId);

      if (typeof window === "undefined") return;
      if (window.location.pathname !== "/") return;

      event.preventDefault();

      const target = document.getElementById(sectionId);
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });

      const nextHash = `#${sectionId}`;
      if (window.location.hash === nextHash) {
        window.history.replaceState(null, "", nextHash);
        return;
      }

      window.history.pushState(null, "", nextHash);
    };

  const drawer = (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        px: 1.5,
        py: 1.5,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 900, fontFamily: "Space Grotesk" }}
        >
          MENU
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Stack>
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.sectionId;

          return (
            <ListItem key={link.sectionId} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component="a"
                href={getSectionHref(link.sectionId)}
                onClick={navigateToSection(link.sectionId, true)}
                sx={{
                  borderRadius: 2,
                  bgcolor: isActive ? "primary.main" : "transparent",
                  color: isActive ? "primary.contrastText" : "text.primary",
                  "&:hover": {
                    bgcolor: isActive ? "primary.main" : "action.hover",
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontWeight: 800,
                    fontSize: "1.1rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}

        <Divider sx={{ my: 2 }} />

        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href={getSectionHref(CONTACT_LINK.sectionId)}
            onClick={navigateToSection(CONTACT_LINK.sectionId, true)}
            sx={{
              borderRadius: 2,
              bgcolor:
                activeSection === CONTACT_LINK.sectionId
                  ? "primary.main"
                  : "transparent",
              color:
                activeSection === CONTACT_LINK.sectionId
                  ? "primary.contrastText"
                  : "text.primary",
            }}
          >
            <ListItemText
              primary={CONTACT_LINK.label}
              primaryTypographyProps={{ fontWeight: 800 }}
            />
          </ListItemButton>
        </ListItem>
      </List>

      <Stack spacing={2} sx={{ mt: "auto" }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<Download />}
          component="a"
          href={resumeHref}
          download={resumeFileName}
          sx={{ fontWeight: 800, py: 1.5 }}
        >
          Download CV
        </Button>

        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            component="a"
            href={data?.SOCIAL_LINKS.github}
            target="_blank"
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href={data?.SOCIAL_LINKS.linkedin}
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
          <IconButton component="a" href={`mailto:${data?.SOCIAL_LINKS.email}`}>
            <Email />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={(theme) => ({
          borderRadius: 0,
          overflowX: "clip",
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(10,10,10,0.6)"
              : "rgba(255,255,255,0.65)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.08)"
              : "rgba(0,0,0,0.08)"
          }`,
          color: "text.primary",
          zIndex: theme.zIndex.appBar,
        })}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              height: 56,
              justifyContent: "space-between",
            }}
          >
            {/* Mobile Menu Left */}
            <Box
              sx={{
                display: { xs: "flex", lg: "none" },
                alignItems: "center",
                mr: 0.5,
              }}
            >
              <IconButton onClick={handleDrawerToggle} aria-label="Open menu">
                <Menu />
              </IconButton>
            </Box>

            {/* Logo */}
            <Box
              component="a"
              href={getSectionHref(DEFAULT_SECTION_ID)}
              onClick={navigateToSection(DEFAULT_SECTION_ID)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
                color: "inherit",
                minWidth: 0,
                flexGrow: { xs: 1, lg: 0 },
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  background: "linear-gradient(135deg, #6366f1, #a855f7)",
                  borderRadius: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 900,
                  boxShadow: "0 4px 10px rgba(99, 102, 241, 0.3)",
                }}
              >
                {user.initials}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  letterSpacing: -0.5,
                  fontFamily: "Space Grotesk",
                  fontSize: { xs: "1.1rem", sm: "1.35rem" },
                  display: { xs: "none", sm: "block" },
                  whiteSpace: "nowrap",
                }}
              >
                {user.fullName}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  letterSpacing: -0.3,
                  fontFamily: "Space Grotesk",
                  fontSize: "1.1rem",
                  display: { xs: "block", sm: "none" },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                }}
              >
                {user.firstName}
              </Typography>
            </Box>

            {/* Desktop Nav */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 1,
                justifyContent: "space-between",
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.sectionId;

                return (
                  <Button
                    key={link.sectionId}
                    component="a"
                    href={getSectionHref(link.sectionId)}
                    onClick={navigateToSection(link.sectionId)}
                    sx={{
                      px: 2,
                      fontWeight: 700,
                      color: isActive ? "primary.main" : "text.secondary",
                      position: "relative",
                      "&::after": isActive
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 4,
                            left: "20%",
                            right: "20%",
                            height: 2,
                            bgcolor: "primary.main",
                            borderRadius: 1,
                          }
                        : {},
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}

              <Box
                sx={{
                  ml: 2,
                  pl: 2,
                  borderLeft: `1px solid ${theme.palette.divider}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Button
                  size="small"
                  component="a"
                  href={getSectionHref(CONTACT_LINK.sectionId)}
                  onClick={navigateToSection(CONTACT_LINK.sectionId)}
                  variant={
                    activeSection === CONTACT_LINK.sectionId
                      ? "contained"
                      : "outlined"
                  }
                  sx={{ px: 2, fontWeight: 800 }}
                >
                  {CONTACT_LINK.label}
                </Button>
                <Tooltip title="Toggle Theme">
                  <IconButton size="small" onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                      <LightMode />
                    ) : (
                      <DarkMode />
                    )}
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            {/* Mobile */}
            <Box
              sx={{
                display: { xs: "flex", lg: "none" },
                alignItems: "center",
                gap: 0,
              }}
            >
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={closeDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            opacity: "inherit",
            borderRadius: 0,
            overflowX: "hidden",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
