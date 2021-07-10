import React, { useState } from 'react'
import { Button, Container, makeStyles, TextField, CssBaseline, Typography } from "@material-ui/core"
import ReactMapGL, { Marker } from 'react-map-gl';


const useStyles = makeStyles((theme) => ({

    outerLayout: {
        backgroundColor: "#1D1D1D",
        height: "100vh",
        display: "flex",

    },
    container: {
        display: "flex",
    },
    contacSection: {
        display: "flex",
        flexBasis: "50%",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center"

    },
    mapSection: {
        display: "flex",
        flexBasis: "50%",


    },
    title: {
        color: "#68F5D9",
        fontSize: "60px",
        fontWeight: "700",
        paddingLeft: theme.spacing(7),
        paddingRight: theme.spacing(5)

    },
    paragraph: {
        color: "#fff",
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(5),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
        fontSize: "15px"
    },
    form: {
        border: "1px solid white",
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        flexDirection: "column",
        marginLeft: theme.spacing(8),
        marginRight: theme.spacing(8)

    },
    name_and_email: {
        display: "flex",
        flexDirection: "row"
    },
    fields: {
        margin: theme.spacing(2),
        backgroundColor: "#2B2B2B",
    },

    // root: {
    //     '&$focused $notchedOutline': {
    //        borderColor: 'orange',
    //        borderBottom: "1px solid red"
    //     }
    //  },
    //  focused: {},
    //  notchedOutline: {}

}))

const initial = {
    name: "",
    email: "",
    Contact: "",
    message: ""
}
export default function Contact() {

    const [inp, setInp] = useState(initial);
    const [submit, setSubmit] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit([...submit, inp]);
        setInp("");
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        let payload = {
            [name]: value
        }
        setInp({ ...inp, ...payload });
    }

    const [viewport, setViewport] = React.useState({
        latitude: 19.076090,
        longitude: 72.877426,
        zoom: 10
    });


    const classes = useStyles();

    return (
        <div className={classes.outerLayout}>
            <Container className={classes.container}>
                <CssBaseline />
                <div className={classes.contacSection}>
                    <Typography className={`${classes.title} ${classes.root} ${classes.underline} ${classes.notchedOutline}`}>Contact me</Typography>
                    <Typography className={classes.paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Perferendis soluta ipsa qui, veniam iure perspiciatis doloremque corporis
                        quidem placeat eligendi iusto.
                    </Typography>

                    <div >
                        <form className={classes.form}>
                            <div className={classes.name_and_email}>
                                <TextField required className={classes.fields} label="Your Name" name="name" value={inp.name} onChange={handleChange} />
                                <TextField required className={classes.fields} label="Email" name="email" value={inp.email} onChange={handleChange} />
                            </div>
                            <TextField type="number" required className={classes.fields} label="contact" name="contact" value={inp.contact} onChange={handleChange} />
                            <TextField required className={classes.fields} multiline rows={4} label="Message" name="message" value={inp.message} onChange={handleChange} />
                            <Button disableRipple="true" className={classes.fields} onClick={handleSubmit}>Submit</Button>
                        </form>

                    </div>

                </div>

                <div className={classes.mapSection}>
                    <ReactMapGL

                        {...viewport}
                        width="100%"
                        height="100%"
                        onViewportChange={(viewport) => setViewport(viewport)}
                        mapboxApiAccessToken={"pk.eyJ1Ijoic2h1YmhhbS0xOTk1IiwiYSI6ImNrcXlhdzQwZjB5aHYyeXF5ZjJhdnhrcGEifQ.EcpR8DQU2Q8sBcT0RnNEaQ"}
                    >
                    </ReactMapGL>
                </div>
            </Container>
        </div>
    )
}
