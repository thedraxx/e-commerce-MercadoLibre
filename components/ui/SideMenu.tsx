import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, CheckroomOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, GroupAddOutlined, HelpCenterOutlined, LocalGroceryStoreOutlined, LocalOfferOutlined, LoginOutlined, MaleOutlined, SearchOutlined, StoreOutlined, Storefront, StorefrontOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { useContext } from "react"
import { SideMenuContext } from "../../context"


export const SideMenu = () => {
    const { isOpen, handleOpen } = useContext(SideMenuContext)

    console.log(isOpen)

    return (
        <Drawer
            open={isOpen}
            variant='temporary'
            onClose={() => {
                handleOpen()
            }}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>

                    <ListItem>
                        <Input
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                    >
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <GroupAddOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Crea tu cuenta'} />
                    </ListItem>


                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Ingresa'} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <ConfirmationNumberOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Mis Compras'} />
                    </ListItem>


                    <ListItem button >
                        <ListItemIcon>
                            <LocalOfferOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Ofertas'} />
                    </ListItem>

                    <ListItem button >
                        <ListItemIcon>
                            <StorefrontOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Supermercado'} />
                    </ListItem>

                    <ListItem button >
                        <ListItemIcon>
                            <CheckroomOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Moda'} />
                    </ListItem>


                    <ListItem button>
                        <ListItemIcon>
                            <StoreOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Vender'} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <HelpCenterOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Ayuda'} />
                    </ListItem>


                </List>
            </Box>
        </Drawer>
    )
}