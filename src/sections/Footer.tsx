import { Grid } from '@mui/material'
import bg from '../assets/images/img12.jpg'
import tank from '../assets/images/tank2.png'
import '../styles/footer.css'
import '../styles/styles.css'
export default function Footer() {
    return (
        <div className='container'>
            <img className='img4' src={bg} />
            <div id='footer-grid'>
                <Grid container spacing={2} >
                    <Grid item container lg={6}>
                        <LeftSection />
                    </Grid>
                    <Grid item lg={6} spacing={2} >
                        <RightSection />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

function LeftSection() {
    return (<div>
        <Grid container spacing={2} id='footer-left-section'>
            <Grid item>
                <img src={tank} id='footer-logo' />
            </Grid>
            <Grid item sx={{ marginTop: '3.5rem' }}>
                <div id='footer-left-sub-text'>Chiến dịch </div>
                <div id='footer-left-text'>Cách Mạng Tháng 8</div>
            </Grid>
        </Grid>
    </div>)
}
function RightSection() {
    return (<div>
        <Grid container spacing={2} id='footer-right-section'>
            <Grid item className='footer-right-sub-text' >
                <div>Sản phẩm của: Nhóm 5</div>
                <div>Môn học: VNR202</div>
            </Grid>
        </Grid>
    </div>)
}