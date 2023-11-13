import {IconButton} from "@mui/material";
import {ArrowBack} from "@material-ui/icons";

export default function GoBackButton() {
    return (
        <IconButton onClick={() => window.history.back()}>
            <ArrowBack/>
        </IconButton>
    )
}
