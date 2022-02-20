import React, { useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "../hook/useTranslation";
import {
  Container,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LangIcon from "@mui/icons-material/Language";
import messages from "../locales/topNav.json";

function MenuList({ openEl, onOpen, items, ...props }) {
  return (
    <Menu
      anchorEl={openEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(openEl)}
      {...props}
    >
      {items.map(([key, val]) => (
        <MenuItem key={key} onClick={() => onOpen(key)}>
          <Typography textAlign="center">{val}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}

function TopNav() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const { pathname, asPath, push } = useRouter();
  const { t, obj } = useTranslation(messages);
  const pages = Object.entries(obj("pages"));
  const lauguages = { en: "EN", tc: "繁", sc: "簡" };

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLangMenu = (e) => {
    setAnchorElLang(e.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const switchPage = (page) => {};

  const switchLang = (lang) => {
    push(pathname, asPath, { locale: lang });
    handleCloseLangMenu();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: "flex" }}
          >
            {t("logo", { dev: "Tommy Kwok" })}
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map(([key, page]) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <IconButton
              size="large"
              onClick={handleOpenLangMenu}
              color="inherit"
            >
              <LangIcon />
            </IconButton>
            <MenuList
              id="menu-lang"
              openEl={anchorElLang}
              onClose={handleCloseLangMenu}
              onOpen={switchLang}
              items={Object.entries(lauguages)}
            />
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <MenuList
              id="menu-appbar"
              openEl={anchorElNav}
              onClose={handleCloseNavMenu}
              onOpen={switchPage}
              sx={{ display: { md: "none" } }}
              items={pages}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopNav;
