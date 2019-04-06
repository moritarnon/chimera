import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

class Page3 extends Component {
    render() {
        return (
            <div>
                <Typography variant="h3" align="center">
                    Testing typography
                </Typography>
                <Divider />
                <Typography component="h2" variant="h1" gutterBottom>
                    h1. Heading
                </Typography>
                <Typography variant="h2" gutterBottom>
                    h2. Heading
                </Typography>
                <Typography variant="h3" gutterBottom>
                    h3. Heading
                </Typography>
                <Typography variant="h4" gutterBottom>
                    h4. Heading
                </Typography>
                <Typography variant="h5" gutterBottom>
                    h5. Heading
                </Typography>
                <Typography variant="h6" gutterBottom>
                    h6. Heading
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" gutterBottom>
                    overline text
                </Typography>
            </div>
        );
    }
}

export default Page3;
