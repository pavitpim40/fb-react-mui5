import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  styled,
} from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled("div")(({ theme }) => ({
    // backgroundColor: "white",
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled("div")(({ theme }) => ({
    // backgroundColor: "white",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <AppBar position="stick">
      <StyledToolbar>
        {/* Left Nav */}
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          PAVIT DEV
        </Typography>
        <SpaIcon sx={{ display: { xs: "block", sm: "none" } }} />

        {/* Search Bart */}
        <Search>
          <InputBase placeholder="search..." />
        </Search>

        {/* Icon - when Destop Mode */}
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsNoneIcon />
          </Badge>
          <Avatar
            style={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </Icons>

        {/* Icon - when Mobile Mode */}
        <UserBox>
          <Avatar
            style={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
