export let box_style = {
    backgroundColor: { md: "red", sm: "orange", xs: "coral" },
    borderColor: { md: "black", sm: "yellow", xs: "green" },
    borderWidth: "10px",
}
export let DrYK = {
    display: "flex",
    justifyContent: { md: "flex-end", sm: "flex-end", xs: "flex-end" },
}

export let PrjName = {
    display: "flex",
    justifyContent: { md: "center", sm: "center", xs: "center" },
    paddingTop: { md: "10px", sm: "10px", xs: "0px" },
    paddingBottom: { md: "10px", sm: "10px", xs: "0px" },
    fontWeight: "bold",
    border: "none"
}
export let SetProf = {
    display: "flex",
    justifyContent: "flex-end"
}
export let CardStl = {
    display: "inline-flex",
    justifyContent: "space-around"
}
export let Cardcrd = {
    display: 'flex',
    justifyContent: 'center'
}
export let cardRow = {
    marginTop: "20px",
    border: "1px solid black",
}
export let SchedTabBody = {
    '&:last-child td, &:last-child th': { border: 0 }
}
export let PatTabBody = {
    '&:last-child td, &:last-child th': { border: 0 }
}
export let BoxSearch = {
    '& > :not(style)': { m: 1, width: '25ch' }
}
export let SearchTextField = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
        color: 'white',
    },
    '& label': {
        color: 'white',
    },
}
const drawerWidth = 240;

export let AppBarStyle = {
    width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` },
    backgroundColor: '#98A8F8',
    border: 'none'
}
export let drnamegrd = {
    mr: 2, display: { sm: 'none' },
    paddingTop: '15'
}
export let MenuDrpDown = {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
    },
}

export let navComp = {
    width: { sm: drawerWidth }, flexShrink: { sm: 0 }
}

export let drToggle = {
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
}
export let drToggleOpen = {
    display: { xs: 'none', sm: 'block' },
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
}
export let MainSection = {
    flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },
    borderRadius: '50%'
}
export let inputSizze = {
    width: { sm: '40ch', md: '50ch', lg: '130ch' },
    margin: 1,
}
export let CrdSizze = {
    width: { sm: '550px', md: '550px', lg: '550px'},
    mr: 5.5,
    mb: 5.5,
    boxShadow: 2,
}
export let FourthBox = {
    width: { sm: '45%', md: '45%', lg: '10%' }
}
// export let ModelW={
//     // width:{xs:'120px',sm:'120px',md:'120px',lg:'520px'}
// }
export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '520px', sm: '520px', md: '520px', lg: '520px' },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export let CrdSizzeArt = {
    width: { sm: '355px', md: '355px', lg: '355px' },
    // width: { sm: '255px', md: '255px', lg: '255px' },
    mr: 5.5,
    mb: 5.5,
    // boxShadow:1,
    // borderRadius:'12px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
}

export let ArtBoxMD={
    display:'flex',
    justifyContent:{xs:'center',sm:'center',md:'center',lg:'space-evenly'}
}
export let FourthBoxArt = {
    width: { sm: '45%', md: '45%', lg: '10%' }
}
export let RotateBord = {
    border: 'none',
    transform: 'rotate(90deg)'
}

// export let MainLD = {
// height: { sm: '100%', md: '100%', lg: '100%' }
// }