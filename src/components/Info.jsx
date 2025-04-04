import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const SmallListItemText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontSize: "0.85rem",
    lineHeight: 1.2,
  },
});

export default function Info({ open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Info</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

            {/* Update Log Section */}
            <Typography variant="h6" component="h3" style={{ marginTop: '10px' }}>
              Update Log
            </Typography>
            <List>
              <ListItem>
                <SmallListItemText primary="v0.0.7 - Updated Genshin Impact - Paimon's Paintings to Set 40." />
              </ListItem>
              <ListItem>
                <SmallListItemText primary="v0.0.6 - Updated Honkai: Star Rail to Pom-Pom Gallery Set 18." />
              </ListItem>
              <ListItem>
                <SmallListItemText primary="v0.0.5 - Updated Wuthering Waves to Vol 3, added tag for Arknights." />
              </ListItem>
              <ListItem>
                <SmallListItemText primary="v0.0.4 - Updated Wuthering Waves to Vol 1." />
              </ListItem>
              <ListItem>
                <SmallListItemText primary="v0.0.3 - Updated Genshin Impact - Paimon's Paintings to Set 35." />
              </ListItem>
              <ListItem>
                <SmallListItemText primary="v0.0.2 - Updated Genshin Impact - Paimon's Paintings to Set 14." />
              </ListItem>
              <ListItem>
                <SmallListItemText primary="v0.0.1 - Added Game Filtering Tag." />
              </ListItem>
            </List>

            <Divider sx={{ mt: 10, mb: 2 }} />

            {/* GitHub Link */}
            <Typography variant="h6" component="h3">
              GitHub Link
            </Typography>
            <List>
              <ListItem
                button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/mihane-ichinose/mihane-stickers-station")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="GitHub"
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Mihane Stickers Station" secondary="Source Code" />
              </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
