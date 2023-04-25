import { Build, Call, Home, Info, Newspaper } from "@mui/icons-material"
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material"
import type { NavItem } from "models/navigation"
import { useNavigate } from "react-router-dom"
import { navBackground } from "styles/config"

const navItems: NavItem[] = [
  {
    name: "Trang chủ",
    icon: <Home />,
    link: "/",
  },
  {
    name: "Giới thiệu",
    icon: <Info />,
    link: "/about",
  },
  {
    name: "Tin tức",
    icon: <Newspaper />,
    link: "/news",
  },
  {
    name: "Bảo hành",
    icon: <Build />,
    link: "/guarantee",
  },
  {
    name: "Liên hệ",
    icon: <Call />,
    link: "/contact",
  },
]

const Navbar = () => {
  const navigate = useNavigate()

  const handleClickItem = (link: string) => {
    navigate(link)
  }

  return (
    <Box
      position="sticky"
      gridArea="nav"
      display="flex"
      justifyContent="center"
      bgcolor={navBackground}
      top={0}
      boxShadow="0 2px 10px 0 rgba(0,0,0,0.2)"
      zIndex={999}
    >
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          p: 0,
        }}
      >
        {navItems.map((item) => (
          <ListItemButton
            key={item.name}
            sx={{ flex: "unset", minWidth: 150, textAlign: "center" }}
            onClick={() => handleClickItem(item.link)}
          >
            <ListItemIcon sx={{ minWidth: "unset" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}

export default Navbar