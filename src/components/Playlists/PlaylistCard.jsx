import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

/*  TODO -> красиво отрисовать компонент PlayList */
export const PlayListCard = (props) => {
    return (
        <Box sx={{ className: 'playListCard', padding: '1rem', borderRadius: '8px' }}>
            <Link to={`/playlists/${props.id}`}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
                    >
                        {props.name}
                    </Typography>
                    <img width='320px' height='320px' src={props.images[0].url} alt="Обложка плейлиста" />
                </Box>
            </Link>
        </Box>
    )
}