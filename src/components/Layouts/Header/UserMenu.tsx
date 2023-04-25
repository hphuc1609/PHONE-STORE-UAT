import { AccountCircle, Logout, Person } from "@mui/icons-material"
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import ListItemIcon from "@mui/material/ListItemIcon"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const menuItems = [
  {
    label: "Người dùng",
    icon: <Person fontSize="small" />,
    link: "/user",
  },
  {
    label: "Đăng xuất",
    icon: <Logout fontSize="small" />,
    link: "/",
  },
]

const UserMenu = () => {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null)

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(event.currentTarget)
  }
  const handleCloseMenu = (link: string) => {
    setOpenMenu(null)
    navigate(link)
  }

  return (
    <>
      <Box display="flex" alignItems="center">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenMenu}
          color="inherit"
          sx={{ p: 1 }}
        >
          <AccountCircle />
        </IconButton>
        <Typography sx={{ cursor: "default" }}>Tài khoản</Typography>
      </Box>
      <Menu
        id="account-menu"
        anchorEl={openMenu}
        onClose={handleCloseMenu}
        keepMounted
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(openMenu)}
      >
        {menuItems.map((menu) => (
          <MenuItem key={menu.label} onClick={() => handleCloseMenu(menu.link)}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <Typography>{menu.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default UserMenu