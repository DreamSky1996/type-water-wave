import { AppBar, Toolbar, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ConnectButton from "./connect-button";
import { DRAWER_WIDTH, TRANSITION_DURATION } from "../../constants/style";
import { useAddress } from "../../hooks";
import { trim, shorten } from "../../helpers";
import VOCIcon from "../../assets/icons/voc-logo.png";
import "./header.scss";




const useStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: "100%",
            padding: "20px 0 30px 0",
        },
        justifyContent: "flex-end",
        alignItems: "flex-end",
        background: "transparent",
        backdropFilter: "none",
        zIndex: 10,
        
    },
    topBar: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: TRANSITION_DURATION,
        }),
        marginLeft: DRAWER_WIDTH,
        display: "flex",
    },
    topBarShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: TRANSITION_DURATION,
        }),
        marginLeft: 0,
    },
}));

function Header() {
    const classes = useStyles();
    const address = useAddress();

    return (
        <div className={`${classes.topBar} ${classes.topBarShift}`}>
            <Link href="/" className="dapp-logo-link">
                <img alt="" src={VOCIcon} className="dapp-logo"/>
            </Link>
            <AppBar position="sticky" className={classes.appBar} elevation={0}>
                
                <Toolbar disableGutters className="dapp-topbar">
                    
                    <div className="dapp-topbar-btns-wrap">
                        {address && (
                            <div className="wallet-link">
                                <Link href={`https://rinkeby.etherscan.io/address/${address}`} target="_blank">
                                    <p>{shorten(address)}</p>
                                </Link>
                            </div>
                        )}
                        <ConnectButton />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
